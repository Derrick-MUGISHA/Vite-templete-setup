import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";


import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* Logos */}
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-16 h-16 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-16 h-16 hover:scale-110 transition-transform"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Card */}
      <Card className="w-96 bg-white shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Counter Example</CardTitle>
          <CardDescription>
            A simple counter using Shadcn UI Card and Button components.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-gray-700 text-lg">Count: {count}</p>
          <Button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Increment
          </Button>
        </CardContent>

        <CardFooter className="text-sm text-gray-500 flex justify-center">
          Edit <code>src/App.jsx</code> and save to test HMR.
        </CardFooter>
      </Card>

      <p className="mt-8 text-sm text-gray-500">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
