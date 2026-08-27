const engagements = [
    'Environnement',
    'Mobilité',
    'Déchets',
    'Énergie',
    'Alimentation',
    'Inclusion',
    'Actions locales',
];

export default function EngagementsPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Engagements</div>
                <h1>ENGAGEMENTS</h1>
            </div>
            <div className="container pillar-grid">
                {engagements.map((item) => (
                    <article key={item} className="pillar-card">
                        <div className="pillar-image" />
                        <h2>{item}</h2>
                        <p>Des actions concrètes pour réduire l’empreinte écologique du festival et améliorer l’expérience de chacun.</p>
                    </article>
                ))}
            </div>
        </main>
    );
}
