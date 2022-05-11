import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({items}) => {
   
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expanses</h2>
    }
    return (
        <ul className="expenses-list">
        {items.map((expenses) => (
            <ExpenseItem 
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
            />
    ))}
        </ul>
    )


    
}

export default ExpenseList;