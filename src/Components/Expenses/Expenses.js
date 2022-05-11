import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpensesChart/ExpensesChart";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2022')


    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpanses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpanses}/>
                <ExpenseList items={filteredExpanses}/>             
            </Card>
        </div>
    );
}


export default Expenses;
