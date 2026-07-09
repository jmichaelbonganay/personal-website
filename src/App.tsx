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
  goal?: string;
  conversionFocus?: string;
  stack?: string[];
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

type ArchiveFilter = "All" | "Shopify" | "WordPress" | "Advertorial";
type BuildMode = "clean" | "proof";
type CopyMode = "before" | "after";

const projects: Project[] = [
  {
    title: "Barkchester United Shopify Product Page",
    type: "Shopify build",
    description:
      "A pet product page rebuilt around emotional offer framing, review proof, benefit hierarchy, and a cleaner purchase path.",
    tags: ["Shopify", "Shopify Liquid", "Product page", "Responsive QA"],
    image: "/images/projects/barkchester-united.webp",
    imageAlt: "Barkchester United product page preview",
    goal: "Improve product clarity and move visitors toward a confident purchase.",
    conversionFocus:
      "Make the pet product offer easier to understand with emotional framing, review proof, and a cleaner path to purchase.",
    stack: ["Shopify", "Shopify Liquid", "Product page", "Responsive QA"],
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
    goal: "Make the agency offer feel premium, focused, and easy to act on.",
    conversionFocus:
      "Lead with revenue-focused positioning, clear service paths, and a direct booking CTA.",
    stack: ["Netlify", "Custom code", "Agency site", "Responsive"],
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
    goal: "Create a supplement landing page that builds trust before the bundle offer.",
    conversionFocus:
      "Use reviews, sourcing badges, bundle options, and product education to support the purchase decision.",
    stack: ["Shopify", "Gem Pages", "Liquid code", "Product landing page"],
    role: "Built the Shopify landing page with Gem Pages and Liquid code, tightening product storytelling and responsive purchase flow.",
    proof:
      "4.8/5 from 4,463 reviews with sourced-from-Ethiopian-farms and third-party-tested trust cues.",
    liveUrl: "https://purelynutrient.com/pages/ethiopian-black-seed-oil"
  }
];

const archiveProjects: ArchiveProject[] = [
  {
    title: "Vista Veil",
    platform: "Shopify",
    category: "Product page",
    note: "Anti-aging eye care product page framed around fast age-defying results and firmness proof.",
    liveUrl: "https://tryvistaveil.com/products/vistaveil-anti-aging"
  },
  {
    title: "Robo Mouse",
    platform: "Shopify",
    category: "Pet product page",
    note: "Smart cat toy page built around furniture-saving play, autonomous movement, and pet activity benefits.",
    liveUrl: "https://robomousetoy.com/products/discounts"
  },
  {
    title: "Skin Spectra",
    platform: "Shopify",
    category: "Beauty product page",
    note: "Anti-aging skincare device page focused on looking younger and at-home beauty transformation.",
    liveUrl: "https://skinspectra.store/products/skin-spectra-anti-aging"
  },
  {
    title: "Grippit",
    platform: "Shopify",
    category: "Fitness product page",
    note: "Grip-strength product page positioned as a 4-in-1 longevity and strength solution.",
    liveUrl: "https://trygrippit.com/products/grippit-strength?"
  },
  {
    title: "Pimax",
    platform: "Shopify",
    category: "Brand storefront",
    note: "VR headset storefront centered on wide-FOV, high-resolution gaming and simulation immersion.",
    liveUrl: "https://pimax.com/"
  },
  {
    title: "Furbulous Pet Brush",
    platform: "Shopify",
    category: "Pet product page",
    note: "Pet grooming product page built around spa-like brushing and ending grooming battles.",
    liveUrl: "https://furbulouspetbrush.com/products/the-spa-brush-that-ends-grooming-battles-forever"
  },
  {
    title: "Skeeter Strike",
    platform: "Shopify",
    category: "Outdoor product page",
    note: "Mosquito-control product page focused on peaceful evenings and portable bug-killing power.",
    liveUrl: "https://skeeterstrike.store/products/skeeter-strike"
  },
  {
    title: "Sister Jane",
    platform: "Shopify",
    category: "Fashion storefront",
    note: "Fashion brand storefront for an elevated London label with romantic and nostalgic positioning.",
    liveUrl: "https://sisterjane.com/"
  },
  {
    title: "Heat Haven",
    platform: "Shopify",
    category: "Wellness product page",
    note: "Heat therapy page focused on joint relief, circulation support, and calmer sleep.",
    liveUrl: "https://heathavensauna.com/products/heat-haven-relief"
  },
  {
    title: "Relive",
    platform: "Shopify",
    category: "Massage product page",
    note: "Massager product page built around deep tissue relief, heat therapy, and cordless hands-free use.",
    liveUrl: "https://relivemassager.com/products/relive"
  },
  {
    title: "Soothe Steps",
    platform: "Shopify",
    category: "Wellness product page",
    note: "Reflexology mat page focused on foot fatigue relief, acupressure, and circulation support.",
    liveUrl: "https://trysoothesteps.com/products/soothe-steps"
  },
  {
    title: "Slumber Seal",
    platform: "Shopify",
    category: "Sleep product page",
    note: "Sleep product page positioned around stress relief and making bedtime easier for busy professionals.",
    liveUrl: "https://slumberseal.com/products/discount"
  },
  {
    title: "Palm Pamper",
    platform: "Shopify",
    category: "Wellness product page",
    note: "Hand therapy page focused on pain relief, stiffness reduction, heat, compression, and mobility.",
    liveUrl: "https://palmpamper.com/products/palm-pamper"
  },
  {
    title: "Calm Core",
    platform: "Shopify",
    category: "Sleep product page",
    note: "Sleep and wellness page framed as a 3-in-1 solution for rest and stress relief at home.",
    liveUrl: "https://relaxwithcalmcore.com/products/sleep"
  },
  {
    title: "Eye Ease",
    platform: "Shopify",
    category: "Eye relief page",
    note: "Eye relief product page focused on digital strain, headaches, and long screen-heavy workdays.",
    liveUrl: "https://relaxwitheyeease.com/products/discount"
  },
  {
    title: "Zoomie Zoom",
    platform: "Shopify",
    category: "Pet product page",
    note: "Cat activity product page framed around keeping pets moving while owners stay focused.",
    liveUrl: "https://tryzoomiezoom.com/products/discount"
  },
  {
    title: "Aqua Blast",
    platform: "WordPress",
    category: "Landing page",
    note: "WordPress landing page structure for a Technohub product campaign.",
    liveUrl: "https://secure.trytechnohub.com/aquablast/"
  },
  {
    title: "Bee Hive Comfort Nest",
    platform: "WordPress",
    category: "Landing page",
    note: "Pet comfort landing page for The Purr Paradise campaign.",
    liveUrl: "https://secure.thepurrparadise.com/bee-hive-comfort-nest/"
  },
  {
    title: "Bark-A-Boop",
    platform: "WordPress",
    category: "Landing page",
    note: "Dog product landing page for WagWonderland campaign traffic.",
    liveUrl: "https://secure.wagwonderland.com/bark-a-boop/"
  },
  {
    title: "Britebuff",
    platform: "WordPress",
    category: "Website page",
    note: "WordPress product site build with a direct brand/product presentation.",
    liveUrl: "https://britebuff.com/"
  },
  {
    title: "MedTraker Pro",
    platform: "WordPress",
    category: "Website page",
    note: "WordPress site build for a medical tracking product brand.",
    liveUrl: "https://medtrakerpro.com/"
  },
  {
    title: "Skeeter Strike Advertorial 01",
    platform: "Advertorial",
    category: "Sales article",
    note: "Mosquito zapper advertorial built around a simple overnight pest-control story.",
    liveUrl: "https://apiv2.getflexy.app/preview/6LFYWuaCjk0aERYmLQt5"
  },
  {
    title: "Skeeter Strike Advertorial 02",
    platform: "Advertorial",
    category: "Sales article",
    note: "Portable mosquito zapper advertorial framed around bite-free summer positioning.",
    liveUrl: "https://apiv2.getflexy.app/preview/StbFO7lPt7cM6T9mTEnL"
  },
  {
    title: "Vista Veil Advertorial",
    platform: "Advertorial",
    category: "Sales article",
    note: "Instant eye-lift advertorial focused on spa-level rejuvenation without appointments.",
    liveUrl: "https://apiv2.getflexy.app/preview/4BywKx28seNA5bWF26WM"
  },
  {
    title: "Grippit Advertorial",
    platform: "Advertorial",
    category: "Sales article",
    note: "Grip-strength advertorial built around opening-confidence and strength improvement hooks.",
    liveUrl: "https://apiv2.getflexy.app/preview/M7dqv9MWL2OCL0iBsojh"
  },
  {
    title: "Skin Spectra Advertorial",
    platform: "Advertorial",
    category: "Sales article",
    note: "Anti-aging skincare advertorial focused on clinical improvement and non-invasive results.",
    liveUrl: "https://apiv2.getflexy.app/preview/VO4FaG8b6xDNi2QgCJT2"
  },
  {
    title: "Eye Ease Advertorial",
    platform: "Advertorial",
    category: "Sales article",
    note: "Digital eye strain advertorial framed around screen fatigue and headache relief.",
    liveUrl: "https://apiv2.getflexy.app/preview/YWAXq8u32gEspyFMbm4e"
  }
];

const ARCHIVE_PAGE_SIZE = 6;
const archiveFilters: ArchiveFilter[] = ["All", "Shopify", "WordPress", "Advertorial"];

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

const conversionChecklist = [
  {
    item: "Clear above-the-fold offer",
    note: "Visitors should understand the product, problem, and main reason to act before they scroll."
  },
  {
    item: "Benefit-driven copy",
    note: "The page should translate features into outcomes, so each block answers why the visitor should care."
  },
  {
    item: "Trust and proof signals",
    note: "Reviews, badges, guarantees, founder notes, and real product context reduce hesitation before the CTA."
  },
  {
    item: "Strong CTA path",
    note: "Every section should make the next action obvious, whether that is buying, booking, or submitting a lead."
  },
  {
    item: "Mobile-first polish",
    note: "The page needs clean spacing, readable copy, tap-friendly buttons, and proof that still works on small screens."
  },
  {
    item: "Fast, clean implementation",
    note: "A conversion page should load quickly, stay easy to edit, and avoid technical clutter that slows launches."
  }
];

const copyExamples = [
  {
    label: "Product page",
    before: "We sell a pet toy that dogs can play with.",
    after: "Keep your dog entertained and anxiety-free when you cannot be there.",
    note: "The improved version leads with the emotional outcome, not just the object being sold."
  },
  {
    label: "Agency page",
    before: "We provide marketing services for brands.",
    after: "Scale your brand's revenue with a launch-ready system built around data, clarity, and speed.",
    note: "The stronger version names the business result and makes the service feel more specific."
  },
  {
    label: "Supplement page",
    before: "Our black seed oil is high quality and easy to take.",
    after: "Support natural cleansing with Ethiopian Black Seed Oil sourced from trusted farms and backed by thousands of reviews.",
    note: "The rewrite combines the benefit, source credibility, and proof in one clearer promise."
  }
];

const healthCheckOptions = [
  {
    label: "More leads",
    result: "Best fit: Conversion-focused landing page rebuild",
    focus: "Hero message, offer clarity, CTA flow, and mobile polish."
  },
  {
    label: "Better product page",
    result: "Best fit: Shopify product page optimization",
    focus: "Benefit hierarchy, product proof, purchase path, and responsive QA."
  },
  {
    label: "Cleaner mobile design",
    result: "Best fit: Mobile-first landing page cleanup",
    focus: "Spacing, tap targets, section rhythm, and fast-loading visual polish."
  },
  {
    label: "Stronger CTA",
    result: "Best fit: CTA and offer path tune-up",
    focus: "Hero promise, repeated CTA points, and low-friction contact path."
  },
  {
    label: "Faster launch",
    result: "Best fit: Launch-ready build sprint",
    focus: "Priority sections, platform setup, clean implementation, and QA before handoff."
  }
];

const buildTypeOptions = [
  {
    label: "Product page",
    title: "Shopify product page",
    focus: "Offer hierarchy, product proof, sticky CTA flow, and responsive purchase path.",
    process: "I shape the product story, build the page in Shopify/Liquid or page builders, then polish mobile QA before launch."
  },
  {
    label: "WP page",
    title: "WordPress landing page",
    focus: "Clear service positioning, lead form flow, trust blocks, and responsive section structure.",
    process: "I turn the offer into a clean page layout, build it in WordPress/Elementor, and keep the handoff easy to edit."
  },
  {
    label: "Advertorial",
    title: "Story-led advertorial",
    focus: "Angle, education flow, proof placement, and bridge to checkout.",
    process: "I organize the story so it earns attention first, then moves readers toward the product or offer naturally."
  },
  {
    label: "Agency",
    title: "Agency website page",
    focus: "Hero positioning, service clarity, case-study path, and book-call CTA flow.",
    process: "I clarify what the agency does, who it helps, and why visitors should trust the next step."
  }
];

const ctaGeneratorOptions = [
  {
    label: "Product page CTA",
    context: "Product page",
    cta: "Get a product page that turns more visitors into buyers",
    note: "Best when the page needs a sharper buying path and clearer offer framing."
  },
  {
    label: "Service business CTA",
    context: "Service business",
    cta: "Book a clearer landing page plan",
    note: "Best when the client sells expertise and needs a lower-friction first step."
  },
  {
    label: "Shopify CTA",
    context: "Shopify store",
    cta: "Improve my Shopify product page",
    note: "Best when the product is live but the page needs stronger proof, layout, or CTA flow."
  },
  {
    label: "Launch CTA",
    context: "Launch sprint",
    cta: "Plan my launch-ready page",
    note: "Best when speed matters and the first version needs to be focused, clean, and shippable."
  }
];

const proofTourSteps = [
  {
    label: "Offer",
    note: "Lead with the clearest promise first, then let every section support that decision."
  },
  {
    label: "Proof",
    note: "Use reviews, performance cues, trust badges, and live examples to reduce hesitation."
  },
  {
    label: "Stack",
    note: "Show the tools behind the build so clients understand what kind of implementation you can handle."
  },
  {
    label: "CTA",
    note: "Make the next action impossible to miss, especially after the visitor has seen the proof."
  }
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
    role: "Landing Page Developer / Web Designer ",
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

function ProjectSlotsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${className} grid grid-cols-2 border border-neutral-200 bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/50`}
    >
      <div className="border-r border-neutral-200 p-3 dark:border-neutral-800">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
          Project slots
        </p>
        <p className="mt-1 font-mono text-lg text-neutral-950 dark:text-neutral-50">2 open</p>
      </div>
      <div className="p-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
          Monthly capacity
        </p>
        <p className="mt-1 font-mono text-lg text-neutral-950 dark:text-neutral-50">4 total</p>
      </div>
    </div>
  );
}

function AvailabilitySnapshot() {
  return (
    <div className="mt-8 max-w-xl border border-neutral-200 bg-white/72 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/72 dark:shadow-[0_18px_60px_rgba(255,255,255,0.03)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
            <span
              aria-hidden="true"
              className="live-status-dot h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
            />
            Available for 1-2 landing page builds this month
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            I keep monthly capacity intentionally limited so each page gets
            strategy, design, and responsive QA attention.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 border border-neutral-950 px-4 py-3 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
        >
          Check availability
        </a>
      </div>
      <ProjectSlotsCard className="mt-4 md:hidden" />
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
        <ProjectSlotsCard className="mt-5" />
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
  const [archivePage, setArchivePage] = useState(1);
  const [archiveFilter, setArchiveFilter] = useState<ArchiveFilter>("All");
  const [buildMode, setBuildMode] = useState<BuildMode>("clean");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeChecklistIndex, setActiveChecklistIndex] = useState(0);
  const [activeCopyExampleIndex, setActiveCopyExampleIndex] = useState(0);
  const [copyMode, setCopyMode] = useState<CopyMode>("before");
  const [activeProofTourIndex, setActiveProofTourIndex] = useState(0);
  const [activeHealthCheckIndex, setActiveHealthCheckIndex] = useState(0);
  const [activeBuildTypeIndex, setActiveBuildTypeIndex] = useState(0);
  const [activeCtaGeneratorIndex, setActiveCtaGeneratorIndex] = useState(0);
  const [showStrategyNotes, setShowStrategyNotes] = useState(false);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    setThemeMotionKey((currentKey) => currentKey + 1);
  };
  const filteredArchiveProjects =
    archiveFilter === "All"
      ? archiveProjects
      : archiveProjects.filter((project) => project.platform === archiveFilter);
  const archivePageCount = Math.max(
    1,
    Math.ceil(filteredArchiveProjects.length / ARCHIVE_PAGE_SIZE)
  );
  const archiveStartIndex = (archivePage - 1) * ARCHIVE_PAGE_SIZE;
  const visibleArchiveProjects = filteredArchiveProjects.slice(
    archiveStartIndex,
    archiveStartIndex + ARCHIVE_PAGE_SIZE
  );
  const archiveVisibleStart = filteredArchiveProjects.length > 0 ? archiveStartIndex + 1 : 0;
  const archiveVisibleEnd = Math.min(
    archiveStartIndex + visibleArchiveProjects.length,
    filteredArchiveProjects.length
  );
  const archiveEmptyRows = ARCHIVE_PAGE_SIZE - visibleArchiveProjects.length;
  const activeCopyExample = copyExamples[activeCopyExampleIndex];
  const activeProofTourStep = proofTourSteps[activeProofTourIndex];
  const activeHealthCheck = healthCheckOptions[activeHealthCheckIndex];
  const activeBuildType = buildTypeOptions[activeBuildTypeIndex];
  const activeCtaGenerator = ctaGeneratorOptions[activeCtaGeneratorIndex];

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
            <AvailabilitySnapshot />
            {showStrategyNotes ? (
              <p className="mt-5 max-w-xl border-l border-neutral-300 pl-4 font-mono text-xs uppercase leading-6 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                Strategy note: Hero - this section immediately states who I help,
                what I build, and why the first impression matters.
              </p>
            ) : null}

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
          <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Featured projects
              </p>
              <h3 className="mt-2 font-mono text-2xl text-neutral-950 dark:text-neutral-50">
                Strongest proof first
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <p className="max-w-sm text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:text-right">
                Scroll down to the compact archive section for more projects.
              </p>
              <div
                aria-label="Build mode"
                className="flex w-fit overflow-hidden border border-neutral-200 font-mono text-xs uppercase dark:border-neutral-800"
              >
                {(["clean", "proof"] as BuildMode[]).map((mode) => {
                  const isActive = buildMode === mode;
                  const label = mode === "clean" ? "Clean mode" : "Proof mode";

                  return (
                    <button
                      key={mode}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setBuildMode(mode)}
                      className={`px-3 py-2 transition ${
                        isActive
                          ? "bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950"
                          : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {showStrategyNotes ? (
            <p className="mb-6 border-l border-neutral-300 pl-4 font-mono text-xs uppercase leading-6 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              Strategy note: Work - featured projects create trust first, then
              the archive gives depth without stretching the page.
            </p>
          ) : null}
          {buildMode === "proof" ? (
            <div className="mb-6 border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                    Guided proof layer
                  </p>
                  <h3 className="mt-2 font-mono text-2xl text-neutral-950 dark:text-neutral-50">
                    Proof mode guided tour
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase">
                  {proofTourSteps.map((step, index) => {
                    const isActive = activeProofTourIndex === index;

                    return (
                      <button
                        key={step.label}
                        type="button"
                        aria-label={`${step.label} tour step`}
                        aria-pressed={isActive}
                        onClick={() => setActiveProofTourIndex(index)}
                        className={`border px-3 py-2 transition ${
                          isActive
                            ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                            : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                        }`}
                      >
                        {step.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                {activeProofTourStep.note}
              </p>
            </div>
          ) : null}
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
                {buildMode === "proof" ? (
                  <div className="mt-6 border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
                    <p className="font-mono text-[11px] uppercase text-neutral-400 dark:text-neutral-500">
                      Conversion focus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {project.conversionFocus}
                    </p>
                    <p className="mt-4 font-mono text-[11px] uppercase text-neutral-400 dark:text-neutral-500">
                      Stack
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {(project.stack ?? project.tags).join(" / ")}
                    </p>
                  </div>
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
                <div className="mt-8 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex w-fit border border-neutral-200 px-4 py-2 font-mono text-xs uppercase text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                  >
                    Quick preview
                  </button>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit border border-neutral-950 px-4 py-2 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
                    >
                      Visit live site
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div id="more-builds" className="mt-14">
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  More builds
                </p>
                <h3 className="mt-2 font-mono text-2xl text-neutral-950 dark:text-neutral-50">
                  Compact project archive
                </h3>
              </div>
            </div>
            <div className="mb-4 flex flex-wrap gap-2 font-mono text-xs uppercase">
              {archiveFilters.map((filter) => {
                const isActive = archiveFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-label={`${filter} filter`}
                    aria-pressed={isActive}
                    onClick={() => {
                      setArchiveFilter(filter);
                      setArchivePage(1);
                    }}
                    className={`border px-3 py-2 transition ${
                      isActive
                        ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                        : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="archive-list border-y border-neutral-200 bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/60">
              {visibleArchiveProjects.map((project, index) => (
                <article
                  key={`${project.title}-${project.platform}-${archiveStartIndex + index}`}
                  data-archive-slot="true"
                  data-testid="archive-project-row"
                  className="grid min-h-[148px] gap-4 border-b border-neutral-200 px-4 py-5 last:border-b-0 md:grid-cols-[64px_1fr_140px_160px_auto] md:items-center dark:border-neutral-800"
                >
                  <p className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
                    {String(archiveStartIndex + index + projects.length + 1).padStart(2, "0")}
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
              {Array.from({ length: archiveEmptyRows }, (_, index) => (
                <div
                  key={`archive-empty-row-${index}`}
                  aria-hidden="true"
                  data-archive-slot="true"
                  data-testid="archive-project-placeholder"
                  className="min-h-[148px] border-b border-neutral-200 last:border-b-0 dark:border-neutral-800"
                />
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800">
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Showing {archiveVisibleStart}-{archiveVisibleEnd} of {filteredArchiveProjects.length} builds
              </p>
              <nav
                aria-label="Archive pagination"
                className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase"
              >
                <button
                  type="button"
                  aria-label="Previous archive page"
                  disabled={archivePage === 1}
                  onClick={() => setArchivePage((currentPage) => Math.max(1, currentPage - 1))}
                  className="border border-neutral-200 px-3 py-2 text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950 disabled:pointer-events-none disabled:opacity-35 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                >
                  Previous
                </button>
                {Array.from({ length: archivePageCount }, (_, index) => {
                  const pageNumber = index + 1;
                  const isCurrentPage = pageNumber === archivePage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      aria-label={`Archive page ${pageNumber}`}
                      aria-current={isCurrentPage ? "page" : undefined}
                      onClick={() => setArchivePage(pageNumber)}
                      className={`border px-3 py-2 transition ${
                        isCurrentPage
                          ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                          : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                      }`}
                    >
                      {String(pageNumber).padStart(2, "0")}
                    </button>
                  );
                })}
                <button
                  type="button"
                  aria-label="Next archive page"
                  disabled={archivePage === archivePageCount}
                  onClick={() =>
                    setArchivePage((currentPage) => Math.min(archivePageCount, currentPage + 1))
                  }
                  className="border border-neutral-200 px-3 py-2 text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950 disabled:pointer-events-none disabled:opacity-35 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-14"
        >
          <SectionLabel number="02" title="Capabilities" action="stack" />
          {showStrategyNotes ? (
            <p className="mb-6 border-l border-neutral-300 pl-4 font-mono text-xs uppercase leading-6 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              Strategy note: Capabilities - this turns the stack into a
              conversion process, not just a list of tools.
            </p>
          ) : null}
          <div className="mb-8 grid gap-5 border border-neutral-200 bg-white p-5 md:grid-cols-[0.85fr_1.15fr] dark:border-neutral-800 dark:bg-neutral-950">
            <div>
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Conversion thinking
              </p>
              <h3 className="mt-3 font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                Conversion page checklist
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                A quick look at the decisions I check before a page is ready to convert.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800">
              {conversionChecklist.map((check, index) => {
                const isActive = activeChecklistIndex === index;

                return (
                  <div key={check.item} className="bg-white dark:bg-neutral-950">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`conversion-check-${index}`}
                      onClick={() => setActiveChecklistIndex(index)}
                      className={`flex w-full items-center justify-between gap-4 p-4 text-left transition ${
                        isActive
                          ? "bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                      }`}
                    >
                      <span className="font-mono text-sm">{check.item}</span>
                      <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                    </button>
                    {isActive ? (
                      <p
                        id={`conversion-check-${index}`}
                        className="border-t border-neutral-200 p-4 text-sm leading-7 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        {check.note}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-8 grid gap-5 lg:grid-cols-2">
            <div className="border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                Client fit
              </p>
              <h3 className="mt-3 font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                Build Type Selector
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                Choose the kind of page you need and see where I would focus the build.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs uppercase">
                {buildTypeOptions.map((option, index) => {
                  const isActive = activeBuildTypeIndex === index;

                  return (
                    <button
                      key={option.label}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveBuildTypeIndex(index)}
                      className={`border px-3 py-2 transition ${
                        isActive
                          ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                          : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  {activeBuildType.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  Focus: {activeBuildType.focus}
                </p>
                <p className="mt-3 border-t border-neutral-200 pt-3 text-sm leading-7 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                  {activeBuildType.process}
                </p>
              </div>
            </div>
            <div className="border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
              <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                CTA lab
              </p>
              <h3 className="mt-3 font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                CTA Copy Generator
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                Pick a page context and get a sharper CTA direction for that offer.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs uppercase">
                {ctaGeneratorOptions.map((option, index) => {
                  const isActive = activeCtaGeneratorIndex === index;

                  return (
                    <button
                      key={option.label}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveCtaGeneratorIndex(index)}
                      className={`border px-3 py-2 transition ${
                        isActive
                          ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                          : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  {activeCtaGenerator.context}
                </p>
                <p className="mt-3 text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                  {activeCtaGenerator.cta}
                </p>
                <p className="mt-4 border-t border-neutral-200 pt-3 text-sm leading-7 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                  {activeCtaGenerator.note}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8 border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  Copy lab
                </p>
                <h3 className="mt-3 font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                  Before / After Copy Switcher
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                  Toggle weak copy into a sharper conversion message and see what changed.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs uppercase">
                  {copyExamples.map((example, index) => {
                    const isActive = activeCopyExampleIndex === index;

                    return (
                      <button
                        key={example.label}
                        type="button"
                        aria-label={`${example.label} example`}
                        aria-pressed={isActive}
                        onClick={() => setActiveCopyExampleIndex(index)}
                        className={`border px-3 py-2 transition ${
                          isActive
                            ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                            : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                        }`}
                      >
                        {example.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
                <div className="mb-4 flex w-fit overflow-hidden border border-neutral-200 font-mono text-xs uppercase dark:border-neutral-800">
                  {(["before", "after"] as CopyMode[]).map((mode) => {
                    const isActive = copyMode === mode;

                    return (
                      <button
                        key={mode}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setCopyMode(mode)}
                        className={`px-3 py-2 transition ${
                          isActive
                            ? "bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950"
                            : "bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                        }`}
                      >
                        {mode === "before" ? "Before" : "After"}
                      </button>
                    );
                  })}
                </div>
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  {activeCopyExample.label}
                </p>
                <p className="mt-4 text-2xl leading-tight text-neutral-950 dark:text-neutral-50">
                  {copyMode === "before" ? activeCopyExample.before : activeCopyExample.after}
                </p>
                <p className="mt-5 border-t border-neutral-200 pt-4 text-sm leading-7 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
                  {activeCopyExample.note}
                </p>
              </div>
            </div>
          </div>
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
          {showStrategyNotes ? (
            <p className="mb-6 border-l border-neutral-300 pl-4 font-mono text-xs uppercase leading-6 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              Strategy note: Contact - the final section keeps the ask simple:
              one clear next step and one direct email path.
            </p>
          ) : null}
          <div className="grid gap-8 bg-neutral-950 p-7 text-white sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch dark:bg-white dark:text-neutral-950">
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
            <div className="grid gap-4">
              <div className="border border-white/15 bg-white/[0.04] p-5 dark:border-neutral-950/15 dark:bg-neutral-950/[0.04]">
                <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                  Quick diagnosis
                </p>
                <h3 className="mt-3 font-mono text-2xl leading-tight">
                  Landing Page Health Check
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400 dark:text-neutral-600">
                  Pick the problem closest to your page and I&apos;ll show the
                  direction I would start with.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs uppercase">
                  {healthCheckOptions.map((option, index) => {
                    const isActive = activeHealthCheckIndex === index;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveHealthCheckIndex(index)}
                        className={`border px-3 py-2 transition ${
                          isActive
                            ? "border-white bg-white text-neutral-950 dark:border-neutral-950 dark:bg-neutral-950 dark:text-white"
                            : "border-white/15 text-neutral-300 hover:border-white hover:text-white dark:border-neutral-950/15 dark:text-neutral-600 dark:hover:border-neutral-950 dark:hover:text-neutral-950"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-5 border border-white/15 bg-neutral-900 p-4 dark:border-neutral-950/15 dark:bg-neutral-100">
                  <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                    {activeHealthCheck.result}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-200 dark:text-neutral-700">
                    Recommended focus: {activeHealthCheck.focus}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:johnmichaelbonganay1231@gmail.com"
                  className="inline-flex w-fit border border-white/20 px-5 py-3 font-mono text-sm text-white transition hover:bg-white hover:text-neutral-950 dark:border-neutral-950/20 dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white"
                >
                  johnmichaelbonganay1231@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/john-michael-bonganay-802950167/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit border border-white/20 px-5 py-3 font-mono text-sm text-white transition hover:bg-white hover:text-neutral-950 dark:border-neutral-950/20 dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white"
                >
                  LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </section>
        {selectedProject ? (
          <div className="fixed inset-0 z-50 flex items-end bg-neutral-950/55 px-4 py-6 backdrop-blur-sm sm:items-center sm:justify-center">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-preview-title"
              className="max-h-[86vh] w-full max-w-2xl overflow-y-auto border border-neutral-200 bg-white p-6 shadow-[0_30px_120px_rgba(0,0,0,0.22)] dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">
                    Project quick preview
                  </p>
                  <h2
                    id="project-preview-title"
                    className="mt-3 font-mono text-2xl leading-tight text-neutral-950 dark:text-neutral-50"
                  >
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close project preview"
                  onClick={() => setSelectedProject(null)}
                  className="border border-neutral-200 px-3 py-2 font-mono text-xs uppercase text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                >
                  Close
                </button>
              </div>
              <div className="mt-7 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 dark:border-neutral-800 dark:bg-neutral-800">
                {[
                  ["Platform", selectedProject.type],
                  ["Goal", selectedProject.goal],
                  ["My role", selectedProject.role],
                  ["Conversion focus", selectedProject.conversionFocus],
                  ["Stack", (selectedProject.stack ?? selectedProject.tags).join(" / ")],
                  ["Proof", selectedProject.proof]
                ].map(([label, value]) => (
                  <div key={label} className="bg-white p-4 dark:bg-neutral-950">
                    <p className="font-mono text-[11px] uppercase text-neutral-400 dark:text-neutral-500">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit border border-neutral-950 px-4 py-2 font-mono text-xs uppercase text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
                >
                  Open live site
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </main>
      <button
        type="button"
        aria-pressed={showStrategyNotes}
        onClick={() => setShowStrategyNotes((current) => !current)}
        className="fixed bottom-5 right-5 z-40 border border-neutral-950 bg-white px-4 py-3 font-mono text-xs uppercase text-neutral-950 shadow-[0_18px_60px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white active:scale-95 dark:border-neutral-100 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
      >
        {showStrategyNotes ? "Hide strategy notes" : "Show strategy notes"}
      </button>
    </div>
  );
}
