import { Navbar } from "flowbite-react";
import { Link } from "react-router";

const Nav = () => {
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
        <Navbar.Link>
          <Link to={"/signup"}>Sign Up</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/product"}>Products</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/addproduct"}>Add Products</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/users"}>Users</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/cart"}>Cart</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/login"}>Login</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
