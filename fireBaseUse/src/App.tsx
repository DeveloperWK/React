import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./Firebase/firebaseConfig";
import AddUser from "./pages/AddUser";
import Users from "./pages/Users";

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
    console.log("users", getUsers());
  }, []);

  return (
    <>
     <Users />
      <AddUser />
    </>
  );
}

export default App;
