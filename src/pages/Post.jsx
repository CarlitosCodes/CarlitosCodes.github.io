import { useParams, Link } from "react-router-dom";

const modules = import.meta.glob("../posts/*.mdx", { eager: true });
const bySlug = Object.fromEntries(
  Object.values(modules).map(m => [m.meta.slug, m])
);

export default function Post() {
  const { slug } = useParams();
  const mod = bySlug[slug];

  if (!mod) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="mt-2">That post doesn’t exist.</p>
        <Link className="underline" to="/blog">Back to blog</Link>
      </main>
    );
  }

  const MDX = mod.default;
  return (
    <main className="prose prose-slate dark:prose-invert max-w-3xl mx-auto p-6">
      <h1>{mod.meta.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(mod.meta.date).toLocaleDateString()}
      </p>
      <MDX />
      <p className="mt-8">
        <Link className="underline" to="/blog">← Back to blog</Link>
      </p>
    </main>
  );
}

