import DailyPieChart from "../DailyPieChart";
import { useState } from "react";
export default function Summary({ expensesData }) {
  const [selectedDate, setSelectedDate] = useState("");
  const dailyExpenses = expensesData.filter((exp) => exp.date === selectedDate);
  const totalSpent = dailyExpenses.reduce((acc, exp) => acc + exp.amount, 0);
  return (
    <div className="container  min-w-full padding flex flex-col gap-2 items-center justify-center">
      <div className="form-handle flex flex-col w-full gap-0.5">
        <label className="font-semibold text-sm font-google">Enter Date</label>
        <div className="flex w-full border-beige border-2 bg-cream text-primary text-sm rounded-lg px-2">
          <div className="w-auto flex justify-start items-center pr-2">
            <i className="fa-regular fa-calendar text-black text-small-med"></i>
          </div>
          <input
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border-0 outline-0 px-1 py-2 text-medium font-semibold h-full flex items-center"
            type="date"
          />
        </div>
      </div>
      {dailyExpenses.length > 0 ? (
        <>
          <DailyPieChart dailyExpenses={dailyExpenses} />
          {dailyExpenses.map((exp) => {
            return (
              <div className="summary flex w-full py-2 items-center justify-between border-b-2 min-w-full border-beige">
                <div
                  style={{ backgroundColor: exp.color }}
                  className="w-4 h-4 rounded-full "
                ></div>
                <p className="text-sm font-semibold text-dark-text w-1/5">
                  {exp.category}
                </p>
                <p className="text-sm  text-dark-text w-1/5 text-center">
                  {Math.floor((exp.amount / totalSpent) * 100)}%
                </p>
                <p className="text-sm font-semibold text-dark-text w-1/5  text-end">
                  &#8377; {exp.amount}
                </p>
              </div>
            );
          })}
        </>
      ) : (
        <p className="font-bold">
          {selectedDate!==""?dailyExpenses.filter((exp) => exp.date !== selectedDate)
            ? "No relevant Data"
            : "Select date to see summary!📋" :''}
            
        </p>
      )}
    </div>
  );
}
