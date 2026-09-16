
export default function Home({allTransactions,expensesData}) {
const income=allTransactions.filter((trans)=>trans.amountType==="Income").reduce((acc, trans) => acc + trans.amount, 0);
const spent=allTransactions.filter((trans)=>trans.amountType==="Expense").reduce((acc, trans) => acc + trans.amount, 0);
const curDate=new Date().toISOString().split('T')[0]
const spendPer= income>0? Math.min((spent / income) * 100, 100)
  : 0;
console.log(spendPer)
return (
    <div className="home  padding space-y-3 flex flex-col ">
      <div className="date w-full  flex items-center ">
        <p className="small-txt">{curDate}</p>
        <i className="fa-regular fa-calendar text-primary small-icon ml-auto"></i>
      </div>
      <div className="grid-2 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="flex flex-col w-full col-span-2 rounded-xl px-2 py-3 shadow-xl border-2 border-beige">
          <p className="small-txt text-dark-green">Total Amount</p>
          <div className="med-txt text-dark-text flex  items-center">
            <i className="fa-solid fa-indian-rupee small-icon text-dark-green"></i>
            <p className="med2-txt text-dark-green ">{income}</p>
          </div>
          <div className="flex w-full  items-center justify-between gap-2">
          <div className="outer-fill w-full bg-light-sage h-3 rounded-2xl">
            <div style={{width:`${spendPer}%`}} className="inner bg-dark-green w-[spendPer%] rounded-2xl h-full"></div>
          </div>
          <p className="small-txt text-dark-green">{spendPer}%</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-1.5 bg-red-100 rounded-xl p-2 shadow-xl border-2 border-red-200">
          <p className="small-txt text-dark-green">Total Spent</p>
          <div className="small-txt text-dark-text flex justify-center items-center ">
            <i className="fa-solid fa-indian-rupee  small2-icon"></i>
            <p className="med-txt text-black ">{spent}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-1.5 bg-light-sage rounded-xl p-2 shadow-xl border-2 border-green-200">
          <p className="small-txt text-dark-green">Money In Hand</p>
          <div className="small-txt text-dark-text flex justify-center items-center">
            <i className="fa-solid fa-indian-rupee  small2-icon"></i>
            <p className="med-txt text-black ">{income-spent}</p>
          </div>
        </div>
      </div>
      <p className="font-google font-bold text-sm text-dark-green ">Expenses Summary</p>
      <div className="summary w-full flex flex-wrap items-center   gap-2 py-3">
        {expensesData.map((item) => (
          <div
            key={item.category}
            className="w-1/4 bg-beige rounded-xl flex flex-col items-center justify-center py-2 gap-y-0.5"
          >
            <p style={{ backgroundColor: item.color }} className=" w-10 h-10  rounded-full  flex justify-center items-center">
              <i className={`${item.icon} small-icon text-dark-text`}></i>
            </p>

            <p className="small-txt text-dark-green">{item.category}</p>

            <p className="text-xs font-bold font-poppins text-dark-green">
              ₹{item.amount.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
