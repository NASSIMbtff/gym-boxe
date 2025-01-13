import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-around">
            {/* Lien vers la page d'accueil */}
            <Link href="/">
              <a className="hover:underline">Accueil</a>
            </Link>
            {/* Lien vers la page des événements */}
            <Link href="/evenements">
              <a className="hover:underline">Événements</a>
            </Link>
            {/* Lien vers la page de contact */}
            <Link href="/contact">
              <a className="hover:underline">Contact</a>
            </Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2023 Gym Boxe
        </footer>
      </body>
    </html>
  );
}
