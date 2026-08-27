'use client';

import { Loader2, Ticket } from 'lucide-react';
import { useState } from 'react';

type PaymentProduct = {
    name: string;
    amount: number;
};

const paymentProducts: Record<string, PaymentProduct> = {
    'BILLETTERIE - HELLFEST 2027': {
        name: 'Billetterie - Hellfest 2027',
        amount: 89,
    },
    'REVENTE OFFICIELLE': {
        name: 'Revente officielle - Hellfest 2027',
        amount: 89,
    },
};

export default function BilletterieCard() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePayment = async (productLabel: string) => {
        const product = paymentProducts[productLabel];

        if (!product || loading) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productName: product.name,
                    amount: product.amount,
                    quantity: 1,
                    currency: 'eur',
                }),
            });

            const data = (await response.json()) as { url?: string; error?: string };

            if (!response.ok || !data.url) {
                throw new Error(data.error || 'Impossible de démarrer le paiement.');
            }

            window.location.href = data.url;
        } catch (paymentError) {
            setError(
                paymentError instanceof Error
                    ? paymentError.message
                    : 'Une erreur est survenue pendant le paiement.'
            );
            setLoading(false);
        }
    };

    const paymentButtonClassName =
        'rounded-full border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-60';

    return (
        <article className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.25)]">
                    <span className="text-2xl font-black">H</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-400">
                    FESTIVAL
                </div>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-[-0.08em] text-white sm:text-4xl">
                BILLETTERIE
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                Toutes les informations relatives à la billetterie
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                <button
                    type="button"
                    disabled={loading}
                    onClick={() => handlePayment('BILLETTERIE - HELLFEST 2027')}
                    className={`${paymentButtonClassName} border-red-500/70 bg-red-600 text-white hover:bg-red-500`}
                >
                    {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Ticket className="h-3.5 w-3.5" />}
                    BILLETTERIE - HELLFEST 2027
                </button>
                <button
                    type="button"
                    disabled={loading}
                    onClick={() => handlePayment('REVENTE OFFICIELLE')}
                    className={`${paymentButtonClassName} border-red-500/60 bg-transparent text-white hover:bg-red-500/10 hover:text-red-200`}
                >
                    {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                    REVENTE OFFICIELLE
                </button>
            </div>

            {error ? (
                <p role="alert" className="mt-4 text-sm text-red-300">
                    {error}
                </p>
            ) : null}
        </article>
    );
}
