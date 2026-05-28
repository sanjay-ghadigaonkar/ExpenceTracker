import React from "react";

const Expence = ({ expence, income }) => {
  return (
    <>
      <div className="flex justify-between items-center w-full md:min-w-2xl p-4 md:flex-row  bg-gray-100 rounded-lg mx-auto ">
        <div className=" flex flex-1 justify-center  lg:flex-row md:max-h-28 md:gap-6">
          <div className="flex-1 justify-center  lg:flex-row lg:max-h-3/5 m-1  bg-green-200 text-green-800 text-center py-10   rounded-lg    ">
            <p>Remaining Balance :</p>
            <h2 className="text-3xl font-bold">₹{income}</h2>
          </div>
          <div className="flex-1 justify-center  lg:flex-row bg-yellow-200  text-yellow-800 text-center py-10    rounded-lg   ">
            <p>Total Expense :</p>
            <h2 className="text-3xl font-bold">₹{expence}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expence;
