import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./Firebase/firebaseConfig";
import SignupForm from "./pages/SignupForm";

function App() {
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
      return filterData;
    };

    getUsers();
  }, []);

  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
