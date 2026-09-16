import { NavLink } from "react-router-dom";

export default function Header({setisClick}) {
  return (
    <nav className="sticky top-0 z-50 header w-full h-20 bg-dark-green flex justify-between padding items-center">

  <div className="flex gap-2 justify-start items-center">
    <i className="fa-solid fa-seedling text-xl text-cream"></i>
    <p className="header-txt text-cream">SpendWise</p>
  </div>

  <nav className="hidden lg:flex padding justify-between items-center w-2/3">

    <NavLink to="/" >
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "flex justify-center items-center w-30 h-10 gap-2 rounded-2xl bg-green-900"
              : "flex justify-center items-center w-30 h-10 gap-2 rounded-xl"
          }
        >
          <i className="fa-solid fa-house text-cream nav-icon"></i>
          <p className="small-txt text-cream font-semibold">Home</p>
        </span>
      )}
    </NavLink>

    <NavLink to="/expenses" >
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "flex justify-center items-center w-30 h-10 gap-2 rounded-2xl bg-green-900"
              : "flex justify-center items-center w-30 h-10 gap-2 rounded-xl"
          }
        >
          <i className="fa-solid fa-receipt text-cream nav-icon"></i>
          <p className="small-txt text-cream font-semibold">Expenses</p>
        </span>
      )}
    </NavLink>

    <NavLink to="/summary" >
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "flex justify-center items-center w-30 h-10 gap-2 rounded-2xl bg-green-900"
              : "flex justify-center items-center w-30 h-10 gap-2 rounded-xl"
          }
        >
          <i className="fa-solid fa-chart-line text-cream nav-icon"></i>
          <p className="small-txt text-cream font-semibold">Summary</p>
        </span>
      )}
    </NavLink>

    <NavLink to="/settings" >
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "flex justify-center items-center w-30 h-10 gap-2 rounded-2xl bg-green-900"
              : "flex justify-center items-center w-30 h-10 gap-2 rounded-xl"
          }
        >
          <i className="fa-solid fa-gear text-cream nav-icon"></i>
          <p className="small-txt text-cream font-semibold">Settings</p>
        </span>
      )}
    </NavLink>

    <button
      onClick={() => setisClick(true)}
      className="w-15 h-15 rounded-full bg-dark-green hover:cursor-pointer flex justify-center items-center outline-0 shadow-[0_8px_25px_rgba(0,0,0,0.2)] border-6 border-beige hover:bg-dark-text"
    >
      <i className="fa-solid fa-plus text-beige nav-icon"></i>
    </button>

  </nav>
</nav>
  );
}
