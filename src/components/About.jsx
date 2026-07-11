// The About section introduces the practitioner. The bio text below is a
// placeholder — replace it with Shailaja's real background, qualifications,
// and approach whenever you're ready.
function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row">
        {/* Placeholder photo box — swap the div below for a real <img> once you have a photo */}
        <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-brand-charcoal">
            About Shailaja Gondlaya
          </h2>
          <p className="mt-1 font-medium text-brand-teal-dark">
            Consultant Psychologist
          </p>

          {/* Placeholder bio — edit this paragraph with the real background/approach */}
          <p className="mt-4 text-brand-charcoal/80">
            [Add bio here — background, qualifications, years of experience, and
            therapeutic approach. This is placeholder text so you can see how the
            section looks; replace it with Shailaja's own story whenever it's ready.]
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
