import Link from 'next/link';

const articles = [
    { title: 'Le festival investit les anciennes halles de Clisson', category: 'Festival', date: '12 mars 2027', excerpt: 'Une carte complète des espaces, des scènes et des points d’accueil...', hero: true },
    { title: 'La programmation finale des headliners confirmée', category: 'Programmation', date: '18 mars 2027', excerpt: 'Quatre jours de performances et de découvertes...', hero: false },
    { title: 'Camping, transport et arrivée sur site', category: 'Infos', date: '22 mars 2027', excerpt: 'Tout est pensé pour guider les festivaliers...', hero: false },
    { title: 'Des ateliers, des installations et des rues vivantes', category: 'Expérience', date: '28 mars 2027', excerpt: 'Une expérience festival plus large et immersive...', hero: false },
];

export default function NewsPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">Actualités</div>
                <h1>NEWS</h1>
            </div>
            <div className="container news-page-grid">
                {articles.map((article, index) => (
                    <article key={article.title} className={article.hero ? 'news-feature' : 'news-card-page'}>
                        <div className="news-visual" />
                        <div className="news-info">
                            <div className="news-meta"><span>{article.category}</span><span>{article.date}</span></div>
                            <h2>{article.title}</h2>
                            <p>{article.excerpt}</p>
                            <Link href={`/news/${index + 1}`} className="secondary-button">Lire l’article</Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
