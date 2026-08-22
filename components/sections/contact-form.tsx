"use client"

import { useActionState, useEffect, useId, useRef } from "react"
import { SendIcon } from "lucide-react"
import { toast } from "sonner"

import { submitContactForm } from "@/app/(site)/contact/actions"
import { contactSubjects } from "@/content/contact"
import type { ContactFormState } from "@/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
}

const fieldClass =
  "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )
  const formRef = useRef<HTMLFormElement>(null)
  const id = useId()

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message)
      formRef.current?.reset()
    } else if (state.status === "error") {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${id}-name`}
          name="name"
          label="Your name"
          placeholder="Chukwuemeka Obi"
          error={state.errors.name}
          autoComplete="name"
        />
        <Field
          id={`${id}-email`}
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          error={state.errors.email}
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-subject`}>What is this about?</Label>
        <select
          id={`${id}-subject`}
          name="subject"
          defaultValue=""
          aria-invalid={Boolean(state.errors.subject)}
          aria-describedby={
            state.errors.subject ? `${id}-subject-error` : undefined
          }
          className={fieldClass}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {contactSubjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
        <FieldError id={`${id}-subject-error`} error={state.errors.subject} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-message`}>Message</Label>
        <Textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          placeholder="Tell us what you need — the more detail, the faster we can help."
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={
            state.errors.message ? `${id}-message-error` : undefined
          }
        />
        <FieldError id={`${id}-message-error`} error={state.errors.message} />
      </div>

      <Button
        type="submit"
        size="xl"
        disabled={isPending}
        className="self-start rounded-full"
      >
        {isPending ? "Sending…" : "Send message"}
        <SendIcon />
      </Button>

      <p aria-live="polite" className="sr-only">
        {state.message}
      </p>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  ...props
}: React.ComponentProps<typeof Input> & {
  id: string
  label: string
  error?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="h-10 px-3"
        {...props}
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  )
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={id} className="text-xs text-destructive">
      {error}
    </p>
  )
}
