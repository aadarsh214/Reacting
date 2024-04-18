import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(false);
  return (
    <div className="p-4  font-semibold">
      <h1>{score.toString()}</h1>
      <button
        onClick={() => setScore(!score)}
        className={`px-2 py2 ${score ? "bg-purple-300" : "bg-red-800"} rounded`}
      >
        Click me
      </button>
    </div>
  );
};

export default Score;
