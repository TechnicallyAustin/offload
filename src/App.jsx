import "./App.css";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <div id="App" className="w-full bg-black h-screen">
        <h1 className="text-white h-screen flex justify-center items-center">APP Template</h1>

      </div>
    </NextUIProvider>
  );
}

export default App;
