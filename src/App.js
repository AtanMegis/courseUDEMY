import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [

  {
    id: 'e1',
    title: 'Asuransi Mobil',
    amount: 200.000,
    date: new Date(2021, 4, 27)
  },
  {
    id: 'e2',
    title: 'BPJS',
    amount: 300.000,
    date: new Date(2022, 5, 27)
  },
  {
    id: 'e3',
    title: 'Tagihan Listrik',
    amount: 400.000,
    date: new Date(2020, 6, 27)
  },
  {
    id: 'e4',
    title: 'Internet',
    amount: 500.000,
    date: new Date(2020, 6, 27)
  },
]


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpanseHandler = expense => {
    setExpenses((prevExpanses) => {
      return [expense, ...prevExpanses]
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpanse={addExpanseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
