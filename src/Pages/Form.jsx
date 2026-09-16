export default function Form({
  amount,
  setAmount,
  amountType,
  setAmountType,
  expenseType,
  setExpenseType,
  date,
  setDate,
  isClick,
  setisClick,
  setallTransactions,
  setIsEdit,
  isEdit,
  editId,
  setEditId
}) {
  // const formFields = [
  //   {
  //     id: "amount",
  //     label: "Amount",
  //     type: "number",
  //     placeholder: "Enter Amount",
  //     icon: "fa-solid fa-indian-rupee",
  //     inputType: "input",
  //   },

  //   {
  //     id: "type",
  //     label: "Income or Expense",
  //     placeholder: "Select Type",
  //     icon: "fa-solid fa-money-bill-transfer",
  //     inputType: "select",
  //     options: [
  //       {
  //         name: "Income",
  //         icon: "fa-solid fa-arrow-trend-up",
  //       },
  //       {
  //         name: "Expense",
  //         icon: "fa-solid fa-arrow-trend-down",
  //       },
  //     ],
  //   },

  //   {
  //     id: "category",
  //     label: "Category",
  //     placeholder: "Select Expense Category",
  //     icon: "fa-solid fa-indian-rupee",
  //     inputType: "select",
  //     options: [
  //       {
  //         name: "Groceries",
  //         icon: "fa-solid fa-basket-shopping",
  //       },
  //       {
  //         name: "Food",
  //         icon: "fa-solid fa-utensils",
  //       },
  //       {
  //         name: "Bills",
  //         icon: "fa-solid fa-file-invoice-dollar",
  //       },
  //       {
  //         name: "Transport",
  //         icon: "fa-solid fa-car",
  //       },
  //       {
  //         name: "Medicine",
  //         icon: "fa-solid fa-pills",
  //       },
  //       {
  //         name: "Hospital",
  //         icon: "fa-solid fa-hospital",
  //       },
  //       {
  //         name: "Flowers",
  //         icon: "fa-solid fa-seedling",
  //       },
  //       {
  //         name: "Shopping",
  //         icon: "fa-solid fa-bag-shopping",
  //       },
  //       {
  //         name: "Education",
  //         icon: "fa-solid fa-book",
  //       },
  //       {
  //         name: "Household",
  //         icon: "fa-solid fa-house",
  //       },
  //       {
  //         name: "Gave Money",
  //         icon: "fa-solid fa-hand-holding-dollar",
  //       },
  //       {
  //         name: "Other",
  //         icon: "fa-solid fa-ellipsis",
  //       },
  //     ],
  //   },

  //   {
  //     id: "date",
  //     label: "Date",
  //     placeholder: "Select Date",
  //     icon: "fa-regular fa-calendar",
  //     type: "date",
  //     inputType: "input",
  //   },
  // ];

  const transaction = {
    id: Date.now(),
    amount: Number(amount),
    amountType: amountType,
    category: amountType === "Expense" ? expenseType : "",
    date: date,
  };
  function onSaveAmount(transaction) {
    
      if (amount === "" || amountType === "" || date === "") {
        alert("Fill all the details!");
        return;
      }

      if (amountType === "Expense" && expenseType === "") {
        alert("Please select an expense category!");
        return;
      }
       if(isEdit){
        setallTransactions((prev)=>prev.map((exp)=>exp.id===editId?transaction:exp))
       }
       else{

         setallTransactions((prev) => [...prev, transaction]);
       }

      setAmount("");
      setAmountType("");
      setExpenseType("");
      setDate("");
      setIsEdit(false);
      setisClick(false);
      setEditId(null)
    
  }

  return (
    <div className="bg-primary/30 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center h-full bg-amber-300">
      <div
        className="Collection w-[92%] gap-2 shadow-4xl text-warm-gray
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 padding   h-auto bg-cream flex flex-col justify-between items-center rounded-xl"
      >
        <div className="form-handle flex flex-col w-full gap-0.5">
          <label className="font-semibold text-sm font-google text-dark-green">Amount</label>
          <div className="flex w-full border-beige border-4  items-baseline text-warm-gray text-sm  rounded-lg px-2">
            <div className="w-auto flex justify-start items-center">
              <i className="fa-solid fa-indian-rupee  text-warm-gray text-small-med"></i>
            </div>
            <input
              className="w-full text-warm-gray border-0 outline-0 px-1 py-1 text-medium font-semibold h-full flex items-center"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="form-handle flex flex-col w-full gap-0.5">
          <label className="font-semibold text-sm font-google text-dark-green">
            Income or expense
          </label>
          <div className="flex w-full border-beige border-4   items-baseline bg-cream text-warm-gray text-sm  rounded-lg px-2">
            <div className="w-auto flex justify-start items-center ">
              <i className="fa-solid fa-indian-rupee  text-warm-gray text-small-med"></i>
            </div>
            <select
              value={amountType}
              onChange={(e) => setAmountType(e.target.value)}
              className="w-full border-0 outline-0 px-1 py-1 text-medium font-semibold h-full flex items-center"
              type="number"
              placeholder="Enter Amount"
            >
              <option className="text-primary" value="">
                Select Category
              </option>
              <option value="Income">Income</option>

              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>
        {amountType === "Expense" ? (
          <div className="form-handle flex flex-col w-full gap-0.5">
            <label className="font-semibold text-sm font-google text-dark-green">
              Category
            </label>
            <div className="flex w-full border-beige border-4  items-baseline  bg-cream text-warm-gray text-sm  rounded-lg px-2">
              <div className="w-auto flex justify-start items-center ">
                <i className="fa-solid fa-table-list  text-warm-gray text-small-med"></i>
              </div>
              <select
                className="w-full border-0 outline-0 px-1 py-1 text-medium font-semibold h-full flex items-center"
                type="number"
                placeholder="Enter Amount"
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
              >
                <option className="text-dark-text" value="">
                  Select Expense Category
                </option>
                <option value="Groceries" >Groceries</option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Transport">Transport</option>
                <option value="Medicine">Medicine</option>
                <option value="Hospital">Hospital</option>
                <option value="Flowers">Flowers</option>
                <option value="Shopping">Shopping</option>
                <option value="Education">Education</option>
                <option value="Household">Household</option>
                <option value="Gave Money">Gave Money</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="form-handle flex flex-col w-full gap-0.5 ">
          <lable className="font-semibold text-sm font-google text-dark-green">Date</lable>
          <div className="flex w-full border-beige border-4  bg-cream  items-baseline text-warm-gray text-sm  rounded-lg px-2">
            <div className="w-auto flex justify-start items-center">
              <i className="fa-regular fa-calendar text-warm-gray text-small-med"></i>
            </div>
            <input
              className=" w-full border-0 outline-0 px-1 py-1 text-medium font-semibold h-full flex items-center"
              type="date"
              placeholder="Select Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={() => onSaveAmount(transaction)}
          className="w-full p-2 outline-0 hover:bg-green-800 bg-dark-green text-cream font-bold rounded-xl"
        >
          {isEdit
            ? "Update Expense"
            : amountType === "Expense"
              ? "Add Expenses"
              : "Add Income"}
        </button>
        <button
          onClick={() => setisClick(!isClick)}
          className="w-full p-1 outline-0 hover:bg-beige hover:text-warm-gray bg-dark-cream border-4 border-beige text-warm-gray font-bold rounded-xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
