
import { NavLink } from "react-router-dom";

export default function Footer({setisClick}) {

  return (
    <nav className="lg:hidden padding flex justify-between items-center fixed bottom-0 left-0 w-full z-50 bg-cream text-cream h-20 shadow-[0_8px_25px_rgba(0,0,0,0.2)]">

<NavLink to="/">
  {({ isActive }) => (
    <span className="rounded-cont">
      <i className="fa-solid fa-house text-dark-green nav-icon"></i>
      <p
        className={
          isActive
            ? "underline small-txt text-dark-green font-semibold"
            : "small-txt text-dark-green font-semibold"
        }
      >
        Home
      </p>
    </span>
  )}
</NavLink>

<NavLink to="/expenses">
  {({ isActive }) => (
    <span className="rounded-cont">
      <i className="fa-solid fa-receipt text-dark-green nav-icon"></i>
      <p
        className={
          isActive
            ? "underline small-txt text-dark-green font-semibold"
            : "small-txt text-dark-green font-semibold"
        }
      >
        Expenses
      </p>
    </span>
  )}
</NavLink>
 <button
    onClick={() => setisClick(true)}
    className="w-18 h-18 rounded-full hover:cursor-pointer bg-dark-green flex justify-center items-center absolute left-1/2 -translate-x-1/2 bottom-10 z-50 outline-0 shadow-[0_8px_25px_rgba(0,0,0,0.2)] border-8 border-beige hover:bg-dark-text"
  >
    <i className="fa-solid fa-plus text-beige nav-icon"></i>
  </button>

<NavLink to="/summary">
  {({ isActive }) => (
    <span className="rounded-cont">
      <i className="fa-solid fa-chart-line text-dark-green nav-icon"></i>
      <p
        className={
          isActive
            ? "underline small-txt text-dark-green font-semibold"
            : "small-txt text-dark-green font-semibold"
        }
      >
        Summary
      </p>
    </span>
  )}
</NavLink>

<NavLink to="/settings">
  {({ isActive }) => (
    <span className="rounded-cont">
      <i className="fa-solid fa-gear text-dark-green nav-icon"></i>
      <p
        className={
          isActive
            ? "underline small-txt text-dark-green font-semibold"
            : "small-txt text-dark-green font-semibold"
        }
      >
        Settings
      </p>
    </span>
  )}
</NavLink>

</nav>
  );
}

