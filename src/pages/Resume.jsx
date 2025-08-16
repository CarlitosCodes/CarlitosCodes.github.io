// src/pages/Resume.jsx
import Timeline from "../components/Timeline";

const entries = [
  {
    year: "2022 —",
    title: "The Walt Disney Company",
    logo: "/logos/Disney.jpeg",
    body: "I work here now",
    points: ["Data", "Rides"],
  },
  {
    year: "2021 — 2022",
    title: "Nikola Motors",
    logo:  "/logos/Nikola2.svg",
    body: "I worked here for a while",
    points: ["Troubleshooting battery line", "Developed Plant wide SCADA system", "More data"],
  },
  {
    year: "2020 — 2021",
    title: "ROI Engineering",
    logo:  "/logos/ROI.png",
    body: "I become a Controls Engineer",
    points: ["PLCs", "SCADA", "Databases"],

  },
];

export default function Resume() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* shared centered container for both title and timeline */}
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8 text-center text-3xl md:text-4xl font-bold">Resume</h1>

        <Timeline entries={entries} />
      </div>
    </main>
  );
}


