// src/components/PostCard.jsx
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const to = `/blog/${post.meta.slug}`;

  return (
    <Link
      to={to}
      className="block group focus:outline-none"
      aria-label={`Open post: ${post.meta.title}`}
    >
      <article className="border rounded-2xl p-4 transition
                          group-hover:shadow group-focus-visible:ring-2
                          group-focus-visible:ring-blue-500">
        <h2 className="text-xl font-semibold">{post.meta.title}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {new Date(post.meta.date).toLocaleDateString()}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {post.meta.excerpt}
        </p>
      </article>
    </Link>
  );
}
