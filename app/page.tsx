import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600">Bienvenue au Gym de Boxe !</h1>
      <p className="mt-4 text-lg text-gray-700">
        Découvrez nos entraînements, compétitions et séances exclusives pour tous les niveaux.
      </p>
      <div className="mt-4">
        <Image
          src="/images/gym.jpg"
          alt="Photo du gym"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
