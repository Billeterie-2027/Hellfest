export default function FestivalPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Le festival</div>
                <h1>LE FESTIVAL</h1>
            </div>
            <div className="container editorials-grid">
                <article className="editorial-block large"><div className="editorial-visual one" /><div className="editorial-copy"><h2>Une ville transformée en territoire de métal</h2><p>Une nuit, une ville, et un paysage de lumière entièrement consacré à la musique.</p></div></article>
                <article className="editorial-block"><div className="editorial-visual two" /><div className="editorial-copy"><h2>Scènes</h2><p>Quatre jours d’affrontement sonore et d’émotions.</p></div></article>
                <article className="editorial-block"><div className="editorial-visual three" /><div className="editorial-copy"><h2>Atmosphère</h2><p>Entre feu, poussière et énergie collective.</p></div></article>
            </div>
        </main>
    );
}
