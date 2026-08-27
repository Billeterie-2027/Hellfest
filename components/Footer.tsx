import Link from 'next/link';

const footerInfo = [
    { label: 'Billetterie', href: '/info/billetterie' },
    { label: 'Infos générales', href: '/info/infos-generales' },
];

const festivalLinks = [
    { label: 'Festival', href: '/festival' },
    { label: 'Shop', href: 'https://shop.hellfest.com', external: true },
    { label: 'Expérience', href: '/experience' },
    { label: 'Engagements', href: '/engagements' },
    { label: 'Prévention', href: '/prevention' },
    { label: 'Accessibilité', href: '/accessibilite' },
    { label: 'Partenaires', href: '/partenaires' },
];

const legalLinks = [
    { label: 'Contact', href: '#contact' },
    { label: 'Recrutement', href: '#recrutement' },
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Mentions légales', href: '#legal' },
    { label: 'CGV', href: '#cgv' },
];

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="brand">HELLFEST</div>
                    <div className="footer-date">18 — 21 JUIN 2027</div>
                    <div className="footer-tag">HOME OF METAL SINCE 2010</div>
                </div>

                <div className="footer-column">
                    <div className="menu-label">INFO</div>
                    {footerInfo.map((item) => (
                        <Link key={item.label} href={item.href}>{item.label}</Link>
                    ))}
                </div>

                <div className="footer-column">
                    <div className="menu-label">LE FESTIVAL</div>
                    {festivalLinks.map((item) => (
                        <Link key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>{item.label}</Link>
                    ))}
                </div>

                <div className="footer-column">
                    <div className="menu-label">CONTACT &amp; LÉGAL</div>
                    {legalLinks.map((item) => (
                        <Link key={item.label} href={item.href}>{item.label}</Link>
                    ))}
                </div>

                <div className="footer-column footer-contact">
                    <div className="menu-label">CONTACT</div>
                    <a href="mailto:contact@hellfest.com">contact@hellfest.com</a>
                    <div className="social-stack">
                        <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
                        <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
                        <a href="https://youtube.com" aria-label="YouTube">YouTube</a>
                    </div>
                    <div className="copyright">© HELLFEST 2027</div>
                </div>
            </div>
        </footer>
    );
}
