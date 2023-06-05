import "./App.css";
import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
