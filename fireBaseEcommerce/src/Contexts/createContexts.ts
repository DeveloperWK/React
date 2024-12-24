import { createContext } from "react";

// Create a context with an empty object as the default value
export const AuthContext = createContext({
  currentUser: null,
  isLoggedIn: false,
  isLoading: true,
  role: "",
});
