const faqs = [
    {
        question: 'Quand les billets sont-ils mis en vente ?',
        answer: 'La billetterie officielle est ouverte dès maintenant pour le pass 4 jours, avec les ventes du pass 1 jour à venir.'
    },
    {
        question: 'Puis-je revendre mon billet ?',
        answer: 'Oui, uniquement via la revente officielle de notre plateforme, pour garantir un circuit fiable et sécurisé.'
    },
    {
        question: 'Quelles sont les conditions d’accès ?',
        answer: 'Les visiteurs doivent présenter un billet valide et respecter les consignes de sécurité et les règles de la manifestation.'
    }
];

export default function FaqPage() {
    return (
        <main className="content-page">
            <div className="container page-header">
                <div className="eyebrow">FAQ</div>
                <h1>FAQ</h1>
            </div>
            <div className="container faq-accordion">
                {faqs.map((item) => (
                    <details key={item.question} className="faq-detail">
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                    </details>
                ))}
            </div>
        </main>
    );
}
