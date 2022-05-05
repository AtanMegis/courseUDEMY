import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = ({amount, date, title}) => {
    // const [title, setTitle] = useState(title)

    // const handleClick = () => {
    //     setTitle('Updated ~')
    //     console.log(title)
    // }


    return (
        <>
            <Card className='expense-item'>
                <div>{date.toLocaleString()}</div>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>Rp{amount}</div>
                </div>
               
            </Card>
        </>
    )
}

export default ExpenseItem;
