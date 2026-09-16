import { useState } from "react";
export default function Expenses({
  setIsEdit,
  setAmount,
  setAmountType,
  setExpenseType,
  setDate,
  setisClick,
  expensesData,
  spending,
  setallTransactions,
  setEditId
}) {
  const [filterVal, setfilterVal] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  expensesData = expensesData.filter((exp) =>
    exp.category.toLowerCase().includes(searchVal.toLowerCase()),
  );
  expensesData =
    filterVal === "All"
      ? expensesData
      : expensesData.filter((exp) => exp.category === filterVal);
  function onEditExpense(exp) {
    setIsEdit(true);
    setEditId(exp.id)
    setisClick(true);
    setAmount(exp.amount);
    setAmountType(exp.amountType);
    setExpenseType(exp.category);
    setDate(exp.date);

  }
  function onDeleteExpense(id) {
    setallTransactions((prev) => prev.filter((exp) => exp.id !== id));
  }
  return (
    <div className="container  min-w-full padding flex flex-col gap-2 items-center justify-center">
      <div className="flex   items-center w-full border-beige border-2 bg-cream text-primary text-sm rounded-lg px-2">
        <i className="text-black fa-solid fa-magnifying-glass text-small-med"></i>
        <input
          type="text"
          className="h-full p-2 outline-0 text-medium font-semibold"
          value={searchVal}
          placeholder="Search expenses.."
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <div className="flex  justify-between items-center w-full ">
        <button
          onClick={() => setfilterVal("All")}
          className="w-[20%] hover:cursor-pointer  p-1.5 h-full border-2 border-dark-text bg-dark-green text-cream text-small-med font-semibold rounded-xl hover"
        >
          All
        </button>
        <select
          onChange={(e) => setfilterVal(e.target.value)}
          value={filterVal}
          type="text"
          className=" w-[75%] h-full p-2   hover:cursor-pointer outline-0 text-medium font-semibold border-beige border-2 rounded-xl"
          placeholder="Search expenses.."
        >
          {" "}
          <option
            className="font-semibold text-small-med text-dark-text "
            value=""
          >
            Select Sort value
          </option>
          {spending.map((exp) => {
            return (
              <option
                className="font-semibold text-small-med text-dark-text "
                value={exp.name}
              >
                {exp.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="outer min-w-full  flex flex-col items-center justify-between">
        {expensesData.map((exp) => {
          return (
            <div className="border-b-2 min-w-full border-beige  flex items-center justify-between py-2">
            <p style={{ backgroundColor: exp.color }} className=" w-10 h-10  rounded-full  flex justify-center items-center">
              <i className={`${exp.icon} small-icon text-dark-text`}></i>
            </p>
              <div className=" flex flex-col items-start justify-center w-1/4 ">
                <p className="text-sm font-semibold text-dark-text">
                  {exp.category}
                </p>
                <p className="small-txt">{exp.date}</p><h1></h1>
              </div>
              <div className="flex justify-start items-center  w-1/5">
                <p className=" h-full  font-semibold text-sm text-primary ">
                  &#8377;{exp.amount}
                </p>
              </div>
              <div className="btns   flex items-center justify-between gap-2 ">
                <button
                  onClick={() => onEditExpense(exp)}
                  className="outline-0 border-0 text-lg w-10 h-10 rounded-full hover:cursor-pointer hover:bg-beige flex justify-center items-center  "
                >
                  <i class="fa-regular fa-pen-to-square text-lg font-bold text-dark-green"></i>
                </button>
                <button
                  onClick={() => onDeleteExpense(exp.id)}
                  className="outline-0 border-0 text-lg w-10 h-10 rounded-full hover:cursor-pointer hover:bg-beige  flex justify-center items-center"
                >
                  <i class="fa-regular fa-trash-can text-lg font-bold text-red-700 "></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
