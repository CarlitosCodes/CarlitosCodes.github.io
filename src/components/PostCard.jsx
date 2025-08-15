import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article className="border rounded-2xl p-4 hover:shadow transition">
      <h2 className="text-xl font-semibold">
        <Link to={`/blog/${post.meta.slug}`}>{post.meta.title}</Link>
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{new Date(post.meta.date).toLocaleDateString()}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{post.meta.excerpt}</p>
    </article>
  );
}
