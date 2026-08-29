'use client';

import {
  Accessibility,
  ChevronDown,
  Globe,
  Mail,
  MapPinned,
  Menu,
  MessageCircleMore,
  Music2,
  Share2,
  Smartphone,
  Ticket,
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Share2 },
  { name: 'Instagram', href: '#', icon: Globe },
  { name: 'YouTube', href: '#', icon: Globe },
  { name: 'TikTok', href: '#', icon: Music2 },
  { name: 'Discord', href: '#', icon: MessageCircleMore },
  { name: 'Contact', href: '#', icon: Mail },
];

const tabs = [
  { label: 'TOUT', icon: Accessibility, active: false },
  { label: 'BILLETTERIE', icon: Ticket, active: true },
  { label: 'INFOS GÉNÉRALES', icon: MapPinned, active: false },
];

const cards = [
  {
    eyebrow: 'INFOS BILLETTERIE',
    title: 'Billetterie - Hellfest 2027',
    description: "Les pass 4 jours sont désormais tous vendus pour l'édition 2027 !",
    footerIcon: Ticket,
    footerLabel: 'BILLETTERIE',
  },
  {
    eyebrow: 'INFOS BILLETTERIE',
    title: 'Revente Officielle',
    description: 'Trouver ou revendre un billet',
    footerIcon: Ticket,
    footerLabel: 'REVENTE',
  },
  {
    eyebrow: 'INFOS BILLETTERIE',
    title: 'Questions Fréquentes',
    description: 'Les réponses aux questions que vous vous posez !',
    footerIcon: MapPinned,
    footerLabel: 'FAQ',
  },
];

export default function InfosPratiquesPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-zinc-100">
      <aside className="fixed left-0 top-0 hidden h-screen w-16 flex-col items-center justify-between border-r border-zinc-800 bg-zinc-900/90 px-3 py-5 backdrop-blur-md md:flex">
        <div className="flex flex-col items-center gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/70 bg-gradient-to-br from-red-600 to-orange-500 text-sm font-black text-white shadow-[0_0_25px_rgba(239,68,68,0.45)]">
            HF
          </div>

          <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-200">
            <button className="text-white">FR</button>
            <ChevronDown className="h-3 w-3 text-zinc-400" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/70 hover:text-red-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 to-orange-500 px-2 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] transition hover:brightness-110">
          <Smartphone className="h-4 w-4" />
          APP OFFICIELLE
        </button>
      </aside>

      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-black/20 backdrop-blur-md md:pl-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 sm:px-8 lg:px-10">
          <nav className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.32em] text-zinc-300 md:flex">
            <a href="#" className="transition hover:text-white">NEWS</a>
            <a href="#" className="transition hover:text-white">INFOS</a>
          </nav>

          <div className="flex flex-1 items-center justify-center md:flex-none">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/70 bg-gradient-to-br from-red-600 to-orange-500 text-sm font-black text-white">
                HF
              </div>
              <span className="text-lg font-black uppercase tracking-[0.28em] text-white">HELLFEST</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Accessibilité"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/75 text-zinc-100 transition hover:border-red-500/70 hover:text-red-400 md:flex"
            >
              <Accessibility className="h-4 w-4" />
            </button>

            <button
              aria-label="Menu principal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/75 text-zinc-100 transition hover:border-red-500/70 hover:text-red-400"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="md:pl-16">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-zinc-400">
              FILTRER PAR CATÉGORIE
            </p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {tabs.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={[
                  'flex items-center justify-center gap-3 rounded-xl border px-5 py-4 text-left transition duration-300',
                  active
                    ? 'border-red-500 bg-red-500/10 text-white shadow-[0_0_25px_rgba(239,68,68,0.15)]'
                    : 'border-zinc-700 bg-zinc-900/70 text-zinc-200 hover:border-zinc-600 hover:text-white',
                ].join(' ')}
              >
                <Icon className={['h-5 w-5', active ? 'text-red-400' : 'text-zinc-300'].join(' ')} />
                <span className="text-[10px] font-black uppercase tracking-[0.24em]">{label}</span>
              </button>
            ))}
          </div>

          <div className="mb-10 flex flex-col gap-5 border-b border-zinc-800 pb-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-red-500/30">
                <Ticket className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black uppercase tracking-[-0.08em] text-red-400 sm:text-4xl lg:text-5xl">
                BILLETTERIE
              </h1>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-400 md:text-right">
              Toutes les informations relatives à la billetterie
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map(({ eyebrow, title, description, footerIcon: FooterIcon, footerLabel }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/60 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="mb-5 text-[10px] font-black uppercase tracking-[0.26em] text-red-400">
                  {eyebrow}
                </div>

                <h2 className="text-2xl font-black uppercase leading-tight tracking-[-0.06em] text-white">
                  {title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>

                <div className="mt-8 rounded-[1.5rem] border border-red-500/30 bg-gradient-to-r from-red-600 to-orange-500 p-4 text-white shadow-[0_0_22px_rgba(239,68,68,0.2)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <FooterIcon className="h-8 w-8 opacity-80" />
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90">
                        {footerLabel}
                      </span>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}