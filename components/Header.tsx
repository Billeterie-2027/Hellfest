'use client';

import Link from 'next/link';
import { useState } from 'react';

const mainItems = [
    { label: 'NEWS', href: '/news' },
    { label: 'INFO', href: '/info' },
];

const festivalItems = [
    { label: 'Le Festival', href: '/festival' },
    { label: 'Shop', href: 'https://shop.hellfest.com', external: true },
    { label: 'Expérience', href: '/experience' },
    { label: 'Engagements', href: '/engagements' },
    { label: 'Prévention', href: '/prevention' },
    { label: 'Accessibilité', href: '/accessibilite' },
    { label: 'Partenaires', href: '/partenaires' },
];

const infoItems = [
    { label: 'Billetterie', href: '/info/billetterie' },
    { label: 'Informations générales', href: '/info/infos-generales' },
    { label: 'FAQ', href: '/info/faq' },
];

const legalItems = [
    { label: 'Contact', href: '#contact' },
    { label: 'Recrutement', href: '#recrutement' },
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Mentions légales', href: '#legal' },
    { label: 'Conditions générales', href: '#cgv' },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="topbar">
                <div className="container topbar-inner">
                    <Link href="/" className="brand" aria-label="Accueil HELLFEST">HELLFEST</Link>
                    <nav className="main-nav" aria-label="Navigation principale">
                        {mainItems.map((item) => (
                            <Link key={item.label} href={item.href}>{item.label}</Link>
                        ))}
                    </nav>
                    <button type="button" className="menu-button" aria-expanded={open} aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>
                        MENU
                    </button>
                </div>
            </header>

            <div className={`fullscreen-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
                <div className="container menu-shell">
                    <div className="menu-header">
                        <Link href="/" className="brand" onClick={() => setOpen(false)}>HELLFEST</Link>
                        <button type="button" className="close-button" aria-label="Fermer le menu" onClick={() => setOpen(false)}>FERMER</button>
                    </div>
                    <div className="menu-grid">
                        <div className="menu-group">
                            <div className="menu-label">INFO</div>
                            {infoItems.map((item) => (
                                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                            ))}
                        </div>
                        <div className="menu-group">
                            <div className="menu-label">LE FESTIVAL</div>
                            {festivalItems.map((item) => (
                                <Link key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>
                            ))}
                        </div>
                        <div className="menu-group">
                            <div className="menu-label">CONTACT &amp; LÉGAL</div>
                            {legalItems.map((item) => (
                                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                            ))}
                        </div>
                        <div className="menu-group menu-language">
                            <div className="menu-label">LANGUE</div>
                            <div className="language-switcher">
                                <button type="button" aria-label="Français" className="active">FR</button>
                                <button type="button" aria-label="English">EN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
