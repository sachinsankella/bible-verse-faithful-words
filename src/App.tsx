import React from "react";
import RandomVerse from "./RandomVerse";
import SpecificVerse from "./SpecificVerse";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Bible Verse App</h1>
        <RandomVerse />
        <div className="my-6 border-t"></div>
        <SpecificVerse />
      </div>
    </div>
  );
}

export default App;
