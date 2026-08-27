const partners = [
    { name: 'Iron Foundry', category: 'Matériel', href: '#' },
    { name: 'Vanta Audio', category: 'Son', href: '#' },
    { name: 'Cinder Works', category: 'Production', href: '#' },
    { name: 'Ignis Lab', category: 'Lumière', href: '#' },
    { name: 'Harbor Fuel', category: 'Logistique', href: '#' },
    { name: 'Nocturne Studio', category: 'Création', href: '#' },
];

export default function PartenairesPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Partenaires</div>
                <h1>PARTENAIRES</h1>
            </div>
            <div className="container partners-grid">
                {partners.map((partner) => (
                    <article key={partner.name} className="partner-card">
                        <div className="partner-logo">{partner.name.slice(0, 2).toUpperCase()}</div>
                        <h2>{partner.name}</h2>
                        <div className="partner-meta">{partner.category}</div>
                        <a href={partner.href}>Voir le partenaire</a>
                    </article>
                ))}
            </div>
        </main>
    );
}
