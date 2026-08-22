"use server"

import { contactSubjects } from "@/content/contact"
import type { ContactFormState } from "@/types"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const validSubjects = contactSubjects.map(
  (subject) => subject.value
) as string[]

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  const errors: ContactFormState["errors"] = {}

  if (name.length < 2) errors.name = "Please tell us your name."
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address."
  if (!validSubjects.includes(subject)) errors.subject = "Choose a subject."
  if (message.length < 20) {
    errors.message = "Give us a little more detail (at least 20 characters)."
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    }
  }

  // TODO: wire an email/CRM provider here (Resend, Postmark, HubSpot…).
  // Until then the submission is only logged server-side so the form is
  // obviously not yet delivering mail.
  console.info("[contact] submission received", { name, email, subject })

  return {
    status: "success",
    message:
      "Thanks — we have your message and will reply within one business day.",
    errors: {},
  }
}
