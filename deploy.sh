#!/usr/bin/env bash
#
# Deploy the FIAMOVE / on the VPS.
#
#   cd /var/www/fiamovewebsite && ./deploy.sh
#
# Next builds are the biggest transient memory spike on this box, so deploy
# one app at a time rather than running these in parallel.
set -euo pipefail

APP_NAME="${APP_NAME:-fiamovewebsite}"
PORT="${PORT:-3001}"
cd "$(dirname "$0")"

echo "==> Pulling"
git pull --ff-only

echo "==> Installing"
npm ci

echo "==> Building"
npm run build

echo "==> Restarting"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 restart "$APP_NAME" --update-env
else
  pm2 start npm --name "$APP_NAME" -- start
fi
pm2 save

echo "==> Health"
for i in $(seq 1 20); do
  code=$(curl -s -m 3 -o /dev/null -w '%{http_code}' "http://127.0.0.1:${PORT}/" || true)
  case "$code" in
    200|30[0-9])
      echo "    OK — ${PORT}/ returned $code"
      exit 0 ;;
  esac
  sleep 2
done

echo "    FAILED — nothing served on ${PORT}. Last 40 log lines:" >&2
pm2 logs "$APP_NAME" --lines 40 --nostream >&2 || true
exit 1
