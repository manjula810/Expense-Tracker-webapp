import { useState } from "react";

export default function Settings() {
  const [isOn, setisOn] = useState(false);
  return (
    <div className="container  min-w-full padding flex flex-col gap-2 items-center justify-center">
      <div className="outer min-w-full  flex flex-col items-center justify-between">
        <div className="border-b-2 min-w-full border-beige  flex items-center justify-start py-2 gap-2">
          <i className="fa-solid fa-circle-user text-dark-green text-6xl"></i>

          <div className=" flex flex-col items-start justify-center w-1/4  ">
            <p className="text-small-med font-bold font-google text-dark-text">
              Yourname
            </p>
            <p className="font-semibold text-sm text-warm-gray">
              yourname@gmail.com
            </p>
          </div>
        </div>
        <div className="summary flex w-full py-3 gap-2 px-1 items-center  border-b-2 min-w-full border-beige">
          <i class="fa-solid fa-globe text-dark-green text-xl "></i>

          <p className="text-medium font-semibold text-dark-text w-1/5 text-center ">
            Language
          </p>
          <select className="py-2 border-0 outline-0 w-1/5 text-dark-text ml-auto  hover:cursor-pointer">
            <option value={0} className="text-dark-text font-semibold">
              English
            </option>
            <option value={1} className="text-dark-text font-semibold">
              Tamil
            </option>
          </select>
          {/* <p className="text-sm  text-dark-text w-1/5 text-center"></p>
            <p className="text-sm font-semibold text-dark-text w-1/5  text-end">
              
            </p> */}
        </div>
        <div className="summary flex w-full py-3 gap-2 px-1 items-center  border-b-2 min-w-full border-beige">
          <i class="fa-regular fa-bell text-dark-green text-xl "></i>

          <p className="text-medium font-semibold text-dark-text w-1/5 text-center ">
            Notification
          </p>
         
          {
            isOn?<i class="fa-solid fa-toggle-on text-dark-green text-3xl ml-auto  hover:cursor-pointer" role="button"
            onClick={() => setisOn(!isOn)}></i>: <i
            class="fa-solid fa-toggle-off text-dark-green text-3xl ml-auto  hover:cursor-pointer" 
            role="button"
            onClick={() => setisOn(!isOn)}
          ></i>
          }
          
        </div>
        <div className="summary flex w-full py-3 gap-2 px-1 items-center hover:cursor-pointer">
          <i class="fa-solid fa-arrow-right-from-bracket text-red-600 text-xl "></i>

          <p className="text-medium font-semibold text-red-600 w-1/5 text-center ">
            Logout
          </p>
         
         
          
        </div>
      </div>
    </div>
  );
}
