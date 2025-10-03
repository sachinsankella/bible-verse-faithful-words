import React, { useState } from "react";

type Verse = { bookname: string; chapter: string; verse: string; text: string };

export default function SpecificVerse() {
  const [query, setQuery] = useState("John 3:16");
  const [verse, setVerse] = useState<Verse | null>(null);

  async function getVerse() {
    const res = await fetch(
      `https://labs.bible.org/api/?passage=${encodeURIComponent(
        query
      )}&type=json`
    );
    const data: Verse[] = await res.json();
    setVerse(data[0]);
  }

  return (
    <div>
      <h2 className="font-semibold mb-2">Find Specific Verse</h2>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={getVerse}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Fetch
        </button>
      </div>
      {verse && (
        <p className="mt-3 italic">
          “{verse.text}” — {verse.bookname} {verse.chapter}:{verse.verse}
        </p>
      )}
    </div>
  );
}
