import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2022')


    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpanses = items.filter (expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpanses.map((expense) => (
                        <ExpenseItem
                            key={expense.key}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </div>
    );
}


export default Expenses;
