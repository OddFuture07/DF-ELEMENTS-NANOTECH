export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DF Elements Nanotech Logo"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-wide text-slate-900 sm:text-lg">
                DF Elements Nanotech
              </div>
              <div className="text-xs text-slate-500 sm:text-sm">
                Advanced Deuterated Materials
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-sky-600">
              About
            </a>
            <a href="#technology" className="transition hover:text-sky-600">
              Technology
            </a>
            <a href="#applications" className="transition hover:text-sky-600">
              Applications
            </a>
            <a href="#advantages" className="transition hover:text-sky-600">
              Advantages
            </a>
            <a href="#contact" className="transition hover:text-sky-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              Next-generation materials for advanced display technologies
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deuterated blue-emitting materials for a more stable OLED future
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              DF Elements Nanotech is building advanced deuterated materials
              designed to improve blue-emitter stability, extend device lifetime,
              and support the next wave of high-performance display innovation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#technology"
                className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Explore Technology
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">OLED</div>
                <div className="mt-1 text-sm text-slate-300">
                  Materials innovation focus
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">Blue</div>
                <div className="mt-1 text-sm text-slate-300">
                  High-value performance challenge
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">DF</div>
                <div className="mt-1 text-sm text-slate-300">
                  Science-driven material platform
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                  Material Vision
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Stability Enhancement
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Targeting higher bond stability and improved operational
                      durability in demanding blue-emitter environments.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Advanced Molecular Design
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Combining deuteration strategy with material engineering
                      for next-generation optoelectronic performance.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Commercial Readiness
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Built with a future-facing roadmap for display, materials
                      supply, and industrial partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A material science company focused on the future of blue OLED
            </h2>
          </div>

          <div className="text-base leading-8 text-slate-600">
            <p>
              DF Elements Nanotech is dedicated to developing advanced
              deuterated materials for high-value applications in modern display
              systems. Our mission is to address one of the industry’s most
              persistent challenges: improving the lifetime and reliability of
              blue-emitting materials.
            </p>
            <p className="mt-4">
              We combine scientific rigor, practical engineering thinking, and a
              commercialization mindset to bridge the gap between breakthrough
              materials research and real-world industrial adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Technology
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why deuterated materials matter
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              In advanced emissive systems, material stability plays a critical
              role in performance and lifetime. Deuteration strategies can help
              strengthen molecular behavior under operational stress, supporting
              more durable blue-emitter solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Molecular Stability
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improved bond resilience for better endurance in challenging
                emission environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Blue Emitter Focus
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Addressing one of the most technically demanding segments in
                OLED material development.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Performance Potential
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supporting improved device reliability, operational lifetime,
                and next-gen product quality.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Scalable Vision
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Designed with future manufacturing, partnership, and commercial
                integration in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Applications
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Positioned for advanced display and optoelectronic applications
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Consumer Displays
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                High-end display systems requiring better color performance,
                efficiency, and lifetime.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Wearable Devices
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Compact devices where material durability and display quality
                are both critical.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Emerging Optoelectronics
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Future-facing opportunities across advanced light-emitting and
                related high-performance material systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Advantages
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes DF Elements different
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Focused technical direction</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We are targeting a specific, high-impact challenge in advanced
                material systems rather than taking a broad but diluted approach.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                Science + commercialization mindset
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Our development approach is designed to connect research value
                with industrial relevance and market potential.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                Future partnership potential
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We aim to work with ecosystem partners across research,
                manufacturing, and application development.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Strong brand foundation</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                DF Elements is being built as a clean, credible, innovation-led
                materials brand for global opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let’s build the next generation of materials together
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We welcome conversations with research collaborators, industrial
            partners, investors, and strategic stakeholders.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@dfelements.com.au"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              info@dfelements.com.au
            </a>
            <a
              href="https://www.dfelements.com.au"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              www.dfelements.com.au
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>© 2026 DF Elements Nanotech. All rights reserved.</div>
          <div>Advanced materials for the future of display technology.</div>
        </div>
      </footer>
    </main>
  );
}
