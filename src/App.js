import { useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

const delay = 2;

function App() {
  /**
   * Possible values for permission
   * - default
   * - granted
   * - denied
   */
  const permission = Notification.permission;

  const handleCLick = useCallback(() => {
    setTimeout(() => {
      new Notification("Hi there!");
    }, delay * 1000);
  }, []);

  useEffect(() => {
    if (["default", "denied"].includes(permission)) {
      Notification.requestPermission().then((result) => {
        console.log(result);
      });
    }
  }, [permission]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React PWA Example</p>
        <ul>
          <li>PUSH API Permission: {permission}</li>
          <li>
            Send test notification({delay}s delay):{" "}
            <button onClick={handleCLick}>Send</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
