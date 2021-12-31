import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const delay = 10;

function App() {
  const [error, setError] = useState(null);
  /**
   * Possible values for permission
   * - default
   * - granted
   * - denied
   */
  const permission = Notification.permission;

  const sendNotification = () => {
    console.log("notification requested");
    try {
      const notification = new Notification("Hi there!");
      console.log(notification);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    try {
      if (["default", "denied"].includes(permission)) {
        Notification.requestPermission().then((result) => {});
      } else {
        let counter = 0;

        const interval = setInterval(() => {
          sendNotification();
          counter++;

          if (counter === 5) {
            clearInterval(interval);
          }
        }, delay * 1000);
      }
    } catch (err) {
      setError(err);
    }
  }, [permission]);

  return (
    <div className="App">
      <header className="App-header">
        {error && <span>Error: {error}</span>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>React PWA Example</p>
        <ul>
          <li>PUSH API Permission: {permission}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
