import { NavLink } from "react-router-dom";

const Navega = ({ to, text }) => {
  return (
    <li className="mx-1 w-28 text-center">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-green-600 text-white" : "text-green-400"
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Navega;
