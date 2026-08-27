import Link from 'next/link';

const article = {
    category: 'Festival',
    date: '12 mars 2027',
    title: 'Le festival investit les anciennes halles de Clisson',
    summary: 'Une carte complète des espaces, des scènes et des points d’accueil, pensée pour renouveler la magie d’un festival de métal accessible à tous.',
};

const related = [
    { title: 'La programmation finale des headliners confirmée', href: '/news/2' },
    { title: 'Camping, transport et arrivée sur site', href: '/news/3' },
    { title: 'Des ateliers, des installations et des rues vivantes', href: '/news/4' },
];

export default function ArticlePage() {
    return (
        <main className="content-page article-page">
            <div className="container">
                <div className="article-top">
                    <Link href="/news" className="secondary-button">Retour aux News</Link>
                    <div className="eyebrow">{article.category}</div>
                    <div className="article-date">{article.date}</div>
                </div>
                <h1>{article.title}</h1>
                <div className="article-hero" />
                <div className="article-copy">
                    <p>{article.summary}</p>
                    <p>Le site prend la forme d’un territoire vivant, où chaque zone de passage est pensée comme une scène à part entière. Des bâtiments historiques aux espaces extérieurs, le festival articule récits visuels, programmation et accueil pour offrir une expérience intense, maîtrisée et invitante.</p>
                    <p>À l’arrivée, les festivaliers découvrent un plan lisible, des points d’information intelligents et des espaces de repos qui évitent l’effort inutile. La attention portée à la mobilité, au confort et à la sécurité donne au festival son côté premium et sérieux.</p>
                </div>
                <div className="article-gallery">
                    <div className="gallery-item tall" />
                    <div className="gallery-item" />
                    <div className="gallery-item" />
                </div>
                <div className="related-block">
                    <div className="eyebrow">À lire aussi</div>
                    <div className="related-list">
                        {related.map((item) => (
                            <Link key={item.title} href={item.href}>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
