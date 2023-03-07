import { Link } from "react-router-dom";
// ^^^^^^^^^^^^ import!

export default function Nav() {
  return (
    <div>
      <ul className="primary-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/bio"}>Bio</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/testimonials"}>Testimonials</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"questions"}>Questions</Link>
      </ul>
    </div>
  );
}
