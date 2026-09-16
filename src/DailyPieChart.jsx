import { PieChart, Cell, Tooltip, Legend, Pie } from "recharts";

export default function DailyPieChart({ dailyExpenses }) {
  return (
    <div className="w-full h-80 flex justify-center items-center  relative">
      <div className="w-32 h-32 bg-amber-50 top-1/2 left-1/2 flex justify-center flex-col font-google items-center text-lg font-semibold text-dark-text -translate-x-1/2 -translate-y-1/2 rounded-full absolute  z-50">
     &#8377;{
        dailyExpenses.reduce((acc,exp)=>acc+exp.amount,0)
      }
      <p className="text-sm font-semibold text-warm-gray font-google  ">Total spent</p>
      
      </div>
      <PieChart
        width={300}
        height={300} 
        className=" flex justify-center items-center outline-0 border-0 outline-none focus:outline-none"
      >
        <Pie
          data={dailyExpenses}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {dailyExpenses.map((exp) => (
            <Cell key={exp.category} fill={exp.color} />
          ))}
        </Pie>

        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
}
