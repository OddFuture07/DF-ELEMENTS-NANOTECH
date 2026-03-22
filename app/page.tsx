"use client";

import { useMemo, useState } from "react";

type Lang = "en" | "zh";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");

  const t = useMemo(() => {
    const content = {
      en: {
        nav: {
          about: "About",
          technology: "Technology",
          applications: "Applications",
          partnership: "Partnership",
          contact: "Contact",
          cta: "Get in Touch",
        },
        hero: {
          kicker: "ADVANCED DEUTERATED BLUE-EMITTING MATERIALS",
          title: "Powering a new blue-light engine through deuterium innovation",
          subtitle:
            "DF Elements Nanotech develops advanced deuterated blue-emitting materials designed to improve molecular stability, extend device lifetime, and unlock the next generation of OLED and optoelectronic performance.",
          primary: "Explore Technology",
          secondary: "Contact Us",
          card1Label: "DF ELEMENTS",
          card1Title: "Blue OLED Materials",
          card2Label: "PLATFORM",
          card2Title: "Deuterium Innovation",
        },
        about: {
          kicker: "ABOUT",
          title: "Built on science. Positioned for industry.",
          body1:
            "DF Elements Nanotech is an advanced materials company focused on deuterated blue-emitting material innovation. We aim to bridge cutting-edge material science with commercial application in next-generation OLED and optoelectronic systems.",
          body2:
            "By combining molecular engineering, material design, and commercialization thinking, we are working to address one of the most demanding challenges in display technology: the stability and lifetime of blue-emitting materials.",
        },
        overview: {
          kicker: "AT A GLANCE",
          title: "A focused platform for the future of blue OLED",
          items: [
            {
              title: "Blue OLED Focus",
              desc: "Targeting one of the most technically demanding challenges in advanced display materials.",
            },
            {
              title: "Deuteration Strategy",
              desc: "Designed to support stronger molecular stability under operational stress.",
            },
            {
              title: "Commercial Pathway",
              desc: "Built with future industrial adoption, scale-up, and strategic partnership in mind.",
            },
            {
              title: "Platform Potential",
              desc: "Positioned for broader value across advanced display and optoelectronic systems.",
            },
          ],
        },
        tech: {
          kicker: "TECHNOLOGY",
          title: "Why deuterated materials matter",
          intro:
            "In advanced emissive systems, blue materials remain one of the key performance bottlenecks. DF Elements focuses on deuteration-led material innovation to improve molecular robustness, enhance operational durability, and support the next wave of high-performance display applications.",
          cards: [
            {
              title: "Molecular Stability",
              desc: "A deuteration-led strategy can support more resilient molecular behavior in demanding blue-emission environments.",
            },
            {
              title: "Blue Emitter Performance",
              desc: "Focused on the stability and operational lifetime challenges that continue to limit blue-emitter progress.",
            },
            {
              title: "Material Engineering",
              desc: "Combining scientific design logic with practical performance goals for next-generation material systems.",
            },
            {
              title: "Scalable Vision",
              desc: "Developed with future manufacturing, industrial collaboration, and commercialization in mind.",
            },
          ],
        },
        applications: {
          kicker: "APPLICATIONS",
          title: "Designed for advanced display and optoelectronic applications",
          cards: [
            {
              number: "01",
              title: "Premium Consumer Displays",
              desc: "Supporting high-performance display systems where efficiency, colour quality, and operating lifetime matter.",
            },
            {
              number: "02",
              title: "Wearables and Compact Devices",
              desc: "Enabling more durable material solutions for compact, high-value display formats and emerging smart devices.",
            },
            {
              number: "03",
              title: "Next-Generation Optoelectronics",
              desc: "Opening future possibilities across advanced light-emitting and material-intensive technologies.",
            },
          ],
        },
        partnership: {
          kicker: "PARTNERSHIP",
          title: "Open to research, industry, and strategic collaboration",
          body:
            "We welcome conversations with research institutions, manufacturing partners, investors, and commercial stakeholders interested in the future of advanced OLED material platforms.",
          items: [
            "Research Collaboration",
            "Industrial Partnership",
            "Strategic Investment",
            "Commercial Development",
          ],
        },
        contact: {
          kicker: "CONTACT",
          title: "Let’s build the next generation of materials together",
          body:
            "DF Elements Nanotech welcomes enquiries from research collaborators, industrial partners, investors, and strategic stakeholders.",
          email: "info@dfelements.com.au",
          website: "www.dfelements.com.au",
          primary: "Email Us",
          secondary: "Visit Website",
        },
        footer: {
          name: "DF Elements Nanotech",
          line: "Advanced materials for the future of display technology.",
          copy: "© 2026 DF Elements Nanotech. All rights reserved.",
        },
      },
      zh: {
        nav: {
          about: "关于我们",
          technology: "技术",
          applications: "应用",
          partnership: "合作",
          contact: "联系",
          cta: "立即联系",
        },
        hero: {
          kicker: "先进氘代蓝光发光材料",
          title: "以氘为媒，点亮蓝光新引擎",
          subtitle:
            "DF Elements Nanotech 专注于先进氘代蓝光材料研发，致力于提升蓝光发光体系的分子稳定性、器件寿命与产业化潜力，服务下一代 OLED 与高性能光电材料应用。",
          primary: "查看技术",
          secondary: "联系我们",
          card1Label: "DF ELEMENTS",
          card1Title: "蓝光 OLED 材料",
          card2Label: "PLATFORM",
          card2Title: "氘代创新平台",
        },
        about: {
          kicker: "关于我们",
          title: "立足科学，面向产业",
          body1:
            "DF Elements Nanotech 是一家聚焦氘代蓝光发光材料创新的先进材料公司，致力于连接前沿材料科学与下一代 OLED 及光电系统的产业化应用。",
          body2:
            "我们结合分子工程、材料设计与商业化思维，努力解决显示技术中最具挑战性的核心问题之一：蓝光发光材料的稳定性与寿命。",
        },
        overview: {
          kicker: "核心概览",
          title: "面向蓝光 OLED 未来的聚焦型材料平台",
          items: [
            {
              title: "聚焦蓝光 OLED",
              desc: "针对先进显示材料中最具技术挑战性的核心方向之一。",
            },
            {
              title: "氘代策略",
              desc: "通过氘代设计提升材料在工作应力下的分子稳定性潜力。",
            },
            {
              title: "产业化路径",
              desc: "从一开始就兼顾未来产业导入、规模放大与战略合作。",
            },
            {
              title: "平台延展性",
              desc: "具备向先进显示与光电材料体系进一步拓展的潜力。",
            },
          ],
        },
        tech: {
          kicker: "技术",
          title: "为什么是氘代材料",
          intro:
            "在先进发光体系中，蓝光材料始终是影响性能与寿命的关键瓶颈。DF Elements 以氘代驱动的材料创新为核心，提升分子稳健性、增强工作耐久性，并支持下一代高性能显示应用的发展。",
          cards: [
            {
              title: "分子稳定性",
              desc: "氘代策略有助于在高要求蓝光发射环境中实现更稳健的分子行为。",
            },
            {
              title: "蓝光性能挑战",
              desc: "聚焦限制蓝光发光材料进步的稳定性与工作寿命问题。",
            },
            {
              title: "材料工程设计",
              desc: "以科学设计逻辑结合实际性能目标，构建下一代材料体系。",
            },
            {
              title: "可放大愿景",
              desc: "面向未来制造、产业合作与商业化落地进行设计与布局。",
            },
          ],
        },
        applications: {
          kicker: "应用",
          title: "面向先进显示与光电应用",
          cards: [
            {
              number: "01",
              title: "高端消费显示",
              desc: "服务对效率、色彩表现与寿命要求更高的高性能显示系统。",
            },
            {
              number: "02",
              title: "可穿戴与紧凑设备",
              desc: "为小型化、高附加值显示终端提供更耐久的材料解决方案。",
            },
            {
              number: "03",
              title: "新一代光电技术",
              desc: "拓展至先进发光及高性能材料密集型技术场景的未来机会。",
            },
          ],
        },
        partnership: {
          kicker: "合作",
          title: "开放科研、产业与战略合作",
          body:
            "我们欢迎与科研机构、制造伙伴、投资方及商业合作方展开交流，共同推动先进 OLED 材料平台的发展。",
          items: ["科研合作", "产业合作", "战略投资", "商业开发"],
        },
        contact: {
          kicker: "联系",
          title: "携手共建下一代材料未来",
          body:
            "DF Elements Nanotech 欢迎来自科研合作伙伴、产业伙伴、投资人及战略相关方的咨询与交流。",
          email: "info@dfelements.com.au",
          website: "www.dfelements.com.au",
          primary: "发送邮件",
          secondary: "访问网站",
        },
        footer: {
          name: "DF Elements Nanotech",
          line: "面向未来显示技术的先进材料平台。",
          copy: "© 2026 DF Elements Nanotech. 版权所有。",
        },
      },
    };

    return content[lang];
  }, [lang]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DF Elements Nanotech Logo"
              className="h-10 w-auto sm:h-12"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.22em] text-white">
                DF ELEMENTS
              </div>
              <div className="text-xs tracking-[0.28em] text-white/60">
                NANOTECH
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-7 text-sm text-white/80">
              <a href="#about" className="transition hover:text-white">
                {t.nav.about}
              </a>
              <a href="#technology" className="transition hover:text-white">
                {t.nav.technology}
              </a>
              <a href="#applications" className="transition hover:text-white">
                {t.nav.applications}
              </a>
              <a href="#partnership" className="transition hover:text-white">
                {t.nav.partnership}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={
                  lang === "en"
                    ? "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-900"
                    : "rounded-full px-3 py-1.5 text-sm font-medium text-white/70 transition hover:text-white"
                }
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={
                  lang === "zh"
                    ? "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-900"
                    : "rounded-full px-3 py-1.5 text-sm font-medium text-white/70 transition hover:text-white"
                }
              >
                中文
              </button>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-blue-400/30 bg-blue-950/40 px-5 py-2.5 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-900/50"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="md:hidden">
            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={
                  lang === "en"
                    ? "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-900"
                    : "rounded-full px-3 py-1.5 text-sm font-medium text-white/70"
                }
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={
                  lang === "zh"
                    ? "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-900"
                    : "rounded-full px-3 py-1.5 text-sm font-medium text-white/70"
                }
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/hero.bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-blue-950/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-transparent to-slate-950/80" />

        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.25em] text-white/80">
              {t.hero.kicker}
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#technology"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {t.hero.primary}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-slate-900/35 p-6 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[26px] border border-white/10 p-6">
                <div className="flex h-72 items-center justify-center rounded-[24px] border border-blue-300/10 bg-gradient-to-br from-slate-900/60 to-blue-950/30">
                  <div className="relative h-56 w-56 rounded-full border border-blue-200/20">
                    <div className="absolute inset-6 rounded-full border border-blue-200/15" />
                    <div className="absolute inset-12 rounded-full border border-blue-200/15" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-white shadow-lg shadow-white/50" />
                    </div>
                    <div className="absolute left-6 top-24 h-3 w-3 rounded-full bg-blue-200 shadow-md shadow-blue-200/60" />
                    <div className="absolute right-10 top-14 h-2.5 w-2.5 rounded-full bg-blue-300 shadow-md shadow-blue-300/60" />
                    <div className="absolute bottom-10 right-8 h-3 w-3 rounded-full bg-sky-200 shadow-md shadow-sky-200/60" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                    <div className="text-xs tracking-[0.24em] text-white/45">
                      {t.hero.card1Label}
                    </div>
                    <div className="mt-3 text-xl font-medium text-white">
                      {t.hero.card1Title}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                    <div className="text-xs tracking-[0.24em] text-white/45">
                      {t.hero.card2Label}
                    </div>
                    <div className="mt-3 text-xl font-medium text-white">
                      {t.hero.card2Title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-blue-700">
              {t.about.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {t.about.title}
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-blue-700">
            {t.overview.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.overview.title}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.overview.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-blue-300">
            {t.tech.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.tech.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            {t.tech.intro}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.tech.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-blue-700">
            {t.applications.kicker}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.applications.title}
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.applications.cards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-56 items-end bg-gradient-to-br from-slate-900 via-blue-950 to-blue-700 p-6 text-white">
                  <div>
                    <div className="text-xs tracking-[0.24em] text-white/55">
                      {card.number}
                    </div>
                    <div className="mt-3 text-2xl font-semibold leading-snug">
                      {card.title}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-7 text-slate-600">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-blue-300">
              {t.partnership.kicker}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              {t.partnership.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {t.partnership.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.partnership.items.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-lg font-medium text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-blue-700">
            {t.contact.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {t.contact.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${t.contact.email}`}
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              {t.contact.primary}
            </a>
            <a
              href="https://www.dfelements.com.au"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              {t.contact.secondary}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-xs tracking-[0.24em] text-slate-400">
                EMAIL
              </div>
              <div className="mt-3 text-lg font-medium text-slate-900">
                {t.contact.email}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-xs tracking-[0.24em] text-slate-400">
                WEBSITE
              </div>
              <div className="mt-3 text-lg font-medium text-slate-900">
                {t.contact.website}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 lg:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-medium text-white">{t.footer.name}</div>
            <div className="mt-1 text-sm">{t.footer.line}</div>
          </div>
          <div className="text-sm">{t.footer.copy}</div>
        </div>
      </footer>
    </main>
  );
}
