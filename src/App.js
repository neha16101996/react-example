
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpenses/NewExpense';
import React, { useState } from 'react';

const DUMMY_DATA = [

  {
    id: 1,
    title: 'Car',
    amount: '2788',
    date: new Date(2020, 3, 4)
  },
  {
    id: 2,
    title: 'Bike',
    amount: '2788',
    date: new Date(2019, 3, 4)
  },
  {
    id: 3,
    title: 'HeliCoupter',
    amount: '2788',
    date: new Date(2021, 3, 4)
  },
]


function App() {
  const [expenses, setExpense] =  useState(DUMMY_DATA);
  const addExpenseHandler = expense => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
     
     <Expense items = {expenses}></Expense>
      </div>
    
  );
}

export default App;
