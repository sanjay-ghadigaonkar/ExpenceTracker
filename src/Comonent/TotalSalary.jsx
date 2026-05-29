import React from "react";

const TotalSalary = ({ amount }) => {
  return (
    // Parent div: Box ko center mein rakhne ke liye
    <div className="flex justify-center w-full px-2 mt-4 ">
      <div className="w-full md:max-w-sm bg-green-100 text-green-800 text-center py-10 lg:py-16 md:py-16 lg:max-w-full px-4 rounded-lg">
        <p className="text-xl font-medium">Total Salary:</p>
        <h1 className="text-5xl font-bold mt-2"> ₹{amount}</h1>
      </div>
    </div>
  );
};

export default TotalSalary;
