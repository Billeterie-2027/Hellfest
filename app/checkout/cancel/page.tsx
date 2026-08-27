export default function CancelPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-black uppercase tracking-[0.12em] text-red-400">
                    Paiement annulé
                </h1>
                <p className="mt-4 text-zinc-300">Votre commande n’a pas été finalisée.</p>
            </div>
        </main>
    );
}
