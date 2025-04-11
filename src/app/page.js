'use client';

export default function HomePage() {
  return (
    <main className="h-screen bg-yellow-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Tailwind is Working ✅</h1>
        <p className="text-lg text-zinc-800 mb-6">
          You’re almost there, Elmira. This is a test page with Tailwind styles.
        </p>
        <img
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          className="w-64 h-64 rounded-full shadow-xl mx-auto"
        />
      </div>
    </main>
  );
}
