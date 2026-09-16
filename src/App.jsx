import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Expenses from "./Pages/Expenses";
import Settings from "./Pages/Settings";
import Summary from "./Pages/Summary";
import Form from "./Pages/Form";
import SplashScreen from "./SplashScreen";

import { useEffect, useState } from "react";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(()=>{
     const timer=setTimeout(()=>{
      setShowSplash(false)
     },4000)
     return ()=> clearTimeout(timer)
  },[])
 
  const [amount, setAmount] = useState("");
  const [amountType, setAmountType] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isClick, setisClick] = useState(false);
  const [allTransactions, setallTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("allTransactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  useEffect(() => {
    localStorage.setItem("allTransactions", JSON.stringify(allTransactions));
  }, [allTransactions]);
  const spending = [
    {
      name: "Groceries",
      icon: "fa-solid fa-basket-shopping",
      bg: "#86EFAC",
    },
    {
      name: "Food",
      icon: "fa-solid fa-utensils",
      bg: "#FDBA74",
    },
    {
      name: "Bills",
      icon: "fa-solid fa-file-invoice-dollar",
      bg: "#93C5FD",
    },
    {
      name: "Transport",
      icon: "fa-solid fa-car",
      bg: "#C4B5FD",
    },
    {
      name: "Medicine",
      icon: "fa-solid fa-pills",
      bg: "#FCA5A5",
    },
    {
      name: "Hospital",
      icon: "fa-solid fa-hospital",
      bg: "#F9A8D4",
    },
    {
      name: "Flowers",
      icon: "fa-solid fa-seedling",
      bg: "#5EEAD4",
    },
    {
      name: "Shopping",
      icon: "fa-solid fa-bag-shopping",
      bg: "#F0ABFC",
    },
    {
      name: "Education",
      icon: "fa-solid fa-book",
      bg: "#FDE047",
    },
    {
      name: "Household",
      icon: "fa-solid fa-house",
      bg: "#67E8F9",
    },
    {
      name: "Gave Money",
      icon: "fa-solid fa-hand-holding-dollar",
      bg: "#FDA4AF",
    },
    {
      name: "Other",
      icon: "fa-solid fa-ellipsis",
      bg: "#CBD5E1",
    },
  ];
  const expensesData = allTransactions
    .filter((trans) => trans.amountType === "Expense")
    .map((trans) => {
      const categoryData = spending.find(
        (item) => item.name === trans.category,
      );

      return {
        ...trans,
        icon: categoryData?.icon,
        color: categoryData?.bg,
      };
    });
 if(showSplash){
    return <SplashScreen/>
  }
  return (
    <div className="main-grid w-screen h-screen flex flex-col box-border">
      
      <Header setisClick={setisClick} />

      <main className="content  w-full flex-1 min-h-0 overflow-y-auto bg-cream pb-24">
        {isClick ? (
          <Form
            isClick={isClick}
            setisClick={setisClick}
            setallTransactions={setallTransactions}
            spending={spending}
            amount={amount}
            setAmount={setAmount}
            amountType={amountType}
            setAmountType={setAmountType}
            expenseType={expenseType}
            setExpenseType={setExpenseType}
            date={date}
            setDate={setDate}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setEditId={setEditId}
            editId={editId}
          />
        ) : (
          ""
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                allTransactions={allTransactions}
                expensesData={expensesData}
              />
            }
          />
          <Route
            path="/expenses"
            element={
              <Expenses
                setAmount={setAmount}
                setAmountType={setAmountType}
                setExpenseType={setExpenseType}
                setDate={setDate}
                isClick={isClick}
                setisClick={setisClick}
                spending={spending}
                expensesData={expensesData}
                allTransactions={allTransactions}
                setallTransactions={setallTransactions}
                setIsEdit={setIsEdit}
                setEditId={setEditId}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/summary"
            element={<Summary expensesData={expensesData} />}
          />
        </Routes>
      </main>

      <Footer setisClick={setisClick} />
    </div>
  );
}

export default App;
