import Link from 'next/link';

const categories = [
    { label: 'Billetterie', href: '/info/billetterie' },
    { label: 'Informations générales', href: '/info/infos-generales' },
    { label: 'FAQ', href: '/info/faq' },
];

export default function InfoPage() {
    return (
        <main className="content-page info-page">
            <div className="container page-header">
                <div className="eyebrow">Pratique</div>
                <h1>INFOS PRATIQUES</h1>
            </div>
            <div className="container info-page-grid">
                {categories.map((category) => (
                    <Link key={category.label} href={category.href} className="category-card">
                        <span>{category.label}</span>
                    </Link>
                ))}
            </div>
            <div className="container info-cards-list">
                <div className="info-mini-card">
                    <div className="kicker">Billetterie</div>
                    <h2>Billetterie</h2>
                </div>
                <div className="info-mini-card">
                    <div className="kicker">Billetterie</div>
                    <h2>Revente officielle</h2>
                </div>
                <div className="info-mini-card">
                    <div className="kicker">Billetterie</div>
                    <h2>Questions fréquentes</h2>
                </div>
                <div className="info-mini-card">
                    <div className="kicker">Infos générales</div>
                    <h2>Visite du site</h2>
                </div>
            </div>
        </main>
    );
}
