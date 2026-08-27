import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
} as any);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            amount,
            productName,
            quantity = 1,
            currency = 'eur',
            successUrl,
            cancelUrl,
            metadata = {},
        } = body ?? {};

        if (!amount || !productName) {
            return NextResponse.json(
                { error: 'amount et productName sont requis.' },
                { status: 400 }
            );
        }

        const numericAmount = Number(amount);
        const numericQuantity = Number(quantity);

        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            return NextResponse.json(
                { error: 'Le montant doit être un nombre positif.' },
                { status: 400 }
            );
        }

        if (!Number.isFinite(numericQuantity) || numericQuantity <= 0) {
            return NextResponse.json(
                { error: 'La quantité doit être supérieure à 0.' },
                { status: 400 }
            );
        }

        const origin = new URL(request.url).origin;

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency,
                        product_data: {
                            name: String(productName),
                        },
                        unit_amount: Math.round(numericAmount * 100),
                    },
                    quantity: numericQuantity,
                },
            ],
            success_url:
                successUrl ||
                `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl || `${origin}/checkout/cancel`,
            metadata: {
                productName: String(productName),
                ...metadata,
            },
            allow_promotion_codes: true,
        });

        return NextResponse.json({
            id: session.id,
            url: session.url,
        });
    } catch (error) {
        console.error('Erreur Stripe Checkout:', error);

        const message =
            error instanceof Error ? error.message : 'Erreur inconnue lors du paiement.';

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
