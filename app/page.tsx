export default function HomePage() {
  const valueCards = [
    {
      title: "Higher Molecular Stability",
      text: "Strategic deuterium substitution strengthens key molecular bonds and helps suppress degradation pathways in demanding blue-emission environments."
    },
    {
      title: "Longer Device Lifetime",
      text: "Our materials platform is designed to support longer operational performance in blue-emitting systems, targeting one of the most critical pain points in OLED development."
    },
    {
      title: "Better Energy Performance",
      text: "Improved material stability can contribute to more efficient device behavior and lower power demand across next-generation display applications."
    },
    {
      title: "Scalable Integration Potential",
      text: "Built with commercialization in mind, our material strategy is intended to align with existing OLED development and manufacturing ecosystems."
    }
  ];

  const techHighlights = [
    {
      title: "Molecular-Level Design",
      text: "Targeted substitution at key positions to improve bond robustness."
    },
    {
      title: "Performance-Oriented Engineering",
      text: "Designed around stability, efficiency, and lifetime requirements relevant to advanced OLED applications."
    },
    {
      title: "Commercial Translation Potential",
      text: "A technology path intended not only for laboratory relevance, but also for industrial adaptation and scalable collaboration."
    }
  ];

  const solutions = [
    {
      title: "Deuterated Blue Emitter Materials",
      text: "Advanced blue-emitting material candidates designed for improved operational stability and performance."
    },
    {
      title: "Deuterium-Enhanced Material Platforms",
      text: "A broader material-engineering platform applicable to host, emitter, or related functional molecular systems."
    },
    {
      title: "Collaborative Custom Development",
      text: "Potential co-development pathways for industrial partners, research institutions, and commercialization programs."
    }
  ];

  const applications = [
    "OLED Displays",
    "Wearable Electronics",
    "AR / VR Devices",
    "Advanced Lighting Systems",
    "Emerging Optoelectronic Platforms"
  ];

  const reasons = [
    {
      title: "Deep-Tech Focus",
      text: "A company strategy built around core materials innovation rather than generic trading or packaging."
    },
    {
      title: "Clear Industry Relevance",
      text: "Focused on a real and well-recognized performance bottleneck in advanced display technology."
    },
    {
      title: "Commercial Mindset",
      text: "Balancing scientific development with industrial application, partnership potential, and long-term scalability."
    },
    {
      title: "Strong Narrative for Partners and Investors",
      text: "A compelling platform story at the intersection of advanced materials, deuterium chemistry, and next-generation electronics."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[12%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/30 bg-white/5 text-sm font-semibold text-blue-200 shadow-lg shadow-blue-500/10">
              DF
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-200">DF ELEMENTS</p>
              <p className="text-xs text-slate-400">Nanotech Pty Ltd</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#technology" className="transition hover:text-white">Technology</a>
            <a href="#solutions" className="transition hover:text-white">Solutions</a>
            <a href="#applications" className="transition hover:text-white">Applications</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="mailto:info@dfelements.com.au"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/20"
          >
            Contact Us
          </a>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-200">
            Advanced Materials • Deuterium-Enabled Innovation • OLED Platform
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Engineering the Future of <span className="text-blue-300">Blue Emission Materials</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            DF Elements Nanotech develops advanced deuterium-enabled materials for next-generation OLED and optoelectronic applications, delivering higher stability, longer operational lifetime, and a more scalable pathway for high-performance blue emission.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@dfelements.com.au"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Partner With Us
            </a>
            <a
              href="#technology"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Explore Our Technology
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 shadow-2xl shadow-blue-950/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_28%)]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-blue-200">Technology Platform</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Molecular-Level Deuterium Engineering</h2>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  Blue OLED Focus
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-blue-200">Core Approach</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Targeted hydrogen-to-deuterium substitution at critical molecular positions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-blue-200">Primary Goal</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Improve stability, lifetime, and translation potential in blue-emitting systems.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-blue-200">Commercial Relevance</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Developed with industrial collaboration and scalable integration in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Why Blue Still Matters</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A critical bottleneck in next-generation display performance
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Blue emission remains one of the most difficult challenges in advanced display materials. Compared with red and green systems, blue materials face greater instability, faster degradation, and tighter performance constraints, limiting device lifetime, efficiency, and commercial scalability.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              DF Elements Nanotech is building a new materials pathway to address this bottleneck through molecular-level deuterium engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">What We Enable</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Value creation at the materials level</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.07]">
              <div className="mb-4 h-11 w-11 rounded-2xl bg-blue-500/10 ring-1 ring-inset ring-blue-400/20" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">About DF Elements Nanotech</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            A deep-tech company focused on advancing blue emission performance
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            DF Elements Nanotech is a deep-tech materials company focused on advancing blue emission performance through deuterium-enabled molecular engineering.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            We combine material innovation, isotope-related process capability, and commercialization thinking to develop high-value solutions for next-generation display and optoelectronic markets.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Our mission is to help unlock more stable, efficient, and commercially viable blue-emitting material systems.
          </p>
          <a
            href="mailto:info@dfelements.com.au"
            className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Learn More About Us
          </a>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6">
            <p className="text-sm font-medium text-blue-200">Platform Focus</p>
            <p className="mt-3 text-2xl font-semibold text-white">Deep-tech materials innovation</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-blue-200">Roadmap</p>
            <p className="mt-3 text-2xl font-semibold text-white">Commercialization-oriented development</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-blue-200">Potential Reach</p>
            <p className="mt-3 text-2xl font-semibold text-white">Global display and optoelectronic applications</p>
          </div>
        </div>
      </section>

      <section id="technology" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Our Technology</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Deuterium substitution at critical molecular positions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              At the core of DF Elements Nanotech is a materials engineering approach centered on deuterium substitution at critical molecular positions.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              By replacing selected hydrogen atoms with deuterium, the platform aims to strengthen vulnerable chemical bonds and reduce the rate of molecular degradation under operational stress. This creates a promising pathway toward improved blue-emitter durability and next-generation device performance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {techHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Solutions in Development</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A flexible platform for advanced materials collaboration</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
        <a
          href="mailto:info@dfelements.com.au"
          className="mt-10 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Discuss Collaboration
        </a>
      </section>

      <section id="applications" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Application Potential</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Built for high-value markets where blue performance matters</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our technology is being developed for high-value markets where blue-emission performance is critical.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 text-center text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Why DF Elements</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Scientific depth with commercial direction</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Built for R&D and Commercial Progress</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                A platform designed for technical validation and strategic collaboration
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                DF Elements Nanotech is developing its platform with a focus on technical validation, commercialization potential, and strategic collaboration. As the company grows, this section can feature research milestones, pilot data, project partnerships, intellectual property, competition achievements, and media recognition.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Proprietary know-how",
                "R&D development roadmap",
                "Industry and academic collaboration potential",
                "Early-stage validation framework"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-medium text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/15 via-slate-900 to-cyan-500/10 p-8 shadow-2xl shadow-blue-950/30 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Let’s Build Together</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Building the next materials platform for blue emission
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            DF Elements Nanotech is seeking conversations with industry partners, researchers, investors, and strategic collaborators interested in next-generation OLED and optoelectronic materials.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@dfelements.com.au"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@dfelements.com.au?subject=Partnership%20Enquiry%20-%20DF%20Elements"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Partner With DF Elements
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-200">DF Elements Nanotech Pty Ltd</p>
            <p className="mt-1">www.dfelements.com.au</p>
            <p className="mt-1">info@dfelements.com.au</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#technology" className="transition hover:text-white">Technology</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
