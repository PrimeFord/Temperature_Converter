import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ans, setAns] = useState("0");
  const [unit, setUnit] = useState("");

  const convertC = () => {
    if (to === "fahrenheit") {
      let s = input * 1.8 + 32;
      return setAns(s);
    } else if (to === "kelvin") {
      let s = parseInt(input) + 273;
      return setAns(s);
    } else {
      let s = input * 1;
      return setAns(s);
    }
  };
  const convertF = () => {
    if (to === "celcius") {
      let s = (parseInt(input) - 32) / 1.8;
      return setAns(s);
    } else if (to === "kelvin") {
      let s = (parseInt(input) - 32) / 1.8 + 273;
      return setAns(s);
    } else {
      let s = input * 1;
      return setAns(s);
    }
  };

  const convertK = () => {
    if (to === "celcius") {
      let s = parseInt(input) - 273;
      return setAns(s);
    } else if (to === "fahrenheit") {
      let s = (parseInt(input) - 273) * 1.8 + 32;
      return setAns(s);
    } else {
      let s = input * 1;
      return setAns(s);
    }
  };
  const choice = (e) => {
    e.preventDefault();
    if (from === "celcius") {
      convertC();
    } else if (from === "fahrenheit") {
      convertF();
    } else {
      convertK();
    }
    console.log(ans);
    console.log(input);
    if (to === "celcius") {
      return setUnit("°C");
    } else if (to === "fahrenheit") {
      return setUnit("°F");
    } else {
      return setUnit("K");
    }
  };

  const check = () => {
    if (to === "celcius") {
      return setUnit("°C");
    } else if (to === "fahrenheit") {
      return setUnit("°F");
    } else {
      return setUnit("K");
    }
  };

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
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="border-solid border-b-2 lg:w-fit w-[75%]  border-[#e1e1e1] p-1 px-2 focus:outline-none  "
              placeholder="Enter temperature"
            />
          </div>
          <section className="w-[100%] lg:w-fit flex lg:flex-row flex-col gap-10 m-2 my-8 p-2">
            <select
              className="first:text-[#c1c1c1] border-solid border-b-2 border-[#fc4445] focus:outline-none first-of-type:text-[#999999] px-2 py-1"
              name="from"
              id="from"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            >
              <option value="null">...Converting from</option>
              <option value="celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
            <select
              className="border-solid border-b-2 border-[#3feee6] focus:outline-none px-2 py-2"
              name="from"
              id="from"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
            >
              <option className="first:text-[#c1c1c1]" value="null">
                ...Converting to
              </option>
              <option value="celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </section>
          <div className="w-[50%] flex flex-col items-center lg:flex-row gap-4 justify-between mt-4 p-4">
            <button
              className="w-[100%] lg:w-[30%] rounded-md bg-[#fc4445] p-2"
              onClick={choice}
            >
              Calculate
            </button>
            <p className="w-[65%] flex justify-center items-center text-[1.5rem] font-[400]">
              {parseInt(ans).toFixed(2)}
              <span>{unit}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const me = (y) => {
//   if ((y = 2)) {
//     if (y === 1) {
//       d = y * 20;
//     } else {
//       d = y * 1;
//     }
//     return (c = d);
//   } else {
//     c = y - 3;
//   }
//   return c;
// };
// me(2);

// () => {
//   if (to === "celcius") {
//     parseInt(ans).toFixed(2) + "°C";
//   } else if (to === "fahrenheit") {
//     parseInt(ans).toFixed(2) + "°F";
//   } else {
//     parseInt(ans).toFixed(2) + "K";
//   }
// }
//°F
