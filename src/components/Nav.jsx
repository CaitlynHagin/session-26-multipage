import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <ul className="primary-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/bio"}>Bio</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </ul>
    </div>
  )
}
