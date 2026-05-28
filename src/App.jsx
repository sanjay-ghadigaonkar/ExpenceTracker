import React, { useEffect } from "react";
import Header from "./Comonent/Header";
import TotalSalary from "./Comonent/TotalSalary";
import Expence from "./Comonent/Expence";
import Form from "./Comonent/From";
import { useState } from "react";
import AddSalary from "./Comonent/SetSalary";
import List from "./Comonent/List";

function App() {
  // Get old salary from local storage or start with 0
  const savedSalary = localStorage.getItem("mySalary");
  const [salary, setSalary] = useState(savedSalary ? Number(savedSalary) : 0);

  // Get old transactions from local storage or start with empty array []

  const savedList = localStorage.getItem("myList");
  const [transactions, setTransactions] = useState(
    savedList ? JSON.parse(savedList) : [],
  );

  useEffect(() => {
    localStorage.setItem("mySalary", salary);
    localStorage.setItem("myList", JSON.stringify(transactions));
  }, [salary, transactions]);

  // Calculate totals
  const totalExpense = transactions.reduce(
    (total, item) => total + item.amount,
    0,
  );
  const remainingIncome = salary - totalExpense;

  // 2. The Main Action Function (Minus + List Update)
  const addTransaction = (text, amount) => {
    const expenceAmount = Number(amount);

    // add new item on the list
    const newTransication = {
      id: Math.random(),
      text: text,
      amount: expenceAmount,
    };

    // copy the old list
    setTransactions([newTransication, ...transactions]);

    //  reset function  Make everything zero and empty
  };
  //  delet function Keep all items except the one with the matching ID
  const deleteTransaction = (id) => {
    const newList = transactions.filter((item) => item.id !== id);
    setTransactions(newList);
  };
  const resetApp = () => {
    setSalary(0);
    setTransactions([]);
    localStorage.clear(); // Clear browser memory
  };
  return (
    // min-h-screen poori height lega, aur max-w-3xl sabko center mein neatly lock karega
    <div className="max-h-screen max-w-full flex justify-center items-start sm:items-center overflow-y-auto  ">
      <div className="w-full max-w-full bg-white sm:border  border-gray-300  shadow-none sm:drop-shadow-2xl p-6 sm:p-10 flex flex-col gap-8 min-h-screen sm:min-h-fit rounded-2xl">
        <Header />
        <TotalSalary amount={salary} />
        <Expence expence={totalExpense} income={remainingIncome} />
        {salary === 0 ? (
          <AddSalary setSalary={setSalary} />
        ) : (
          <>
            <Form addTransaction={addTransaction} />
            <List
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />

            <div className="flex justify-end -mt-4 ">
              <button
                onClick={resetApp}
                className="bg-yellow-400 text-red-800 px-4 py-2 rounded-lg ml-auto"
              >
                Reset All Data
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
