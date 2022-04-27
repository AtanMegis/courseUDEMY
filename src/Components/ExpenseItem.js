import './ExpenseItem.css';

const ExpenseItem = ({title, amount, date}) => {
  
    return (
        <>
            <div className='expense-item'>
                <div>{date.toLocaleString()}</div>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>Rp{amount}</div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem;
