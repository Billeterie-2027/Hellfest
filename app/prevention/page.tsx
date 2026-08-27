const preventionPoints = [
    'Sécurité',
    'Prévention',
    'Réduction des risques',
    'Respect',
    'Lutte contre les violences',
    'Informations importantes',
];

export default function PreventionPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Prévention</div>
                <h1>PRÉVENTION</h1>
            </div>
            <div className="container prevention-grid">
                {preventionPoints.map((item) => (
                    <article key={item} className="prevention-card">
                        <h2>{item}</h2>
                        <p>Des mesures claires, des conseils utiles et un cadre de confiance pour protéger chacun pendant toute la manifestation.</p>
                    </article>
                ))}
            </div>
        </main>
    );
}
