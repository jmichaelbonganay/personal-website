import {
  BriefcaseBusiness,
  Clock3,
  Layers3,
  Mail,
  Moon,
  Sun,
  UserRound
} from "lucide-react";
import { useState } from "react";

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

type ArchiveProject = {
  title: string;
  platform: string;
  category: string;
  note: string;
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

const archiveProjects: ArchiveProject[] = [
  {
    title: "Future project slot",
    platform: "Shopify",
    category: "Product page",
    note: "Add a conversion-focused build with a short result or role summary."
  },
  {
    title: "Future project slot",
    platform: "WordPress",
    category: "Landing page",
    note: "Reserve this row for a service, brand, or campaign landing page."
  },
  {
    title: "Future project slot",
    platform: "GoHighLevel",
    category: "Sales funnel",
    note: "Use this row for a funnel, automation flow, or lead capture system."
  },
  {
    title: "Future project slot",
    platform: "Custom code",
    category: "Website build",
    note: "Add a coded build, agency site, or launch-ready web experience."
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
    period: "April 2023 - April 2026",
    role: "Landing Page Developer / Web Designer",
    company: "Cherrington Media",
    note: "Designed responsive WordPress landing pages, built Shopify product pages, created GoHighLevel funnels, and connected forms, email tools, payments, logistics, tracking, and lead workflows."
  },
  {
    period: "2022 - 2023",
    role: "Landing Page Developer / Web Designer",
    company: "Nest Marketing",
    note: "Designed high-fidelity layouts in Figma and Sketch, built responsive websites from approved designs, maintained WordPress sites, improved on-page SEO, set up Google Analytics, and configured Zapier workflows."
  },
  {
    period: "2019",
    role: "Bachelor of Science in Information Technology",
    company: "Bicol University College of Science",
    note: "Built the technical foundation behind web development, systems thinking, digital operations, and the front-end work that shaped the landing page and automation roles."
  }
];

type Theme = "light" | "dark";

function ThemeToggle({
  theme,
  motionKey,
  onToggle
}: {
  theme: Theme;
  motionKey: number;
  onToggle: () => void;
}) {
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={onToggle}
      className="theme-toggle group relative inline-flex w-fit items-center gap-2 overflow-hidden border border-neutral-200 px-3 py-2 font-mono text-xs uppercase text-neutral-500 transition hover:-translate-y-0.5 hover:border-neutral-950 hover:text-neutral-950 active:scale-95 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
    >
      <span
        key={`theme-flash-${motionKey}`}
        aria-hidden="true"
        className="theme-toggle-flash pointer-events-none absolute inset-0 bg-neutral-950/10 dark:bg-white/15"
      />
      <span key={`theme-icon-${theme}`} className="theme-toggle-icon relative z-10 inline-flex">
        <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.7} />
      </span>
      <span className="relative z-10">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

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
    <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-5 dark:border-neutral-800">
      <h2 className="font-mono text-sm uppercase text-neutral-500 dark:text-neutral-400">
        {number} - {title}
      </h2>
      {action ? (
        <span className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">{action}</span>
      ) : null}
    </div>
  );
}

function Sidebar({
  theme,
  themeMotionKey,
  onThemeToggle
}: {
  theme: Theme;
  themeMotionKey: number;
  onThemeToggle: () => void;
}) {
  return (
    <aside className="hidden border-r border-neutral-200 bg-white/86 px-7 py-8 backdrop-blur md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col dark:border-neutral-800 dark:bg-neutral-950/88">
      <a href="#intro" className="font-mono text-sm text-neutral-950 dark:text-neutral-50">
        John Michael
      </a>

      <nav aria-label="Primary" className="mt-12 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              className="group flex w-fit items-center gap-3 font-mono text-sm text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
            >
              <Icon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-neutral-50"
                strokeWidth={1.6}
              />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-neutral-200 pt-7 dark:border-neutral-800">
        <p className="max-w-40 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
          Building conversion-focused pages that turn visitors into leads, buyers, and booked calls.
        </p>
        <div className="mt-5">
          <ThemeToggle theme={theme} motionKey={themeMotionKey} onToggle={onThemeToggle} />
        </div>
        <a
          href="#contact"
          className="mt-5 inline-flex font-mono text-sm text-neutral-950 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-400"
        >
          Start a conversation
        </a>
      </div>
    </aside>
  );
}

function MobileHeader({
  theme,
  themeMotionKey,
  onThemeToggle
}: {
  theme: Theme;
  themeMotionKey: number;
  onThemeToggle: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/88 px-5 py-4 backdrop-blur md:hidden dark:border-neutral-800 dark:bg-neutral-950/88">
      <a href="#intro" className="font-mono text-sm text-neutral-950 dark:text-neutral-50">
        John Michael
      </a>
      <div className="flex items-center gap-3">
        <ThemeToggle theme={theme} motionKey={themeMotionKey} onToggle={onThemeToggle} />
        <a href="#contact" className="font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
          Contact
        </a>
      </div>
    </header>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [themeMotionKey, setThemeMotionKey] = useState(0);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    setThemeMotionKey((currentKey) => currentKey + 1);
  };

  return (
    <div
      data-theme={theme}
      data-theme-motion={themeMotionKey}
      className={`theme-shell min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-neutral-100 ${theme === "dark" ? "dark" : ""}`}
    >
      <Sidebar theme={theme} themeMotionKey={themeMotionKey} onThemeToggle={toggleTheme} />
      <MobileHeader theme={theme} themeMotionKey={themeMotionKey} onThemeToggle={toggleTheme} />

      <main className="dot-grid md:pl-64">
        <section
          id="intro"
          className="mx-auto grid min-h-[86vh] max-w-6xl content-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-14"
        >
          <div className="order-2 flex items-end lg:order-1">
            <div className="portrait-frame aspect-[4/5] w-full max-w-sm overflow-hidden border border-neutral-200 bg-neutral-50 shadow-[0_24px_90px_rgba(0,0,0,0.08)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_24px_90px_rgba(255,255,255,0.04)]">
              <img
                src="/images/john-michael-bonganay.png"
                alt="John Michael Bonganay portrait"
                className="h-full w-full object-cover object-[50%_28%]"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className="mb-6 font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
              Landing page developer/web designer
            </p>
            <h1 className="max-w-2xl font-mono text-4xl leading-tight text-neutral-950 sm:text-6xl dark:text-neutral-50">
              John Michael Bonganay
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              I design and build clean, conversion-focused landing pages for
              brands, products, and service businesses that need a sharp first
              impression online.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
              My work sits between front-end development and visual design:
              thoughtful structure, responsive execution, and interfaces that feel
              polished without getting noisy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm text-neutral-500 dark:text-neutral-400">
              <a href="#work" className="hover:text-neutral-950 dark:hover:text-neutral-50">
                work
              </a>
              <a href="#capabilities" className="hover:text-neutral-950 dark:hover:text-neutral-50">
                capabilities
              </a>
              <a href="#experience" className="hover:text-neutral-950 dark:hover:text-neutral-50">
                experience
              </a>
              <a href="#contact" className="hover:text-neutral-950 dark:hover:text-neutral-50">
                contact
              </a>
              <a
                href="https://www.linkedin.com/in/john-michael-bonganay-802950167/"
                className="hover:text-neutral-950 dark:hover:text-neutral-50"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14">
          <div className="grid border-y border-neutral-200 bg-white/68 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-950/68">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-neutral-200 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 dark:border-neutral-800"
              >
                <p className="font-mono text-2xl text-neutral-950 dark:text-neutral-50">{metric.value}</p>
                <p className="mt-2 font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-14">
          <SectionLabel number="01" title="Selected work" action="featured + archive" />
          <div className="mb-5 flex items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Featured projects
              </p>
              <h3 className="mt-2 font-mono text-2xl text-neutral-950 dark:text-neutral-50">
                Strongest proof first
              </h3>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:block">
              Keep the top of the portfolio curated, then let the archive carry the rest.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-testid="featured-project-card"
                className="group flex flex-col border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-[0_20px_70px_rgba(255,255,255,0.04)]"
              >
                {project.image ? (
                  <div className="mb-7 aspect-[16/10] overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : null}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-neutral-200 px-3 py-1 font-mono text-[11px] uppercase text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                  {project.title}
                </h3>
                <p className="mt-5 min-h-24 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                {project.role ? (
                  <p className="mt-5 border-l border-neutral-200 pl-4 text-sm font-semibold leading-6 text-neutral-800 dark:border-neutral-800 dark:text-neutral-200">
                    {project.role}
                  </p>
                ) : null}
                {project.proof ? (
                  <p className="mt-4 font-mono text-xs uppercase leading-5 text-neutral-400 dark:text-neutral-500">
                    {project.proof}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-100 px-2.5 py-1 font-mono text-[11px] uppercase text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400"
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
                    className="mt-8 inline-flex w-fit border border-neutral-950 px-4 py-2 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
                  >
                    Visit live site
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-14">
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  More builds
                </p>
                <h3 className="mt-2 font-mono text-2xl text-neutral-950 dark:text-neutral-50">
                  Compact project archive
                </h3>
              </div>
              <p className="hidden max-w-sm text-right text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:block">
                Add future projects here without stretching the landing page.
              </p>
            </div>

            <div className="border-y border-neutral-200 bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/60">
              {archiveProjects.map((project, index) => (
                <article
                  key={`${project.title}-${project.platform}-${index}`}
                  data-testid="archive-project-row"
                  className="grid gap-4 border-b border-neutral-200 px-4 py-5 last:border-b-0 md:grid-cols-[64px_1fr_140px_160px_auto] md:items-center dark:border-neutral-800"
                >
                  <p className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
                    {String(index + projects.length + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h4 className="font-mono text-base text-neutral-950 dark:text-neutral-50">
                      {project.title}
                    </h4>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                      {project.note}
                    </p>
                  </div>
                  <p className="w-fit bg-neutral-100 px-2.5 py-1 font-mono text-[11px] uppercase text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                    {project.platform}
                  </p>
                  <p className="font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
                    {project.category}
                  </p>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit border border-neutral-950 px-3 py-2 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
                    >
                      View
                    </a>
                  ) : (
                    <span className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                      Details soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-14"
        >
          <SectionLabel number="02" title="Capabilities" action="stack" />
          <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-white p-5 dark:bg-neutral-950">
                <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">{capability}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-14"
        >
          <SectionLabel number="03" title="Experience" action="timeline" />
          <div className="border-t border-neutral-200 dark:border-neutral-800">
            {experience.map((item) => (
              <article
                key={`${item.period}-${item.role}`}
                className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[120px_1fr_1fr] dark:border-neutral-800"
              >
                <p className="font-mono text-sm text-neutral-400 dark:text-neutral-500">{item.period}</p>
                <div>
                  <h3 className="font-mono text-lg text-neutral-950 dark:text-neutral-50">{item.role}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{item.company}</p>
                </div>
                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-14">
          <SectionLabel number="04" title="Contact" />
          <div className="grid gap-8 bg-neutral-950 p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end dark:bg-white dark:text-neutral-950">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Available for landing page and automation work
              </p>
              <h2 className="mt-4 max-w-2xl font-mono text-3xl leading-tight sm:text-5xl">
                Let&apos;s build a cleaner landing page, funnel, or workflow for your next launch.
              </h2>
              <div className="mt-7 grid gap-2 font-mono text-xs uppercase leading-6 text-neutral-400 sm:grid-cols-2 dark:text-neutral-500">
                <p>Tabaco City, Philippines</p>
                <p>Full-time / flexible across US, UK, and AU time zones</p>
              </div>
            </div>
            <a
              href="mailto:johnmichaelbonganay1231@gmail.com"
              className="inline-flex w-fit border border-white/20 px-5 py-3 font-mono text-sm text-white transition hover:bg-white hover:text-neutral-950 dark:border-neutral-950/20 dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white"
            >
              johnmichaelbonganay1231@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
