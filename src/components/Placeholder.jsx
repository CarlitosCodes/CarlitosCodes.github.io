// src/components/Placeholder.jsx

import hero from "../assets/hero.png";

export default function Placeholder() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <img
          src={hero}
          alt="working-progress image"
          className="mx-auto w-full max-w-md rounded-2xl shadow-lg"
          loading="eager"
          decoding="async"
        />
      <h1 className="text-4xl font-bold text-gray-800">
        Hello, World! 🌍 This is Carlos Website.
      </h1>
    </div>
  );
}

