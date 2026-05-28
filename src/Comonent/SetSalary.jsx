import React, { useState } from "react";

const AddSalary = ({ setSalary }) => {
  // Yeh local state sirf input box mein type hone wale number ko yaad rakhegi
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const FinelAmount = Number(inputValue);

    if (FinelAmount > 0) {
      setSalary(FinelAmount);
    }

    if (!FinelAmount) {
      alert("please Add Your Salary!");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <div className=" flex justify-center border-0 rounded-2xl">
        <input
          type="number"
          placeholder="Add Salary"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className=" m-2 flex-1 max-w-2xl border border-gray-300 rounded-lg p-3  focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
        />

        <button
          type="submit"
          className="flex border-2 text-center bg-green-100 text-2xl hover:bg-green-200 text-green-800 h-12.5 mt-2 rounded-2xl p-1"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddSalary;
