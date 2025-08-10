export default function Links() {
  const items = [
    { label: "GitHub", href: "https://github.com/CarlitosCodes" },
    { label: "Twitter/X", href: "https://x.com/..." },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
  ];
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Links</h1>
      <ul className="space-y-3">
        {items.map(i => (
          <li key={i.label}>
            <a className="block border rounded-xl p-4 hover:shadow" href={i.href} target="_blank" rel="noreferrer">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
