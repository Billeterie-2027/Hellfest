'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    CalendarDays,
    ChevronDown,
    MapPinned,
    Menu,
    MessageCircleMore,
    Smartphone,
    Ticket,
} from 'lucide-react';
import type { IconType } from 'react-icons';
import {
    FaDiscord,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from 'react-icons/fa';
import StripePaymentButton from '@/components/StripePaymentButton';
import { useEffect, useState } from 'react';

const socialLinks: Array<{ name: string; href: string; icon: IconType }> = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'YouTube', href: '#', icon: FaYoutube },
    { name: 'TikTok', href: '#', icon: FaTiktok },
    { name: 'Discord', href: '#', icon: FaDiscord },
    { name: 'Contact', href: '#', icon: FaEnvelope },
];

const infoCards = [
    {
        title: 'BILLETTERIE',
        description: 'Toutes les informations relatives à la billetterie',
        icon: Ticket,
        actions: ['BILLETTERIE - HELLFEST 2027', 'QUESTIONS FRÉQUENTES', 'REVENTE OFFICIELLE'],
    },
    {
        title: 'INFOS GÉNÉRALES',
        description: 'Toutes les informations générales sur le festival',
        icon: MapPinned,
        actions: ['VISITE DU SITE'],
    },
];

export default function HomePage() {
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        const timer = window.setTimeout(() => setLoading(false), 1200);
        return () => window.clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100">
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b]"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red-500/60 bg-red-500/10 text-2xl font-black text-red-400 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
                                HF
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.8rem] text-zinc-300">
                                HELLFEST
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <aside className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-between border-r border-zinc-800 bg-zinc-900/90 px-3 py-5 backdrop-blur-md md:flex">
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

                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 to-orange-500 px-2 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] transition duration-300 hover:brightness-110">
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
                        <div className="hidden items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200 md:flex">
                            <span>FR</span>
                            <ChevronDown className="h-3 w-3" />
                        </div>

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
                <section className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.25),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.18),transparent_22%),linear-gradient(90deg,rgba(9,9,11,0.9),rgba(9,9,11,0.45)_40%,rgba(9,9,11,0.8))]" />

                    <div className="relative mx-auto grid max-w-[1500px] items-end gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.45fr_0.8fr] lg:px-10 lg:py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="relative z-10"
                        >
                            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.44em] text-zinc-300">
                                Festival • Clisson • France
                            </p>

                            <h1 className="max-w-[900px] text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl lg:text-[7rem]">
                                <span className="block text-transparent" style={{ WebkitTextStroke: '1.8px rgba(255,118,78,0.95)' }}>
                                    HOME OF HELLBANGERS
                                </span>
                                <span className="mt-2 block text-white">SINCE 2006</span>
                            </h1>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 text-[10px] font-black uppercase tracking-[0.26em] text-white shadow-[0_0_25px_rgba(239,68,68,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(239,68,68,0.45)]">
                                    EXPÉRIENCE
                                </button>
                                <button className="rounded-full border border-zinc-700 bg-zinc-900/45 px-7 py-3 text-[10px] font-black uppercase tracking-[0.26em] text-zinc-100 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:text-red-200">
                                    ENGAGEMENTS - RSO
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="relative z-10 flex justify-center lg:justify-end"
                        >
                            <div className="rounded-[2rem] border border-red-500/50 bg-red-600/10 px-6 py-5 text-center shadow-[0_0_35px_rgba(239,68,68,0.25)] backdrop-blur-md sm:px-8 sm:py-7">
                                <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-300">Festival 2027</div>
                                <div className="mt-4 text-4xl font-black uppercase tracking-[-0.08em] text-red-400 sm:text-5xl lg:text-6xl">
                                    17-20
                                </div>
                                <div className="mt-1 text-lg font-black uppercase tracking-[0.24em] text-zinc-100">JUIN 2027</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="relative bg-[#09090b] px-6 py-16 sm:px-8 lg:px-10">
                    <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="space-y-6">
                            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-zinc-400">AFTERMOVIE 2026</p>
                            <h2 className="text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-5xl lg:text-6xl">
                                AFTERMOVIE 2026
                            </h2>
                            <p className="max-w-lg text-base leading-7 text-zinc-300">
                                Hellbangers, il est temps de tourner la dernière page de cette 19ème édition.
                            </p>
                            <button className="inline-flex items-center gap-2 rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 text-[10px] font-black uppercase tracking-[0.26em] text-white transition duration-300 hover:brightness-110">
                                AFTERMOVIE 2026
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border border-red-500/20 bg-red-500/5" />
                            <div
                                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-zinc-700 bg-cover bg-center shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80')",
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#09090b] px-6 py-20 sm:px-8 lg:px-10">
                    <div className="pointer-events-none absolute inset-x-0 top-4 text-center text-[4.2rem] font-black uppercase leading-none tracking-[-0.12em] text-red-500/10 sm:text-[6rem] lg:text-[10rem]">
                        INFOS PRATIQUES
                    </div>

                    <div className="relative mx-auto max-w-[1500px]">
                        <div className="mb-10 text-center text-[10px] font-bold uppercase tracking-[0.36em] text-zinc-400">
                            Accès & informations
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {infoCards.map(({ title, description, icon: Icon, actions }, index) => (
                                <motion.article
                                    key={title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className="rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-8"
                                >
                                    <div className="mb-6 flex items-center justify-between gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.25)]">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-zinc-400">Festival</div>
                                    </div>

                                    <h3 className="text-3xl font-black uppercase tracking-[-0.08em] text-white sm:text-4xl">
                                        {title}
                                    </h3>
                                    <p className="mt-4 max-w-lg text-base leading-7 text-zinc-300">{description}</p>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {title === 'BILLETTERIE' ? (
                                            <>
                                                <StripePaymentButton
                                                    amount={389}
                                                    productName="Pass 4 jours Hellfest 2027"
                                                    className="px-4 py-2.5 text-[9px] tracking-[0.2em]"
                                                >
                                                    BILLETTERIE - HELLFEST 2027
                                                </StripePaymentButton>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        window.location.href = '/infos-pratiques/billetterie-hellfest-2027';
                                                    }}
                                                    className="rounded-full border border-red-500/60 bg-transparent px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-red-400 hover:bg-red-500/10 hover:text-red-200"
                                                >
                                                    QUESTIONS FRÉQUENTES
                                                </button>
                                                <StripePaymentButton
                                                    amount={389}
                                                    productName="Revente officielle Hellfest 2027"
                                                    className="border-red-500/60 bg-transparent px-4 py-2.5 text-[9px] tracking-[0.2em] shadow-none hover:bg-red-500/10"
                                                >
                                                    REVENTE OFFICIELLE
                                                </StripePaymentButton>
                                            </>
                                        ) : (
                                            actions.map((action) => (
                                                <button
                                                    key={action}
                                                    type="button"
                                                    className="rounded-full border border-red-500/60 bg-transparent px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-red-400 hover:bg-red-500/10 hover:text-red-200"
                                                >
                                                    {action}
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white shadow-[0_0_25px_rgba(239,68,68,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(239,68,68,0.45)]">
                                VOIR LA PAGE INFOS PRATIQUES
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
