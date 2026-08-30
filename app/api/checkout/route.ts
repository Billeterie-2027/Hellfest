import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
} as any);

const resend = new Resend(process.env.RESEND_API_KEY);

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
            email,
            numeroCommande,
            montantBillet,
            fraisGestion,
            totalPaye,
        } = body ?? {};

        // Validation des champs obligatoires
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

        // 1. Création de la session Stripe Checkout
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            customer_email: email || undefined,
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
                numeroCommande: numeroCommande || '',
                ...metadata,
            },
            allow_promotion_codes: true,
        });

        // 2. Envoi de l'e-mail de confirmation via Resend (si un e-mail est fourni)
        if (email) {
            try {
                await resend.emails.send({
                    from: 'Hellfest <onboarding@resend.dev>', // Remplacez par votre domaine vérifié en production
                    to: [email],
                    subject: 'Confirmation de votre commande – Hellfest 2027',
                    text: `
Objet : Confirmation de votre commande – Hellfest 2027

Bonjour,

Nous vous confirmons que votre commande a bien été enregistrée.

Événement : HELLFEST OPEN AIR 2027
Dates : 17 au 20 juin 2027
Billet : Pass 4 jours
Type d’achat : Billet issu de la revente officielle
Numéro de commande : ${numeroCommande || session.id}

Montant du billet : ${montantBillet || numericAmount} €
Frais de revente et de gestion : ${fraisGestion || '0,00'} €
Total payé : ${totalPaye || numericAmount} €

Votre billet est désormais associé à votre commande et pourra être géré depuis votre Espace Client sur la billetterie officielle.

Le billet sera disponible dans votre Espace Client environ 1 mois avant le festival.

Merci pour votre achat et à bientôt au Hellfest !

L’équipe Hellfest
Hellfest Productions
                    `.trim(),
                });
            } catch (emailError) {
                console.error('Erreur lors de l’envoi de l’e-mail Resend:', emailError);
            }
        }

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