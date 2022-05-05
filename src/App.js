import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const expenses= [
  {
    id: 'e1',
    title: 'Asuransi Mobil',
    amount: 200.000,
    date:  new Date (2022, 4, 27)
  },
  {
    id: 'e2',
    title: 'BPJS',
    amount: 300.000,
    date:  new Date (2022, 4, 27)
  },
  {
    id: 'e3',
    title: 'Tagihan Listrik',
    amount: 400.000,
    date:  new Date (2022, 4, 27)
  },
  {
    id: 'e4',
    title: 'Internet',
    amount: 500.000,
    date:  new Date (2022, 4, 27)
  },
]
function App() {


  return (
    <div className="App">
    <NewExpense/>
    <Expenses items={expenses}/> 
    </div>
  );
}

export default App;
