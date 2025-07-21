import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
