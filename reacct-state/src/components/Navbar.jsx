import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const getClass = (path) =>
    `px-4 py-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-blue-600 hover:bg-blue-100"
    }`;

  return (
    <div className="flex justify-center gap-4 mb-6">

      <Link to="/" className={getClass("/")}>
        Home
      </Link>

      <Link to="/dashboard" className={getClass("/dashboard")}>
        Dashboard
      </Link>

    </div>
  );
}

export default Navbar;
