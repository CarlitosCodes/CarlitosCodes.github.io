export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 min-h-[70vh] grid place-items-center dark:bg-gray-900 dark:text-white">
      <section className="max-w-3xl text-center space-y-4">
        <img src="/hero.png" alt="" className="mx-auto w-40 h-40 rounded-full object-cover shadow" />
        <h1 className="text-4xl font-bold">Carlos Villanueva</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300">Learning all things ML and AI 🎰️🧠️🤖️</p>
        <p className="text-2xl text-gray-600 dark:text-gray-300">From Controls Engineer to ML/AI engineer</p>
        <div className="flex items-center justify-center gap-4">
          <a className="underline" href="/blog">Blog</a>
          <a className="underline" href="/resume">Resume</a>
          <a className="underline" href="/links">Links</a>
        </div>
      </section>
    </main>
  );
}
