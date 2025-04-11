'use client';

export default function HomePage() {
  return (
    <main
      style={{
        height: '100vh',
        backgroundColor: '#fef3c7', // yellow-100
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/300px-PNG_transparency_demonstration_1.png"
        alt="Test image"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      />
    </main>
  );
}
