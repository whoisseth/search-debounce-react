import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);
  return (
    <div className="App">
      <h1>VZTY</h1>
      <input
        placeholder="Debounced search"
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>{result}</h2>
    </div>
  );
}
