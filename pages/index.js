import React, { useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const [word, setWord] = useState('Press "Get New Word" to start.');

  const _getNewWord = async () => {
    const url = "/api/word";
    const data = await axios.get(url);
    setWord(data.data);
  };

  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl mb-4">{word}</h1>

        <button
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={_getNewWord}
        >
          Get a new word
        </button>
      </div>
    </div>
  );
}
