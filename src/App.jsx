import { useState } from 'react'
import logo from './assets/Logo.jpeg'

const navItems = ['Home', 'Services', 'About', 'Contact']

const expertise = [
  {
    title: 'Personal & Corporate Tax Solutions',
    text:
      'SmartLedger provides specialized expertise in T1 personal tax returns and T2 corporate tax filings across all provinces of Canada (except Quebec), combining accuracy, compliance, and peace of mind.',
  },
  {
    title: 'Meticulous Bookkeeping Services',
    text:
      'From daily transaction recording and reconciliations to AP/AR management, we keep your books organized and current so your business remains financially clear and growth-ready.',
  },
  {
    title: 'Dependable Payroll Preparation',
    text:
      'We prepare payroll accurately and efficiently, including employee pay calculations, CRA remittances, and all required T4, T4A, and T5 filings.',
  },
]

const services = [
  {
    number: '01',
    title: 'Personal Tax Services (T1)',
    summary:
      'Comprehensive Canadian tax preparation and e-filing support for the last ten years for professionals, contractors, seniors, families, and specialized filers.',
  },
  {
    number: '02',
    title: 'Corporate Tax Services (T2)',
    summary:
      'Strategic tax planning, compliance filings, GST/HST tracking, and CRA representation focused on minimizing obligations while maintaining corporate growth and resilience.',
  },
  {
    number: '03',
    title: 'Specialized Accounting & Advisory',
    summary:
      'Accounting system optimization, software expertise in QuickBooks, Xero, and Sage 50, agribusiness support, and cash flow management for sustainable operations.',
  },
]

const contactDetails = [
  { label: 'Office Address', value: '23 Kressman Crt, Whitby, Ontario L1P 0A1, Canada' },
  { label: 'Direct Phone', value: 'Labib R — (431) 374-6695 (WhatsApp only)' },
  { label: 'Secondary Phone', value: 'Farzana H — (905) 243-5065' },
  { label: 'Email Address', value: 'SLC.Inc@outlook.com' },
  { label: 'Domain', value: 'smartledgerconsulting.ca' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#171717]">
      <header className="mx-auto max-w-7xl px-5 pb-2 pt-6 md:px-8">
        <nav className="rounded-[1.5rem] border border-[#d3bb7d]/80 bg-white/75 px-3 py-3 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur-sm md:rounded-full md:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex items-center justify-between gap-3">
              <a href="#home" className="flex items-center gap-3" aria-label="SmartLedger home">
                <img src={logo} alt="SmartLedger Consulting Inc logo" className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16" />
                <div>
                  <div className="text-base font-semibold tracking-[0.16em] text-[#121212] sm:text-lg md:text-2xl">SMARTLEDGER</div>
                  <div className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#7d6d4a] sm:text-[9px] md:text-[11px]">Consulting Inc.</div>
                </div>
              </a>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d3bb7d] bg-[#f7f2e8] text-[#111111] md:hidden"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="flex flex-col gap-1.5">
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </span>
              </button>
            </div>

            <div className="hidden items-center gap-8 text-sm font-medium text-[#1d1d1d] md:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#b38b38]">
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden w-full rounded-full border border-[#bf9f5b] bg-[#111111] px-4 py-2 text-center text-sm font-semibold text-[#f6f1e7] transition hover:bg-[#201d1b] sm:w-auto md:inline-flex md:items-center md:justify-center md:px-5"
            >
              Book a Consultation
            </a>
          </div>

          {menuOpen && (
            <div className="mt-3 space-y-2 border-t border-[#eadab0] pt-3 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[#171717] transition hover:bg-[#f6efe5]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-full bg-[#111111] px-4 py-2.5 text-center text-sm font-semibold text-[#f6f1e7]"
                onClick={() => setMenuOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          )}
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7c08c] bg-[#f8f4ed] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6532] sm:text-xs">
                <span className="inline-block h-2 w-2 rounded-full bg-[#c8a75d]" />
                Precision financial guidance
              </div>

              <h1 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#121212] sm:text-4xl md:text-5xl lg:text-6xl">
                Precision Financial Strategies <span className="gold-text">Engineered</span> for Sustainable Growth
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#3a3a3a] sm:text-lg sm:leading-8">
                SmartLedger Consulting Inc. delivers comprehensive accounting, payroll, and corporate tax solutions across Canada. We manage your regulatory and compliance complexities so you can focus on growing your business with confidence.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/14313746695"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#0b0b0b] px-5 py-3 text-center text-sm font-semibold text-[#fdf9f4] shadow-lg shadow-[#000000]/10 transition hover:-translate-y-0.5 hover:bg-[#202020] sm:px-6"
                >
                  WhatsApp Now
                </a>

                <a
                  href="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#c9ad68] bg-[#f2ead7] px-5 py-3 text-center text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 sm:px-6"
                >
                  CRA Portal
                </a>
              </div>

              <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="soft-card brand-shadow rounded-2xl border border-[#e5dcc4] p-4">
                  <div className="text-2xl font-bold text-[#121212]">10+</div>
                  <div className="text-sm text-[#4d4d4d]">Years experience</div>
                </div>
                <div className="soft-card brand-shadow rounded-2xl border border-[#e5dcc4] p-4">
                  <div className="text-2xl font-bold text-[#121212]">100%</div>
                  <div className="text-sm text-[#4d4d4d]">Compliance focus</div>
                </div>
                <div className="soft-card brand-shadow rounded-2xl border border-[#e5dcc4] p-4">
                  <div className="text-2xl font-bold text-[#121212]">1:1</div>
                  <div className="text-sm text-[#4d4d4d]">Client attention</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="hero-visual black-panel brand-shadow relative overflow-hidden rounded-[2rem] border border-[#d4b679]/70 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,176,91,0.28),transparent_30%)]" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d7c08c] sm:text-xs">SmartLedger</div>
                      <div className="mt-2 text-xl font-semibold text-white sm:text-2xl">Financial Support</div>
                    </div>
                    <span className="rounded-full border border-[#d9bd7a] bg-[#1d1d1d] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[#dfc589] sm:text-xs">
                      Canada
                    </span>
                  </div>

                  <div className="space-y-4">
                    {['Bookkeeping', 'Payroll', 'Corporate Tax', 'Business Setup'].map((item, index) => (
                      <div
                        key={item}
                        className={`hero-card flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 ${index === 0 ? 'delay-0' : index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : 'delay-3'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b46a] text-sm font-bold text-[#111111]">
                            {index + 1}
                          </div>
                          <div className="text-base font-medium text-white">{item}</div>
                        </div>
                        <div className="text-lg text-[#d4b679]">→</div>
                      </div>
                    ))}
                  </div>

                  <div className="hero-badge mt-8 rounded-2xl border border-[#d7c08c]/40 bg-[#f7f3ec] p-5 text-[#1a1a1a]">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7d6231] sm:text-xs">Core promise</div>
                    <div className="mt-2 text-base font-semibold sm:text-lg">Regulatory clarity. Financial confidence. Business momentum.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a7240] sm:text-sm">Our Core Expertise</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#121212] sm:text-3xl md:text-5xl">Customized support for every stage of your financial journey</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {expertise.map((item) => (
              <article key={item.title} className="soft-card brand-shadow rounded-[1.5rem] border border-[#e8dcc0] p-6 md:p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-lg font-semibold text-[#eacb86]">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-[#121212]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#494949]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10">
          <div className="rounded-[2rem] border border-[#e2d5b4] bg-[#fbf8f3] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.75rem] bg-[#111111] p-6 text-[#f3efe9] shadow-[0_20px_38px_rgba(17,17,17,0.12)] md:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d5b974]">Business setup</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">Launch your business with confidence</h3>
                <p className="mt-4 text-base leading-7 text-[#d2d2d2]">
                  SmartLedger assists with complete federal and provincial registration, incorporation, licensing, and setup of the necessary CRA accounts, including GST/HST, payroll, and corporate tax.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service) => (
                  <article key={service.title} className="rounded-[1.5rem] border border-[#e5d5ae] bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8d7340]">{service.number}</div>
                    <h3 className="mt-3 text-xl font-semibold text-[#151515]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4a4a4a]">{service.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-20">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a7240] sm:text-sm">Contact Us</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#121212] sm:text-3xl md:text-5xl">Connect with SmartLedger Consulting Inc.</h2>
            <p className="mt-4 text-base leading-7 text-[#3a3a3a] sm:text-lg sm:leading-8">
              Have a question about your taxes or need a dedicated partner to take over your bookkeeping? Get in touch with our team today for professional, high-value financial support.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] bg-[#111111] p-6 text-white md:p-8">
              <div className="mb-5 flex items-center gap-4">
                <img src={logo} alt="SmartLedger logo" className="h-16 w-16 object-contain rounded-full bg-white/10 p-2" />
                <div>
                  <div className="text-xl font-semibold">SmartLedger</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#d4b679]">Consulting Inc.</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#e3e0db]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6b772]">•</span>
                  <span>Professional accounting, payroll, and tax strategy for individuals and businesses across Canada.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6b772]">•</span>
                  <span>Flexible, responsive support that keeps your numbers accurate and your operations moving.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/14313746695"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#f4d999] px-5 py-3 text-center text-sm font-semibold text-[#111111] transition hover:bg-[#e8c77c]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d9bd7a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  CRA Canada
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="soft-card brand-shadow rounded-[1.5rem] border border-[#e5d3ad] p-5 md:p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">{detail.label}</div>
                  <div className="mt-2 text-base leading-7 text-[#1d1d1d]">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfd5bc] bg-[#f8f4ed]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-[#4f4f4f] md:flex-row md:px-8">
          <p>© 2025 SmartLedger Consulting Inc. All rights reserved.</p>
          <p>Precision accounting, payroll & tax solutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
