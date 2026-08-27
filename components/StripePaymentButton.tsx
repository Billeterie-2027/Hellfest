'use client';

import { Loader2 } from 'lucide-react';
import { useState } from 'react';

type StripePaymentButtonProps = {
    amount: number;
    productName: string;
    quantity?: number;
    successUrl?: string;
    cancelUrl?: string;
    currency?: string;
    className?: string;
    children?: React.ReactNode;
};

export default function StripePaymentButton({
    amount,
    productName,
    quantity = 1,
    successUrl,
    cancelUrl,
    currency = 'eur',
    className = '',
    children = 'PAYER PAR CARTE',
}: StripePaymentButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    productName,
                    quantity,
                    currency,
                    successUrl,
                    cancelUrl,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData?.error || 'Impossible de démarrer le paiement Stripe.'
                );
            }

            const data = await response.json();

            if (!data?.url) {
                throw new Error('Aucune URL de paiement Stripe retournée.');
            }

            window.location.href = data.url;
        } catch (error) {
            console.error('Erreur checkout:', error);

            const message =
                error instanceof Error
                    ? error.message
                    : 'Une erreur est survenue lors du paiement.';

            alert(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className={`
        inline-flex items-center justify-center gap-2
        rounded-full border border-red-500/70
        bg-gradient-to-r from-red-600 to-orange-500
        px-7 py-3 text-sm font-bold uppercase tracking-[0.18em]
        text-white shadow-[0_0_25px_rgba(239,68,68,0.35)]
        transition duration-300 hover:brightness-110
        disabled:cursor-not-allowed disabled:opacity-70
        ${className}
      `}
        >
            {loading ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Chargement...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
}
