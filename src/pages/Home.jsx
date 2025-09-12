export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 min-h-[70vh] grid place-items-center dark:bg-gray-900 dark:text-white">
      <section className="max-w-3xl text-center space-y-6">
        <img
          src="/hero.png"
          alt="Portrait of Carlos Villanueva"
          className="block mx-auto w-40 h-40 md:w-[220px] md:h-[220px] rounded-full object-cover shadow"
          loading="lazy"
        />

        <h1 className="text-4xl md:text-5xl font-bold">Carlos Villanueva</h1>

        <p className="text-xl md:text-2xl  dark:text-gray-300">
          Learning all things ML and AI 🎰️🧠️🤖️
        </p>

        <p className="text-xl md:text-2xl  dark:text-gray-300">
          From Controls Engineer to ML/AI engineer
        </p>

        <nav aria-label="Primary">
          <ul className="flex items-center justify-center gap-6">
            <li><a className="underline underline-offset-4 hover:opacity-80 focus:outline-none focus:ring" href="/blog">Blog</a></li>
            <li><a className="underline underline-offset-4 hover:opacity-80 focus:outline-none focus:ring" href="/resume">Resume</a></li>
            <li><a className="underline underline-offset-4 hover:opacity-80 focus:outline-none focus:ring" href="/about">About</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
