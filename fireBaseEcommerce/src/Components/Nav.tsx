import { signOut } from "firebase/auth";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.config";
import { useAuth } from "../Hooks/useAuth";

const Nav = () => {
  const { isLoggedIn, role } = useAuth();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="text-2xl font-bold">My App</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        {!isLoggedIn && (
          <Navbar.Link>
            <Link to={"/signup"}>Sign Up</Link>
          </Navbar.Link>
        )}

        {isLoggedIn && role === "admin" && (
          <Navbar.Link>
            <Link to={"/add-product"}>Add Products</Link>
          </Navbar.Link>
        )}
        {isLoggedIn && role === "admin" && (
          <Navbar.Link>
            <Link to={"/all-products"}>All Products</Link>
          </Navbar.Link>
        )}
        <Navbar.Link>
          <Link to={"/users"}>Users</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/cart"}>Cart</Link>
        </Navbar.Link>
        {!isLoggedIn && (
          <Navbar.Link>
            <Link to={"/login"}>Login</Link>
          </Navbar.Link>
        )}

        {isLoggedIn && (
          <Navbar.Link>
            <Button
              gradientMonochrome="success"
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </Button>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
