import {
  BriefcaseBusiness,
  Clock3,
  Layers3,
  Mail,
  UserRound
} from "lucide-react";

const navItems = [
  { label: "Intro", href: "#intro", icon: UserRound },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Capabilities", href: "#capabilities", icon: Layers3 },
  { label: "Experience", href: "#experience", icon: Clock3 },
  { label: "Contact", href: "#contact", icon: Mail }
];

const metrics = [
  { value: "50+", label: "Projects shipped" },
  { value: "4+ yrs", label: "Experience" },
  { value: "8", label: "Core skills" },
  { value: "Open", label: "Availability" }
];

type Project = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  role?: string;
  proof?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Barkchester United Shopify Product Page",
    type: "Shopify build",
    description:
      "A pet product page rebuilt around emotional offer framing, review proof, benefit hierarchy, and a cleaner purchase path.",
    tags: ["Shopify", "Shopify Liquid", "Product page", "Responsive QA"],
    image: "/images/projects/barkchester-united.webp",
    imageAlt: "Barkchester United product page preview",
    role: "Built the Shopify product page and handled the responsive layout polish.",
    proof: "Live Barkchester United discount product page.",
    liveUrl: "https://barkchester.com/products/discount"
  },
  {
    title: "Nest Marketing Netlify Agency Website",
    type: "Agency website",
    description:
      "A premium dark agency website with strong hero messaging, service clarity, lead generation CTA flow, and responsive polish.",
    tags: ["Netlify", "Custom code", "Agency site", "Responsive"],
    image: "/images/projects/nest-marketing-netlify.webp",
    imageAlt: "Nest Marketing agency website preview",
    role: "Built the responsive agency site, refined service positioning, and supported the Netlify launch.",
    proof: "Lead generation agency website with clearer service positioning.",
    liveUrl: "https://nestmarketing.co/"
  },
  {
    title: "Purely Nutrient Black Seed Oil Landing Page",
    type: "Shopify landing page",
    description:
      "A Shopify product landing page for Ethiopian Black Seed Oil focused on review proof, trust badges, bundle offers, and a clear supplement purchase path.",
    tags: ["Shopify", "Gem Pages", "Liquid code", "Product landing page"],
    image: "/images/projects/purely-nutrient.webp",
    imageAlt: "Purely Nutrient black seed oil page preview",
    role: "Built the Shopify landing page with Gem Pages and Liquid code, tightening product storytelling and responsive purchase flow.",
    proof:
      "4.8/5 from 4,463 reviews with sourced-from-Ethiopian-farms and third-party-tested trust cues.",
    liveUrl: "https://purelynutrient.com/pages/ethiopian-black-seed-oil"
  }
];

const capabilities = [
  "WordPress",
  "Elementor",
  "Shopify",
  "GoHighLevel",
  "Figma",
  "HTML/CSS",
  "JavaScript",
  "Zapier / Make"
];

const experience = [
  {
    period: "2026",
    role: "Portfolio foundation",
    company: "Personal brand",
    note: "A clean landing page structure ready for your real work, story, and proof."
  },
  {
    period: "Next",
    role: "Selected work",
    company: "Projects",
    note: "Replace these rows with your roles, internships, freelance work, or product wins."
  },
  {
    period: "Soon",
    role: "Testimonials or credentials",
    company: "Trust signals",
    note: "Use this area for recommendations, certifications, awards, or community proof."
  }
];

function SectionLabel({
  number,
  title,
  action
}: {
  number: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-5">
      <h2 className="font-mono text-sm uppercase text-neutral-500">
        {number} - {title}
      </h2>
      {action ? (
        <span className="font-mono text-xs uppercase text-neutral-400">{action}</span>
      ) : null}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden border-r border-neutral-200 bg-white/86 px-7 py-8 backdrop-blur md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col">
      <a href="#intro" className="font-mono text-sm text-neutral-950">
        John Michael
      </a>

      <nav aria-label="Primary" className="mt-12 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              className="group flex w-fit items-center gap-3 font-mono text-sm text-neutral-500 transition hover:text-neutral-950"
            >
              <Icon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-neutral-950"
                strokeWidth={1.6}
              />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-neutral-200 pt-7">
        <p className="max-w-40 text-sm leading-6 text-neutral-500">
          Content placeholders are ready for your projects, stack, and contact details.
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex font-mono text-sm text-neutral-950 hover:text-neutral-500"
        >
          Start a conversation
        </a>
      </div>
    </aside>
  );
}

function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/88 px-5 py-4 backdrop-blur md:hidden">
      <a href="#intro" className="font-mono text-sm text-neutral-950">
        John Michael
      </a>
      <a href="#contact" className="font-mono text-xs uppercase text-neutral-500">
        Contact
      </a>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Sidebar />
      <MobileHeader />

      <main className="dot-grid md:pl-64">
        <section
          id="intro"
          className="mx-auto grid min-h-[86vh] max-w-6xl content-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-14"
        >
          <div className="order-2 flex items-end lg:order-1">
            <div className="portrait-frame aspect-[4/5] w-full max-w-sm overflow-hidden border border-neutral-200 bg-neutral-50 shadow-[0_24px_90px_rgba(0,0,0,0.08)]">
              <img
                src="/images/john-michael-bonganay.jpg"
                alt="John Michael Bonganay portrait"
                className="h-full w-full object-cover object-[50%_28%]"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className="mb-6 font-mono text-xs uppercase text-neutral-400">
              Landing page developer/web designer
            </p>
            <h1 className="max-w-2xl font-mono text-4xl leading-tight text-neutral-950 sm:text-6xl">
              John Michael Bonganay
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
              I design and build clean, conversion-focused landing pages for
              brands, products, and service businesses that need a sharp first
              impression online.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500">
              My work sits between front-end development and visual design:
              thoughtful structure, responsive execution, and interfaces that feel
              polished without getting noisy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm text-neutral-500">
              <a href="#work" className="hover:text-neutral-950">
                work
              </a>
              <a href="#capabilities" className="hover:text-neutral-950">
                capabilities
              </a>
              <a href="#experience" className="hover:text-neutral-950">
                experience
              </a>
              <a href="#contact" className="hover:text-neutral-950">
                contact
              </a>
              <a
                href="https://www.linkedin.com/in/john-michael-bonganay-802950167/"
                className="hover:text-neutral-950"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14">
          <div className="grid border-y border-neutral-200 bg-white/68 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-neutral-200 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <p className="font-mono text-2xl text-neutral-950">{metric.value}</p>
                <p className="mt-2 font-mono text-xs uppercase text-neutral-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-14">
          <SectionLabel number="01" title="Selected work" action="case studies soon" />
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
              >
                {project.image ? (
                  <div className="mb-7 aspect-[16/10] overflow-hidden border border-neutral-200 bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : null}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-neutral-400">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-neutral-200 px-3 py-1 font-mono text-[11px] uppercase text-neutral-500">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-mono text-2xl leading-tight text-neutral-950">
                  {project.title}
                </h3>
                <p className="mt-5 min-h-24 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>
                {project.role ? (
                  <p className="mt-5 border-l border-neutral-200 pl-4 text-sm font-semibold leading-6 text-neutral-800">
                    {project.role}
                  </p>
                ) : null}
                {project.proof ? (
                  <p className="mt-4 font-mono text-xs uppercase leading-5 text-neutral-400">
                    {project.proof}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-100 px-2.5 py-1 font-mono text-[11px] uppercase text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit border border-neutral-950 px-4 py-2 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                  >
                    Visit live site
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-14"
        >
          <SectionLabel number="02" title="Capabilities" action="stack" />
          <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-white p-5">
                <p className="font-mono text-sm text-neutral-800">{capability}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-14"
        >
          <SectionLabel number="03" title="Experience" action="timeline" />
          <div className="border-t border-neutral-200">
            {experience.map((item) => (
              <article
                key={`${item.period}-${item.role}`}
                className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[120px_1fr_1fr]"
              >
                <p className="font-mono text-sm text-neutral-400">{item.period}</p>
                <div>
                  <h3 className="font-mono text-lg text-neutral-950">{item.role}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{item.company}</p>
                </div>
                <p className="text-sm leading-7 text-neutral-600">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-14">
          <SectionLabel number="04" title="Contact" />
          <div className="grid gap-8 bg-neutral-950 p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400">
                Ready for your real details
              </p>
              <h2 className="mt-4 max-w-2xl font-mono text-3xl leading-tight sm:text-5xl">
                Let&apos;s turn this structure into your personal portfolio.
              </h2>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex w-fit border border-white/20 px-5 py-3 font-mono text-sm text-white transition hover:bg-white hover:text-neutral-950"
            >
              hello@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
