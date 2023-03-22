import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="h-[95%] w-[90%] lg:h-[75%] lg:w-[50%] bg-white rounded-[.5rem]">
        <p className="text-center font-[400] text-[1.8rem] lg:text-[3rem] w-[100%] py-2 bg-[#97caef] text-white ">
          Temperature Converter
        </p>
        <div className="flex flex-col items-center w-[100%] px-2 mt-10">
          <div className="flex gap-10 w-[100%] justify-center">
            <p className="text-[1.25rem] w-[25%] lg:w-fit font-[400]">From:</p>
            <input
              type="number"
              className="border-solid border-b-2 lg:w-fit w-[75%]  border-[#e1e1e1] p-1 px-2 focus:outline-none  "
              placeholder="Enter temperature"
            />
          </div>
          <section className="w-[100%] lg:w-fit flex lg:flex-row flex-col gap-10 m-2 my-8 p-2">
            <select
              className="first:text-[#e1e1e1] border-solid border-b-2 border-[#3feee6] focus:outline-none first-of-type:text-[#c1c1c1] px-2 py-1"
              name="from"
              id="from"
            >
              <option value="null">...Converting from</option>
              <option value="celcius">Celcius</option>
              <option value="farenheit">Farenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
            <select
              className="border-solid border-b-2 border-[#3feee6] focus:outline-none px-2 py-1"
              name="from"
              id="from"
            >
              <option className="first:text-[#c1c1c1]" value="null">
                ...Converting to
              </option>
              <option value="celcius">Celcius</option>
              <option value="farenheit">Farenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </section>
          <div className="w-[50%] flex flex-col items-center lg:flex-row gap-4 justify-between mt-4 p-4">
            <button className="w-[100%] lg:w-[30%] bg-[#fc4445] p-2">
              Calculate
            </button>
            <p className="w-[65%] flex justify-center items-center text-[1.2rem] font-[400]">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
