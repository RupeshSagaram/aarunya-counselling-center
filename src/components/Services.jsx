// A small reusable checkmark icon used next to every service list item.
// Defining it once here avoids repeating the same SVG markup for every item.
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

// The two lists of services, kept as plain data so the JSX below just loops
// over them instead of repeating near-identical markup twice.
const counsellingItems = [
  'Individual / Family / Group',
  'Behaviour Modification',
  'Stress Management',
  'Relaxation Therapy',
  'Domestic Violence - Couple Therapy',
  'Specialized in Managing Teenage Psycho Social Issues (TISS)',
]

const assessmentItems = [
  'Developmental Assessment',
  'Intelligence Assessment',
  'Learning Disability',
  'Behavioural Assessment',
]

// One card component reused for both "Counselling" and "Assessments",
// so the two columns stay visually consistent.
function ServiceCard({ title, items }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold text-brand-charcoal">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-brand-charcoal/80">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="bg-brand-teal-light px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-brand-charcoal">
          Our Services
        </h2>

        {/* Two cards stack on mobile, sit side-by-side from the "md" breakpoint up */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ServiceCard title="Counselling" items={counsellingItems} />
          <ServiceCard title="Assessments" items={assessmentItems} />
        </div>
      </div>
    </section>
  )
}

export default Services
