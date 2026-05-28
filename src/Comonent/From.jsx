import React from "react";
import { useState } from "react";
const Form = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Text Input:", text);
    // console.log("Amount Input: ₹", amount);

    if (!text || !amount) {
      alert("Please Add A Expence name and Amount");
      return;
    }

    addTransaction(text, amount);

    // imput is impty for submit
    setText("");
    setAmount("");
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold flex justify-center mb-4 text-gray-800">
        Fill Your Expencesss
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex  justify-between flex-wrap  flex-col">
          <input
            type="text"
            placeholder="  Type expence name  "
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" m-2  mr-2 flex-1 max-w-full border border-gray-300 rounded-lg p-3  focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          />
          <input
            type="number"
            placeholder="  Type Amount  "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className=" m-2 ml-2 flex-1 max-w-full border border-gray-300 rounded-lg p-3  focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          />
          <div className="flex justify-center ">
            <button
              type="submit"
              className=" min-w-2/3  bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-xl ml- mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
