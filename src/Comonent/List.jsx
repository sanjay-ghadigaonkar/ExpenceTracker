import React from "react";

const List = ({ transactions, deleteTransaction }) => {
  return (
    <div className="w-full mt-0  max-h-full overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-800   border-b pb-2 ">
        Transactions
      </h1>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center italic p-4">
          No expenses recorded yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-3   ">
          {transactions.map((transactions) => (
            <li
              className="bg-white p-4 rounded-lg flex justify-between items-center border-l-4 border-red-500 shadow-sm gap-4"
              key={transactions.id}
            >
              <span className="min-w-0  flex-1 truncate  text-lg font-semibold text-gray-700 capitalize">
                {transactions.text}
              </span>
              <div className="flex items-center gap-4 shrink-0">
                {" "}
                <span className="text-lg font-bold text-red-600   whitespace-nowrap">
                  ₹{transactions.amount}
                </span>
              </div>
              {/*  delete btn */}
              <button
                onClick={() => deleteTransaction(transactions.id)}
                className="text-xs bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-3 rounded-md transition-colors"
                title="Delete this transaction"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
