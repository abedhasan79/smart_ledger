import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from './assets/Logo.jpeg'

const navItems = ['Home', 'Services', 'About', 'Contact']

const expertise = [
  {
    title: 'Personal & Corporate Tax Solutions',
    text:
      'SmartLedger offers specialized expertise in personal T1 filings and corporate T2 returns across Ontario and throughout Canada, combining accuracy, compliance, and peace of mind.',
  },
  {
    title: 'Meticulous Bookkeeping Services',
    text:
      'From daily transaction recording and reconciliations to AP/AR management, we keep your books organized and current so your business remains financially clear and growth-ready.',
  },
  {
    title: 'Dependable Payroll Preparation',
    text:
      'We prepare payroll accurately and efficiently, including employee pay calculations, source deductions, CRA remittances, and all required T4, T4A, and T5 filings.',
  },
]

const services = [
  {
    number: '01',
    title: 'Personal Tax (T1)',
    summary:
      'Comprehensive Canadian tax preparation and e-filing support for the last ten years, including self-employed professionals, families, seniors, contractors, and specialized filers.',
  },
  {
    number: '02',
    title: 'Corporate Tax (T2)',
    summary:
      'Strategic tax planning, compliance filings, GST/HST tracking, and CRA representation designed to minimize obligations while supporting sustainable business growth.',
  },
  {
    number: '03',
    title: 'GST/HST, Bookkeeping & Payroll',
    summary:
      'Registration, filing, reconciliation, payroll processing, and accurate monthly or quarterly reporting that keeps your operations compliant and efficient.',
  },
  {
    number: '04',
    title: 'Business Registration & Year-End Reporting',
    summary:
      'From incorporation and licensing to year-end filing and compliance support, we help new and established businesses stay organized and prepared.',
  },
]

const contactDetails = [
  { label: 'Office Address', value: '28 Conarty Crois., Whitby, ON L1P OL4' },
  { label: 'Direct Phone', value: 'Labib R — (431) 374-6695 (WhatsApp only)' },
  { label: 'Secondary Phone', value: 'Farzana H — (905) 243-5065' },
  { label: 'Email Address', value: 'SLC.Inc@outlook.com' },
  { label: 'Domain', value: 'smartledgerconsulting.ca' },
]

const serviceAreas = [
  'Whitby',
  'Oshawa',
  'Ajax',
  'Pickering',
  'Durham Region',
  'Toronto',
  'Scarborough',
  'Markham',
  'Richmond Hill',
  'Mississauga',
  'Brampton',
  'Hamilton',
  'Ottawa',
  'London',
  'Kitchener',
  'Waterloo',
  'Cambridge',
  'Barrie',
  'Kingston',
  'Windsor',
  'Ontario',
  'New Brunswick',
  'Prince Edward Island',
  'Newfoundland and Labrador',
  'Nova Scotia',
]

const provinceHighlights = [
  'Whitby, Durham Region, Oshawa, Ajax, Pickering, Ontario',
  'New Brunswick',
  'Prince Edward Island',
  'Newfoundland and Labrador',
  'Nova Scotia',
]

const consultationServices = [
  'Personal Tax (T1)',
  'Corporate Tax (T2)',
  'GST/HST',
  'Bookkeeping',
  'Payroll',
  'Business Registration',
  'Year-End Reporting',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: consultationServices[0],
  message: '',
}

const servicePages = {
  tax: {
    title: 'Tax Preparation Services in Whitby, Ontario | SmartLedger',
    description:
      'SmartLedger offers personal tax preparation, T1 filing, and corporate tax support in Whitby, Durham Region, and across Ontario for individuals and businesses.',
    heading: 'Personal & Corporate Tax Preparation in Whitby, Ontario',
    intro:
      'SmartLedger Consulting Inc. helps individuals, self-employed professionals, and businesses with accurate tax preparation, CRA compliance, and strategic planning across Whitby, Durham Region, and Ontario.',
    keywords: ['tax preparation Whitby', 'personal tax T1', 'corporate tax T2', 'tax filing Ontario'],
    services: [
      'Personal tax returns (T1) for professionals, families, seniors, contractors, and specialized filers',
      'Corporate tax returns (T2) for incorporated businesses and owner-operators',
      'GST/HST filing support and tax planning for year-round compliance',
      'Review of prior-year filings and CRA correspondence support',
    ],
    cta: 'Book a Tax Consultation',
  },
  payroll: {
    title: 'Payroll Services in Ontario | SmartLedger Consulting Inc.',
    description:
      'SmartLedger provides payroll processing, source deductions, CRA remittances, and compliance support for businesses across Whitby, Durham Region, and Ontario.',
    heading: 'Payroll Services for Small Businesses Across Ontario',
    intro:
      'We support businesses with payroll processing, employee pay calculations, source deductions, and year-end reporting so payroll stays accurate and compliant.',
    keywords: ['payroll services Ontario', 'CRA payroll remittances', 'payroll Whitby', 'T4 T4A T5 filing'],
    services: [
      'Weekly, bi-weekly, semi-monthly, and monthly payroll schedules',
      'Employee pay calculations and source deduction processing',
      'CRA remittance support and year-end T4, T4A, and T5 filings',
      'Payroll reporting assistance for growing businesses and owner-operators',
    ],
    cta: 'Book Payroll Support',
  },
  bookkeeping: {
    title: 'Bookkeeping Services in Whitby, ON | SmartLedger',
    description:
      'SmartLedger provides bookkeeping, reconciliation, AP/AR support, and financial record management for businesses in Whitby, Durham Region, and across Ontario.',
    heading: 'Bookkeeping Services Built for Business Clarity',
    intro:
      'Our bookkeeping services are designed to keep your records accurate, organized, and ready for tax filing, payroll, and strategic financial decision-making.',
    keywords: ['bookkeeping Whitby Ontario', 'small business bookkeeping Durham Region', 'AP AR support', 'financial record management'],
    services: [
      'Daily transaction recording and bank reconciliations',
      'Accounts payable and accounts receivable support',
      'Monthly and quarterly financial record maintenance',
      'Reporting support to help businesses stay organized and ready for tax season',
    ],
    cta: 'Book a Bookkeeping Consultation',
  },
}

function useServiceSEO(page) {
  useEffect(() => {
    document.title = page.title

    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('description', page.description)
    setMeta('keywords', page.keywords.join(', '))
    setMeta('robots', 'index, follow')
    setMeta('og:title', page.title, 'property')
    setMeta('og:description', page.description, 'property')
    setMeta('og:type', 'website', 'property')
  }, [page])
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/tax" element={<ServicePage slug="tax" />} />
        <Route path="/services/payroll" element={<ServicePage slug="payroll" />} />
        <Route path="/services/bookkeeping" element={<ServicePage slug="bookkeeping" />} />
        <Route path="/tax" element={<ServicePage slug="tax" />} />
        <Route path="/payroll" element={<ServicePage slug="payroll" />} />
        <Route path="/bookkeeping" element={<ServicePage slug="bookkeeping" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Consultation Request - ${formData.service}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:SLC.Inc@outlook.com?subject=${subject}&body=${body}`
  }

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
              <Link to="/privacy-policy" className="transition hover:text-[#b38b38]">
                Privacy Policy
              </Link>
            </div>

            <Link
              to="/contact"
              className="hidden w-full rounded-full border border-[#bf9f5b] bg-[#111111] px-4 py-2 text-center text-sm font-semibold text-[#f6f1e7] transition hover:bg-[#201d1b] sm:w-auto md:inline-flex md:items-center md:justify-center md:px-5"
            >
              Book a Consultation
            </Link>
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
              <Link
                to="/privacy-policy"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-[#171717] transition hover:bg-[#f6efe5]"
                onClick={() => setMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="mt-2 block rounded-full bg-[#111111] px-4 py-2.5 text-center text-sm font-semibold text-[#f6f1e7]"
                onClick={() => setMenuOpen(false)}
              >
                Book a Consultation
              </Link>
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
                Accounting & tax support across Ontario
              </div>

              <h1 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#121212] sm:text-4xl md:text-5xl lg:text-6xl">
                Accounting &amp; Tax Preparation Services in <span className="gold-text">Whitby, Ontario</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#3a3a3a] sm:text-lg sm:leading-8">
                SmartLedger Consulting Inc. provides professional accounting, tax preparation, bookkeeping, payroll, GST/HST filing, and advisory services in Whitby, Ontario and across Durham Region. We help individuals, self-employed clients, corporations, and small businesses stay organized, compliant, and confident with their finances.
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
                      Ontario
                    </span>
                  </div>

                  <div className="space-y-4">
                    {['Personal Tax','Corporate Tax', 'Bookkeeping', 'Payroll',  'Business Setup'].map((item, index) => (
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

        <section id="payroll" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
          <div className="rounded-[2rem] border border-[#e2d5b4] bg-[#111111] p-6 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7c08c] sm:text-sm">Payroll Services</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                  Accurate payroll support that keeps your business running smoothly
                </h2>
                <p className="mt-4 text-base leading-7 text-[#d7d7d7] sm:text-lg">
                  We prepare employee payroll accurately and efficiently, including pay calculations, source deductions, CRA remittances, and T4, T4A, and T5 filings, with flexible weekly, bi-weekly, semi-monthly, or monthly schedules.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.payhubcanada.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#f4d999] px-5 py-3 text-center text-sm font-semibold text-[#111111] transition hover:bg-[#e8c77c]"
                  >
                    Visit PayHub Canada
                  </a>
                  <Link
                    to="/contact"
                    className="rounded-full border border-[#d9bd7a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Book Payroll Support
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Weekly, bi-weekly, semi-monthly, and monthly payroll schedules',
                  'Employee pay calculations and source deductions',
                  'CRA remittances and year-end reporting',
                  'Payroll support for growing businesses and contractors',
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[#f0f0f0]">
                    <span className="mr-2 text-[#d7c08c]">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
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

        <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8 md:pb-16">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a7240] sm:text-sm">Service Pages</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#121212] sm:text-3xl md:text-4xl">
              Specialized support for tax, payroll, and bookkeeping
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Tax Preparation',
                text: 'T1 and T2 filing support for individuals, corporations, and self-employed clients across Ontario.',
                link: '/tax',
              },
              {
                title: 'Payroll Services',
                text: 'Accurate payroll processing, CRA remittances, and year-end filings for businesses of all sizes.',
                link: '/payroll',
              },
              {
                title: 'Bookkeeping',
                text: 'Reliable bookkeeping for reconciliations, AP/AR, expense tracking, and monthly financial reporting.',
                link: '/bookkeeping',
              },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="soft-card brand-shadow block rounded-[1.5rem] border border-[#e8dcc0] p-6 transition hover:-translate-y-1 md:p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-lg font-semibold text-[#eacb86]">
                  →
                </div>
                <h3 className="text-xl font-semibold text-[#121212]">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#494949]">{card.text}</p>
                <div className="mt-6 text-sm font-semibold text-[#8a7240]">Learn more</div>
              </Link>
            ))}
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

              <form onSubmit={handleSubmit} className="soft-card brand-shadow rounded-[1.5rem] border border-[#e5d3ad] bg-white p-5 md:p-6">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Book a Consultation</div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[#171717]">
                    Name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#171717]">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#171717]">
                    Phone
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#171717]">
                    Service needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                    >
                      {consultationServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-4 block text-sm font-medium text-[#171717]">
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your tax, bookkeeping, or payroll needs."
                    className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-[#f8f1e3] transition hover:bg-[#201d1b]"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfd5bc] bg-[#f8f4ed]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="mb-6 grid gap-5 md:grid-cols-[1.2fr_1.2fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Service Areas</p>
              <p className="mt-3 text-sm leading-7 text-[#3a3a3a]">
                SmartLedger Consulting Inc. proudly serves individuals, self-employed professionals, corporations, and small businesses across Whitby, Durham Region, and Ontario.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Ontario Service Areas</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-[#2f2f2f]">
                {serviceAreas.slice(0, 10).map((area) => (
                  <span key={area} className="rounded-full border border-[#e1d1a1] bg-white/80 px-2.5 py-1">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Regional Coverage</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-[#2f2f2f]">
                {provinceHighlights.map((area) => (
                  <span key={area} className="rounded-full border border-[#e1d1a1] bg-white/80 px-2.5 py-1">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-[#dfd5bc] pt-5 text-sm text-[#4f4f4f] md:flex-row">
            <p>© 2025 SmartLedger Consulting Inc. All rights reserved.</p>
            <p>Precision accounting, payroll &amp; tax solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServicePage({ slug }) {
  const page = servicePages[slug]

  if (!page) {
    return <HomePage />
  }

  useServiceSEO(page)

  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#171717]">
      <header className="mx-auto max-w-6xl px-5 pb-4 pt-6 md:px-8">
        <nav className="flex items-center justify-between rounded-[1.5rem] border border-[#d3bb7d]/80 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
          <Link to="/" className="flex items-center gap-3" aria-label="Back to SmartLedger home">
            <img src={logo} alt="SmartLedger logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.16em]">SMARTLEDGER</div>
              <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#7d6d4a]">Consulting Inc.</div>
            </div>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#1d1d1d] md:flex">
            <Link to="/" className="transition hover:text-[#b38b38]">Home</Link>
            <Link to="/tax" className="transition hover:text-[#b38b38]">Tax</Link>
            <Link to="/payroll" className="transition hover:text-[#b38b38]">Payroll</Link>
            <Link to="/bookkeeping" className="transition hover:text-[#b38b38]">Bookkeeping</Link>
          </div>
          <Link
            to="/contact"
            className="rounded-full border border-[#bf9f5b] bg-[#111111] px-4 py-2 text-sm font-semibold text-[#f6f1e7] transition hover:bg-[#201d1b]"
          >
            Contact Us
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2rem] border border-[#e2d5b4] bg-[#fbf8f3] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">SmartLedger Services</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#121212] md:text-5xl">{page.heading}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#3d3d3d] md:text-lg">{page.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/14313746695"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-[#f8f1e3] transition hover:bg-[#201d1b]"
            >
              WhatsApp Now
            </a>
            <a
              href="https://www.payhubcanada.ca"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#c9ad68] bg-[#f2ead7] px-5 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5"
            >
              PayHub Canada
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {page.services.map((item) => (
            <div key={item} className="soft-card brand-shadow rounded-[1.5rem] border border-[#e8dcc0] p-6 md:p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-lg font-semibold text-[#eacb86]">
                ✓
              </div>
              <p className="text-base leading-8 text-[#3d3d3d]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#e2d5b4] bg-[#111111] p-6 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d7c08c]">Why choose SmartLedger</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
            Accurate service, responsive support, and compliance you can trust
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#d7d7d7]">
            We help clients stay organized, compliant, and confident with their finances through tailored support in tax preparation, payroll, bookkeeping, and business registration across Whitby, Durham Region, and Ontario.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="rounded-full bg-[#f4d999] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e8c77c]"
            >
              {page.cta}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Consultation Request - ${formData.service}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:SLC.Inc@outlook.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#171717]">
      <header className="mx-auto max-w-6xl px-5 pb-4 pt-6 md:px-8">
        <nav className="flex items-center justify-between rounded-[1.5rem] border border-[#d3bb7d]/80 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
          <Link to="/" className="flex items-center gap-3" aria-label="Back to SmartLedger home">
            <img src={logo} alt="SmartLedger logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.16em]">SMARTLEDGER</div>
              <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#7d6d4a]">Consulting Inc.</div>
            </div>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#1d1d1d] md:flex">
            <Link to="/" className="transition hover:text-[#b38b38]">Home</Link>
            <Link to="/tax" className="transition hover:text-[#b38b38]">Tax</Link>
            <Link to="/payroll" className="transition hover:text-[#b38b38]">Payroll</Link>
            <Link to="/bookkeeping" className="transition hover:text-[#b38b38]">Bookkeeping</Link>
            <Link to="/privacy-policy" className="transition hover:text-[#b38b38]">Privacy Policy</Link>
          </div>
          <Link to="/contact" className="rounded-full border border-[#bf9f5b] bg-[#111111] px-4 py-2 text-sm font-semibold text-[#f6f1e7] transition hover:bg-[#201d1b]">
            Contact Us
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a7240] sm:text-sm">Contact Us</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#121212] sm:text-4xl md:text-5xl">
            Connect with SmartLedger Consulting Inc.
          </h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] bg-[#111111] p-6 text-white md:p-8">
            <div className="mb-5 flex items-center gap-4">
              <img src={logo} alt="SmartLedger logo" className="h-16 w-16 object-contain rounded-full bg-white/10 p-2" />
              <div>
                <div className="text-xl font-semibold">SmartLedger</div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#d4b679]">Consulting Inc.</div>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#e3e0db]">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d7c08c]">{detail.label}</div>
                  <div className="mt-2 text-base leading-7 text-[#f5f1ea]">{detail.value}</div>
                </div>
              ))}
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

          <form onSubmit={handleSubmit} className="soft-card brand-shadow rounded-[1.5rem] border border-[#e5d3ad] bg-white p-5 md:p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Book a Consultation</div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-[#171717]">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                />
              </label>

              <label className="block text-sm font-medium text-[#171717]">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                />
              </label>

              <label className="block text-sm font-medium text-[#171717]">
                Phone
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                />
              </label>

              <label className="block text-sm font-medium text-[#171717]">
                Service needed
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
                >
                  {consultationServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-[#171717]">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your tax, bookkeeping, or payroll needs."
                className="mt-2 w-full rounded-xl border border-[#d9ccb1] bg-[#faf6f0] px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#c6a25d]"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-[#f8f1e3] transition hover:bg-[#201d1b]"
            >
              Send Request
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#171717]">
      <header className="mx-auto max-w-5xl px-5 pb-4 pt-6 md:px-8">
        <nav className="flex items-center justify-between rounded-[1.5rem] border border-[#d3bb7d]/80 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
          <Link to="/" className="flex items-center gap-3" aria-label="Back to SmartLedger home">
            <img src={logo} alt="SmartLedger logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.16em]">SMARTLEDGER</div>
              <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#7d6d4a]">Consulting Inc.</div>
            </div>
          </Link>
          <Link to="/" className="rounded-full border border-[#bf9f5b] bg-[#111111] px-4 py-2 text-sm font-semibold text-[#f6f1e7] transition hover:bg-[#201d1b]">
            Home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2rem] border border-[#e2d5b4] bg-[#fbf8f3] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a7240]">Privacy Policy</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#121212] md:text-5xl">Privacy Policy</h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#3d3d3d]">
            <p>
              SmartLedger Consulting Inc. is committed to protecting the privacy and confidentiality of our clients. We understand that tax, bookkeeping, payroll, and accounting services often require the sharing of sensitive personal and financial information.
            </p>
            <p>
              We collect and use personal information only for the purpose of delivering professional accounting, tax preparation, payroll, bookkeeping, and advisory services. This may include names, contact details, business information, banking references, tax documents, payroll records, and supporting financial records necessary to complete our work.
            </p>
            <p>
              Information is stored securely and only accessed by authorized personnel who need it to provide services to the client. We do not sell, rent, or trade personal information with third parties for marketing purposes.
            </p>
            <p>
              We may share client information with trusted professional advisors, CRA-related filing channels, payroll providers, software platforms, or other service providers when necessary to complete your tax, payroll, or bookkeeping obligations. Where disclosure is required, we take reasonable steps to ensure confidentiality and compliance.
            </p>
            <p>
              Clients may request access to, correction of, or deletion of their personal information in accordance with applicable privacy laws. We will respond in a timely and professional manner and handle all requests with respect to confidentiality and security.
            </p>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, loss, misuse, or disclosure. However, no method of electronic transmission or storage is completely risk-free, and we encourage clients to use secure communication practices when sending sensitive documents.
            </p>
            <p>
              By engaging our services, you consent to the collection, use, and disclosure of your information as described in this policy, and as required to complete the services you have requested.
            </p>
            <p>
              This policy may be updated from time to time to reflect changes in law, business operations, or client needs. The most current version will be available on this page.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
