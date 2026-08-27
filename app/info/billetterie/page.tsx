export default function BilletteriePage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Billetterie</div>
                <h1>BILLETTERIE</h1>
            </div>
            <div className="container ticket-detail-grid">
                <article className="ticket-article">
                    <div className="ticket-line">
                        <span>PASS 4 JOURS</span>
                        <strong>389 €</strong>
                    </div>
                    <ul>
                        <li>17 — 20 JUIN 2027</li>
                        <li>Disponibilité : Ouverte</li>
                        <li>Accès à toutes les scènes</li>
                    </ul>
                    <a href="https://tickets.hellfest.com" className="cta-button">Acheter</a>
                </article>
                <article className="ticket-article">
                    <div className="ticket-line">
                        <span>PASS 1 JOUR</span>
                        <strong>À VENIR</strong>
                    </div>
                    <ul>
                        <li>Disponibilité : prochainement</li>
                        <li>Plateforme officielle uniquement</li>
                    </ul>
                    <a href="https://tickets.hellfest.com" className="secondary-button">Voir le calendrier</a>
                </article>
                <article className="ticket-article warning-box">
                    <div className="ticket-line">
                        <span>REVENTE OFFICIELLE</span>
                    </div>
                    <p>La revente officielle est accessible via l’onglet dédié sur la plateforme officielle et seulement par cette voie.</p>
                    <a href="https://revente.hellfest.com" className="cta-button">Accéder</a>
                </article>
            </div>
        </main>
    );
}
