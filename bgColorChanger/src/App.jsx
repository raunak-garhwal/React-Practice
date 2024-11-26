import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className={`h-screen flex justify-center items-center`}
      style={{ backgroundColor: color }}
    >
      <div
        id="colors-tab"
        className="bg-white fixed bottom-5 flex flex-wrap items-center justify-center rounded-3xl p-1"
      >
        <button
          onClick={() => setColor("red")}
          className="px-3 py-2 m-2 font-bold bg-red-600 text-white rounded-2xl"
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="px-5 py-2 m-2 font-bold bg-yellow-400 text-black rounded-2xl"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-5 py-2 m-2 font-bold bg-purple-600 text-white rounded-2xl"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-5 py-2 m-2 font-bold bg-green-600 text-white rounded-2xl"
        >
          Green
        </button>
        <button
          onClick={() => setColor("orange")}
          className="px-5 py-2 m-2 font-bold bg-orange-600 text-white rounded-2xl"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("gray")}
          className="px-5 py-2 m-2 font-bold bg-gray-700 text-white rounded-2xl"
        >
          Grey
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-5 py-2 m-2 font-bold bg-black text-white rounded-2xl"
        >
          Black
        </button>
        <button
          onClick={() => setColor("indigo")}
          className="px-5 py-2 m-2 font-bold bg-indigo-900 text-white rounded-2xl"
        >
          Indigo
        </button>
      </div>
    </div>
  );
}

export default App;
