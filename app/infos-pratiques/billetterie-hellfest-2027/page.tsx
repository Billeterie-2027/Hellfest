import {
    Accessibility,
    ChevronDown,
    Compass,
    Facebook,
    Instagram,
    Mail,
    Menu,
    MessageCircle,
    Music2,
    Smartphone,
    Ticket,
    Youtube,
} from 'lucide-react';

const socialLinks = [
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
    { label: 'TikTok', href: '#', icon: Music2 },
    { label: 'Discord', href: '#', icon: MessageCircle },
    { label: 'Contact', href: '#', icon: Mail },
];

export default function BilletterieHellfest2027Page() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <aside className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-between border-r border-zinc-800 bg-zinc-950/95 px-3 py-5 backdrop-blur-xl md:flex">
                <div className="flex flex-col items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/60 bg-gradient-to-br from-red-600 to-orange-500 text-sm font-black text-white shadow-[0_0_25px_rgba(239,68,68,0.45)]">
                        HF
                    </div>

                    <button className="flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/80 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-200">
                        <span>FR</span>
                        <ChevronDown className="h-3 w-3 text-zinc-400" />
                    </button>
                </div>

                <div className="flex flex-col items-center gap-3">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:text-red-400"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-red-500/60 bg-gradient-to-r from-red-600 to-orange-500 px-2 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(239,68,68,0.25)] transition hover:scale-[1.02]">
                    <Smartphone className="h-4 w-4" />
                    APP OFFICIELLE
                </button>
            </aside>

            <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl md:pl-16">
                <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-300">
                        <a href="#" className="transition hover:text-white">NEWS</a>
                        <a href="#" className="transition hover:text-white">INFOS</a>
                    </nav>

                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-lg font-black uppercase tracking-[0.32em] text-white">HELLFEST</div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            aria-label="Accessibilité"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-red-500/50 hover:text-red-300"
                        >
                            <Accessibility className="h-4 w-4" />
                        </button>
                        <button
                            aria-label="Menu"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-red-500/50 hover:text-red-300"
                        >
                            <Menu className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="md:pl-16">
                <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] border border-zinc-800/90 bg-zinc-900/60 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 lg:p-10">
                        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 shadow-[0_0_22px_rgba(239,68,68,0.25)]">
                                        <Ticket className="h-6 w-6" />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.38em] text-red-400">
                                        BILLETTERIE
                                    </div>
                                </div>

                                <h1 className="max-w-[800px] text-3xl font-black uppercase leading-[0.95] tracking-[-0.07em] text-red-500 sm:text-5xl lg:text-[4rem]">
                                    LES PASS 4 JOURS SONT DÉSORMAIS TOUS VENDUS POUR L&apos;ÉDITION 2027 !
                                </h1>

                                <p className="max-w-[680px] text-base text-zinc-300">
                                    Rendez-vous dès le 8 juillet sur la revente officielle
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button className="rounded-full border border-red-500/70 bg-red-600 px-6 py-3 text-[11px] font-black uppercase tracking-[0.26em] text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] transition hover:-translate-y-0.5 hover:bg-red-500">
                                        TICKETS.HELLFEST.FR
                                    </button>
                                </div>

                                <p className="max-w-[680px] text-sm leading-7 text-zinc-400">
                                    La vente des pass 1 jour aura lieu au cours du premier trimestre 2027.
                                </p>

                                <div className="h-px w-full bg-gradient-to-r from-red-500/80 via-red-500/20 to-transparent" />
                            </div>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[430px]">
                                    <div className="absolute inset-0 -rotate-3 rounded-[2rem] border border-red-500/30 bg-gradient-to-br from-red-500/20 to-transparent blur-2xl" />

                                    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-900/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.22),_transparent_38%)]" />

                                        <div className="relative z-10">
                                            <div className="text-center">
                                                <div className="text-2xl font-black uppercase tracking-[0.22em] text-white">HELLFEST</div>
                                                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400">
                                                    THE ABSOLUTE EDITION
                                                </div>
                                            </div>

                                            <div className="mt-6 text-center text-[9px] font-bold uppercase tracking-[0.38em] text-zinc-400">
                                                + 17-20 JUNE 2027 + CLISSON - FRANCE
                                            </div>

                                            <div className="mt-8 space-y-2 text-center">
                                                <div className="text-[10px] font-bold uppercase tracking-[0.48em] text-red-400">
                                                    4-DAY PASSES
                                                </div>
                                                <div className="text-5xl font-black uppercase leading-none tracking-[-0.08em] text-transparent sm:text-6xl"
                                                    style={{ WebkitTextStroke: '1.5px rgba(255, 120, 80, 0.95)' }}
                                                >
                                                    SOLD OUT
                                                </div>
                                            </div>

                                            <div className="mt-10 flex items-center justify-center gap-4 text-zinc-500">
                                                <div className="h-px w-10 bg-zinc-700" />
                                                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-red-400">RITUAL</div>
                                                <div className="h-px w-10 bg-zinc-700" />
                                            </div>

                                            <div className="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-200">
                                                THANK YOU HELLBANGERS!
                                            </div>

                                            <div className="mt-8 flex justify-center">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red-500/60 bg-gradient-to-br from-red-600 to-orange-500 text-lg font-black text-white shadow-[0_0_25px_rgba(239,68,68,0.45)]">
                                                    HF
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
