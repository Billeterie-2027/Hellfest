const accessData = [
    'PMR / PSH',
    'Accès',
    'Accompagnement',
    'Dispositifs disponibles',
    'Informations pratiques',
];

export default function AccessibilitePage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Accessibilité</div>
                <h1>ACCESSIBILITÉ</h1>
            </div>
            <div className="container access-grid">
                {accessData.map((item) => (
                    <article key={item} className="access-card">
                        <h2>{item}</h2>
                        <p>Un accueil pensé pour faciliter la venue et le confort de chacun, avec dispositifs, signalétique et accompagnement.</p>
                    </article>
                ))}
            </div>
        </main>
    );
}
