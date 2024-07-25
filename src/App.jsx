import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("yellow")}
            className=" outline-none px-3 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("blue")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("pink")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("gray")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("black")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>

          <button
            onClick={() => setColor("orange")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>

          <button
            onClick={() => setColor("olive")}
            className=" outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
