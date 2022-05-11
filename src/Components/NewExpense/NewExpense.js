import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpanse }) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpanse(expenseData);
        setIsEditing(false);
    }



    return (
        <div className='new-expense'>
            {!isEditing &&<button onClick={startEditingHandler}>Add New Expanses</button>}
            {isEditing &&<ExpenseForm
                 onSaveExpenseData={saveExpenseDataHandler}
                 onCancel={cancelEditingHandler}
                 />}
        </div>
    )
}

export default NewExpense;