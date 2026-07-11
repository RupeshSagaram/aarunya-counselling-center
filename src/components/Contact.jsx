import { useState } from 'react'

// The Contact section shows how to reach the practice (phone/email/address)
// alongside a simple form. The form is frontend-only for now: submitting it
// just shows a thank-you message via local state, it doesn't send an email.
// Hooking it up to a real email service (e.g. Formspree or EmailJS) is a
// follow-up step for later.

// Small inline SVG icons, kept in the same style as the checkmark icon in Services.jsx.
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 flex-shrink-0 text-brand-teal-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.5 1.5 0 00-1.183-1.465l-3.582-.796a1.5 1.5 0 00-1.61.734l-.34.68a1.5 1.5 0 01-1.634.735A11.25 11.25 0 019.75 9.75a1.5 1.5 0 01.735-1.634l.68-.34a1.5 1.5 0 00.734-1.61l-.796-3.582a1.5 1.5 0 00-1.465-1.183H6.75A2.25 2.25 0 004.5 3.75v1.5c0 .414-.336.75-.75.75H2.25z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 flex-shrink-0 text-brand-teal-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75l9.75 6.75 9.75-6.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 flex-shrink-0 text-brand-teal-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  )
}

// Left column: the practice's contact details, each as a clickable link
// where that makes sense (tel: for phone numbers, mailto: for email).
function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h3 className="text-xl font-semibold text-brand-charcoal">Contact Details</h3>

      <ul className="mt-6 space-y-5">
        <li className="flex items-start gap-3">
          <PhoneIcon />
          <div className="flex flex-col text-brand-charcoal/80">
            <a href="tel:+918877996607" className="hover:text-brand-teal-dark">
              +91 8877996607
            </a>
            <a href="tel:+919948666197" className="hover:text-brand-teal-dark">
              +91 9948666197
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <EmailIcon />
          <a
            href="mailto:aarunyacounsellinghub@gmail.com"
            className="text-brand-charcoal/80 hover:text-brand-teal-dark"
          >
            aarunyacounsellinghub@gmail.com
          </a>
        </li>

        <li className="flex items-start gap-3">
          <LocationIcon />
          <p className="text-brand-charcoal/80">
            JJ Makuta Bld., 4th Floor, St.No.7, Habsiguda, Next to NGRI Metro Station,
            Pillar No.964, Hyderabad, India
          </p>
        </li>
      </ul>
    </div>
  )
}

// Right column: a simple "get in touch" form. All three fields live in one
// state object (formData) so we only need one onChange handler instead of
// three separate useState calls.
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // Tracks whether the form has been submitted, so we can swap it out for a thank-you message.
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Updates just the field that changed, using the input's "name" attribute
  // as the key (e.g. typing in the Email field only updates formData.email).
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // This is frontend-only: we don't actually send the message anywhere yet.
  // We just stop the page from reloading and show a confirmation instead.
  // Later, this is where a call to an email service (Formspree, EmailJS, etc.) would go.
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-md">
        <p className="text-lg font-medium text-brand-charcoal">
          Thanks! We'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-md">
      <h3 className="text-xl font-semibold text-brand-charcoal">Send a Message</h3>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-brand-teal-light px-4 py-2 text-brand-charcoal outline-none focus:border-brand-teal"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-brand-teal-light px-4 py-2 text-brand-charcoal outline-none focus:border-brand-teal"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full resize-none rounded-lg border border-brand-teal-light px-4 py-2 text-brand-charcoal outline-none focus:border-brand-teal"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-full bg-brand-teal px-8 py-3 font-medium text-white shadow-md transition-colors hover:bg-brand-teal-dark"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-brand-charcoal">Get in Touch</h2>

        {/* Info card and form stack on mobile, sit side-by-side from the "md" breakpoint up */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
