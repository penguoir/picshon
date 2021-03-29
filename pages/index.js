import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function IndexPage() {
  const [word, setWord] = useState('Press "Get New Word" to start.');

  const _getNewWord = async () => {
    const url = "/api/word";
    const data = await axios.get(url);
    setWord(data.data);
  };

  return (
    <>
      <div className="container">
        <div className="text-wrapper">
          <h1 className="word">{word}</h1>

          <button className="button" onClick={_getNewWord}>
            Get a new word
          </button>
        </div>
      </div>

    <style jsx global>{`
      body { margin: 0 }
      .button {
        background-color: rgb(16, 185, 129);
        color: white;
        outline: 0;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        font-weight: 600;
        line-height: 24px;
        padding: 8px 16px;
        font-size: 16px;
      }

      .button:hover {
        background-color: rgb(4, 120, 87);
      }

      .container {
        max-width: 800px;
        width: 95vw;
        margin: 0 auto;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        text-align: center
      }
    `}</style>
    </>
  );
};
