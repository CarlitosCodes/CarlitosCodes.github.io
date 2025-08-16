export default function Links() {
  return (
    <main
      className="max-w-5xl ml-auto mr-0 px-4 py-6 space-y-6 text-left"
      // ^^^^^^  changed from mx-auto → ml-auto mr-0
      //                         ^^^^^^^ add text-right to right-align text
    >
      {/* <h1 className="text-3xl font-bold">Links</h1> */}
      <h2 className="text-2xl font-bold">Hi! 👋️</h2>

      <p className="text-gray-900 dark:text-gray-300">
        I'm Carlos, a Controls Engineer doing my Masters in Computer Science with a dream of working in ML.</p>
      {/* <p>
        I build developer tools and have been working with LLMs since 2021, when I used them for computational
        social science research at UC Berkeley. My background spans physics, sociology, and technology
        management (I kinda liked school).
      </p>

      <p>
        I thrive by doing hard things. Recently spent three months at Recurse Center to push my programming
        abilities, learn systems programming, and get into Rust – you can read about that experience{" "}
        <a href="https://...">here</a>.
      </p>

      <p>
        Outside of work: surfing, running, hiking… Find out how I think on my{" "}
        <a href="/pages/portfolio">blog</a>{" "}or{" "}
        <a href="https://...">Substack</a>, see my{" "}
        <a href="/pages/portfolio">portfolio</a>, and check my{" "}
        <a href="/cv.pdf">CV</a>{" "}or{" "}
        <a href="https://...">LinkedIn</a>.
      </p>

      <p>Contact me via DMs on LinkedIn, Twitter, or email (address in CV).</p> */}
    </main>
  );
}
