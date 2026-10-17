import { useState, type FormEvent } from "react";
import ContactDetail from "../ui-components/contactDetails";
import { Link } from "react-router";

const contactDetails = [
  {
    icon: "⌖",
    title: "Visit Us",
    lines: ["Nemanjina 10", "Belgrade, Serbia 11000"],
  },
  {
    icon: "✉",
    title: "Email Us",
    lines: ["hello@wanderer.com"],
  },
  {
    icon: "☎",
    title: "Call Us",
    lines: ["+381 11 146 85221", "Mon - Fri, 9:00 AM - 6:00 PM"],
  },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-background/20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.8),rgba(255,255,255,0.2)),url('/images/contact-hero.png')] bg-cover bg-center" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24">
          <span className="text-sm font-bold uppercase tracking-[2px] text-secondary">
            Get in touch
          </span>

          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Let's plan your next adventure
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Have a question, need help planning your next trip, or just want
            to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-7 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <span className="text-sm font-bold uppercase tracking-[2px] text-secondary">
            Contact information
          </span>

          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            We'd love to hear from you
          </h2>

          <p className="mt-4 max-w-lg leading-relaxed text-ink/75">
            Our travel team is here to help you find the perfect destination
            and make your journey memorable.
          </p>

          <div className="mt-9 space-y-7">
            {contactDetails.map((detail) => (
              <ContactDetail detail={detail} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-background/15 p-6 sm:p-8">
            <span className="text-3xl" aria-hidden="true">
              ✈
            </span>
            <h3 className="mt-3 text-xl font-bold text-primary">
              Your next adventure awaits
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Tell us where you want to go. We'll help you figure out the rest.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div
          id="contact-form"
          className="rounded-2xl border border-ink/10 bg-white p-5 shadow-tour sm:p-8 lg:p-10"
        >
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Send us a message
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mt-8 rounded-xl bg-background/15 p-6"
            >
              <h3 className="font-bold text-primary">
                Thanks for reaching out!
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                This demo form isn't connected to an email service yet.
                Connect your backend to deliver messages.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 font-semibold text-secondary hover:underline"
              >
                Back to form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">
                  What can we help you with? *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="trip-planning">Planning a trip</option>
                  <option value="booking">Existing booking</option>
                  <option value="destinations">Destination advice</option>
                  <option value="custom-tour">Custom tour</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="destination" className="mb-2 block text-sm font-semibold text-ink">
                  Dream destination (optional)
                </label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="e.g. Japan, Greece, Iceland"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your travel plans..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 font-bold text-white transition hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Send message <span aria-hidden="true">→</span>
              </button>

              <p className="text-center text-xs text-ink/60">
                * Required fields
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Final call to action */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-7 lg:px-12 lg:pb-20">
        <div className="flex flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-[2px] text-background">
              Ready to explore?
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Your next story starts here.
            </h2>
            <p className="mt-3 max-w-xl text-white/80">
              Get in touch and let's make your next trip unforgettable.
            </p>
          </div>

          <Link to="/#tour-packages"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-bold text-white transition hover:bg-secondary/90"
          >
            Explore packages <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}