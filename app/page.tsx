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
          kicker: "Advanced Deuterated Blue-Emitting Materials",
          title: "Powering a new blue-light engine through deuterium innovation",
          subtitle:
            "DF Elements Nanotech develops advanced deuterated blue-emitting materials designed to improve molecular stability, extend device lifetime, and unlock the next generation of OLED and optoelectronic performance.",
          primary: "Explore Technology",
          secondary: "Contact Us",
        },
        about: {
          kicker: "About",
          title: "Built on science. Positioned for industry.",
          body1:
            "DF Elements Nanotech is an advanced materials company focused on deuterated blue-emitting material innovation. We aim to bridge cutting-edge material science with commercial application in next-generation OLED and optoelectronic systems.",
          body2:
            "By combining molecular engineering, material design, and commercialization thinking, we are working to address one of the most demanding challenges in display technology: the stability and lifetime of blue-emitting materials.",
        },
        stats: {
          kicker: "At a Glance",
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
          kicker: "Technology",
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
          kicker: "Applications",
          title: "Designed for advanced display and optoelectronic applications",
          cards: [
            {
              title: "Premium Consumer Displays",
              desc: "Supporting high-performance display systems where efficiency, colour quality, and operating lifetime matter.",
            },
            {
              title: "Wearables & Compact Devices",
              desc: "Enabling more durable material solutions for compact, high-value display formats and emerging smart devices.",
            },
            {
              title: "Next-Generation Optoelectronics",
              desc: "Opening future possibilities across advanced light-emitting and material-intensive technologies.",
            },
          ],
        },
        partnership: {
          kicker: "Partnership",
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
          kicker: "Contact",
          title: "Let’s build the next generation of materials together",
          body:
            "DF Elements Nanotech welcomes enquiries from research collaborators, industrial partners, investors, and strategic stakeholders.",
          email: "info@dfelements.com.au",
          website: "www.dfelements.com.au",
          primary: "Email Us",
          secondary: "Visit Website",
        },
        footer: {
          line1: "DF Elements Nanotech",
          line2: "Advanced materials for the future of display technology.",
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
        },
        about: {
          kicker: "关于我们",
          title: "立足科学，面向产业",
          body1:
            "DF Elements Nanotech 是一家聚焦氘代蓝光发光材料创新的先进材料公司，致力于连接前沿材料科学与下一代 OLED 及光电系统的产业化应用。",
          body2:
            "我们结合分子工程、材料设计与商业化思维，努力解决显示技术中最具挑战性的核心问题之一：蓝光发光材料的稳定性与寿命。",
        },
        stats: {
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
              title: "高端消费显示",
              desc: "服务对效率、色彩表现与寿命要求更高的高性能显示系统。",
            },
            {
              title: "可穿戴与紧凑设备",
              desc: "为小型化、高附加值显示终端提供更耐久的材料解决方案。",
            },
            {
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
          line1: "DF Elements Nanotech",
          line2: "面向未来显示技术的先进材料平台。",
          copy: "© 2026 DF Elements Nanotech. 版权所有。",
        },
      },
    };

    return content[lang];
  }, [lang]);

  return (
    <main className="bg-[#06101c] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06101c]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DF Elements Nanotech Logo"
              className="h-10 w-auto sm:h-12"
            />
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-semibold tracking-[0.2em] text-white">
                DF ELEMENTS
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                Nanotech
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-7 text-sm text-white/78">
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

            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-sm">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 transition ${
                  lang === "en"
                    ? "bg-white text-slate-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={`rounded-full px-3 py-1.5 transition ${
                  lang === "zh"
                    ? "bg-white text-slate-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                中文
              </button>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-[#4da3ff]/40 bg-[#0e2340] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#4da3ff] hover:bg-[#14325d]"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "en"
                    ? "bg-white text-slate-900"
                    : "text-white/70"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "zh"
                    ? "bg-white text-slate-900"
                    : "text-white/70"
                }`}
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
      <source src="/hero-bg.webm" type="video/webm" />
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,20,0.72)_0%,rgba(6,16,28,0.78)_45%,rgba(8,20,38,0.88)_100%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,150,255,0.18),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(19,107,214,0.12),transparent_24%)]" />
  <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />

  <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
    <div>
      <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/72">
        {t.hero.kicker}
      </div>

      <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
        {t.hero.title}
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
        {t.hero.subtitle}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#technology"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1b33] transition hover:bg-slate-200"
        >
          {t.hero.primary}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/18 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          {t.hero.secondary}
        </a>
      </div>
    </div>

    <div className="hidden lg:block" />
  </div>
</section>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[400px] w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(92,170,255,0.45),transparent_18%),radial-gradient(circle_at_35%_65%,rgba(36,101,189,0.4),transparent_22%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="absolute inset-6 rounded-[26px] border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-72 w-72 rounded-full border border-[#74b7ff]/25">
                  <div className="absolute inset-8 rounded-full border border-[#74b7ff]/20" />
                  <div className="absolute inset-16 rounded-full border border-[#74b7ff]/20" />
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
                  <div className="absolute left-[18%] top-[36%] h-3 w-3 rounded-full bg-[#9cd0ff] shadow-[0_0_18px_rgba(156,208,255,0.9)]" />
                  <div className="absolute right-[20%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#72b7ff] shadow-[0_0_18px_rgba(114,183,255,0.9)]" />
                  <div className="absolute bottom-[19%] left-[32%] h-3 w-3 rounded-full bg-[#d8efff] shadow-[0_0_18px_rgba(216,239,255,0.9)]" />
                  <div className="absolute bottom-[28%] right-[26%] h-2.5 w-2.5 rounded-full bg-[#85c4ff] shadow-[0_0_18px_rgba(133,196,255,0.9)]" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#08111e]/85 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                    DF ELEMENTS
                  </div>
                  <div className="mt-2 text-lg font-medium text-white">
                    Blue OLED Materials
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#08111e]/85 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                    PLATFORM
                  </div>
                  <div className="mt-2 text-lg font-medium text-white">
                    Deuterium Innovation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#256bd2]">
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

      <section className="bg-[#f4f7fb] text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#256bd2]">
            {t.stats.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.stats.title}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.stats.items.map((item) => (
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

      <section id="technology" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    >
      <source src="/hero-bg.webm" type="video/webm" />
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,20,0.72)_0%,rgba(6,16,28,0.78)_45%,rgba(8,20,38,0.88)_100%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,150,255,0.18),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(19,107,214,0.12),transparent_24%)]" />
  <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />

  <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
    <div>
      <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/72">
        {t.hero.kicker}
      </div>

      <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
        {t.hero.title}
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
        {t.hero.subtitle}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#technology"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1b33] transition hover:bg-slate-200"
        >
          {t.hero.primary}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/18 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          {t.hero.secondary}
        </a>
      </div>
    </div>

    <div className="hidden lg:block" />
  </div>
</section>

      <section id="applications" className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#256bd2]">
            {t.applications.kicker}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.applications.title}
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.applications.cards.map((card, index) => (
              <div
                key={card.title}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-[#f7f9fc] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 bg-[linear-gradient(135deg,#0d203d_0%,#12386d_55%,#2f79d5_100%)] p-6 text-white">
                  <div className="flex h-full items-end">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/55">
                        0{index + 1}
                      </div>
                      <div className="mt-3 text-2xl font-semibold leading-snug">
                        {card.title}
                      </div>
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

      <section id="partnership" className="bg-[#08111d] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#74b7ff]">
              {t.partnership.kicker}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              {t.partnership.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {t.partnership.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.partnership.items.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="text-lg font-medium text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f5f8fc] text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#256bd2]">
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
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              {t.contact.secondary}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
              </div>
              <div className="mt-3 text-lg font-medium text-slate-900">
                {t.contact.email}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Website
              </div>
              <div className="mt-3 text-lg font-medium text-slate-900">
                {t.contact.website}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#06101c] text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 lg:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-medium text-white">{t.footer.line1}</div>
            <div className="mt-1 text-sm">{t.footer.line2}</div>
          </div>
          <div className="text-sm">{t.footer.copy}</div>
        </div>
      </footer>
    </main>
  );
}
