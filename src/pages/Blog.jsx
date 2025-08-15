import PostCard from "../components/PostCard";

// Import all MDX modules eagerly so we can read `meta`
const modules = import.meta.glob("../posts/*.mdx", { eager: true });

// Normalize into an array like [{meta, Component}, ...]
const posts = Object.values(modules).map(m => ({
  meta: m.meta,
  Component: m.default
}))
// Sort newest first
.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-700 dark:text-gray-300">Documenting my ML Engineer journey.</p>

      <div className="mt-6 grid gap-4">
        {posts.map(p => <PostCard key={p.meta.slug} post={p} />)}
      </div>
    </main>
  );
}
