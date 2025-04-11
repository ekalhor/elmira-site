'use client';'use client';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-100 flex items-center justify-center">
      <img
        src="https://placekitten.com/300/300"
        alt="Test kitten"
        className="rounded-full shadow-md"
        width={300}
        height={300}
      />
    </main>
  );
}
