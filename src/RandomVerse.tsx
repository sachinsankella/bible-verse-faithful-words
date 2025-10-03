import React, { useState } from "react";

type Verse = { bookname: string; chapter: string; verse: string; text: string };

export default function RandomVerse() {
  const [verse, setVerse] = useState<Verse | null>(null);

  async function getRandom() {
    const res = await fetch(
      "https://labs.bible.org/api/?passage=random&type=json"
    );
    const data: Verse[] = await res.json();
    setVerse(data[0]);
  }

  return (
    <div>
      <h2 className="font-semibold mb-2">Random Verse</h2>
      <button
        onClick={getRandom}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Get Random Verse
      </button>
      {verse && (
        <p className="mt-3 italic">
          “{verse.text}” — {verse.bookname} {verse.chapter}:{verse.verse}
        </p>
      )}
    </div>
  );
}
