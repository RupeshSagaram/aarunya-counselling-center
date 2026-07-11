// The Hero is the big welcoming banner visitors see first, right under the Navbar.
// It's mostly just text + a button, styled with Tailwind utility classes.
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-brand-teal-light px-6 pt-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Simple decorative icon (a heart-in-hands style circle) drawn as inline SVG,
            so there's no extra image file or icon library to load. */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4.97-4.03-9-7.7-9-11.5C3 6.5 5.5 4 8.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.5 4 23 6.5 23 9.5c0 3.8-4.03 7.47-9 11.5H12z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-semibold leading-tight text-brand-charcoal sm:text-5xl">
          A Safe Space for Your Mental Wellness Journey
        </h1>

        <p className="mt-4 max-w-xl text-lg text-brand-charcoal/80">
          Aarunya Counselling Center offers compassionate, confidential counselling
          and assessments to help you find balance, clarity, and peace of mind.
        </p>

        {/* Clicking this scrolls smoothly down to the #contact section, since our
            index.css sets scroll-behavior: smooth on the whole page. */}
        <a
          href="#contact"
          className="mt-8 rounded-full bg-brand-teal px-8 py-3 font-medium text-white shadow-md transition-colors hover:bg-brand-teal-dark"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  )
}

export default Hero
