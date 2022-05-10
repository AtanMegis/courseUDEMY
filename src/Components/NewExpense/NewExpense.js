import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpanse}) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
       onAddExpanse(expenseData);
        
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;