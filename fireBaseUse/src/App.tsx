import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase/firebaseConfig";
import SignupForm from "./pages/SignupForm";

function App() {
  const [user, setUser] = useState([]);
  const userRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);

      const filterData = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setUser(filterData);
    };
    getUsers();
  }, []);

  return (
    <>
      <SignupForm />
      {user && user.map((user) => <p>{user.email}</p>)}
    </>
  );
}

export default App;
