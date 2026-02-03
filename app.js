import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Count se je spremenil:", count);

    if (count === 5) {
      setMessage("Dosegel si 5! 🔥");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div className="app">
      <h1>React 77 – useEffect z dependency</h1>
      <p> Trenutni count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Povečaj</button>
      <button onClick={() => setCount(count - 1)}>Zmanjšaj</button>

      {message && <h2 className="message">{message}</h2>}
    </div>
  );
}
