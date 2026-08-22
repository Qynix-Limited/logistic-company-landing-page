"use client"

import * as React from "react"

const noopSubscribe = () => () => {}

/**
 * False on the server and during hydration, true afterwards. Use it to defer
 * rendering anything only knowable on the client (e.g. the resolved theme)
 * that would otherwise cause a hydration mismatch.
 *
 * Implemented with useSyncExternalStore rather than a setState-in-effect so
 * it costs no cascading render.
 */
export function useMounted() {
  return React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  )
}
