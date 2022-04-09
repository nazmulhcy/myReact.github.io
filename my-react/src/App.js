
import React from 'react';
import ExpenseItem from './components/ExpeneseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expense = [{title: 'Car Inurance',amount:293.0,date:new Date(2021,8,22)},
  {
    title: 'Car Inurance',
    amount:293.0,
    date:new Date(2021,8,22)},
  {
    title: 'TV',
    amount:703.0,
    date:new Date(2019,5,29)},
  {
    title: 'Refirigarator',
    amount:6713.0,
    date:new Date(2025,1,18)}
];

  return (
    
    <div>

      <NewExpense/>
     
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>

    </div>
    
  );
}
export default App;
