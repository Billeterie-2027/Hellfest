const topics = [
    'Visite du site',
    'Accès',
    'Transport',
    'Camping',
    'Parking',
    'Restauration',
    'Services',
    'Sécurité',
    'Objets interdits',
    'Accessibilité',
];

export default function InfosGeneralesPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Infos générales</div>
                <h1>INFOS GÉNÉRALES</h1>
            </div>
            <div className="container topic-grid">
                {topics.map((topic) => (
                    <article key={topic} className="topic-card">
                        <h2>{topic}</h2>
                        <p>Informations détaillées et recommandations pour une arrivée fluide, en sécurité et dans le meilleur confort.</p>
                    </article>
                ))}
            </div>
        </main>
    );
}
