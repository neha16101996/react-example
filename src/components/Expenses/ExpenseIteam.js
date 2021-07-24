
import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    // const expenseDate = new Date(2021, 3, 4);
    // const expenseTitle = 'Car Insurence';
    // const expensePrice = '$2788.3';

    return (
     <div className="expense-item">
         
         <ExpenseDate date = {props.date}/>
         <div className="expense-item__description">
             <h2>{props.title}</h2>
             </div>
         <div className="expense-item__price">${props.amount}</div>
         
     </div>
    )
}

export default ExpenseItem;