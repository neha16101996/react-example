import React, {useState} from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const  NewExpense = (props) => {

   const [click, setClick] = useState(false);
   const onSaveEventHandler = (enterExpenseDate) => {
      const expenseDate = {
        ...enterExpenseDate,
        id: Math.random().toString()
      };
      
      props.onAddExpense(expenseDate);
      setClick(false);
   };

   const startClicking = () => {
      setClick(true);
    }

    const stopClicked = () => {
       setClick(false);
     }
 return (
    <div className="new-expense">

       {!click && (
          <button onClick={startClicking}> Add New Expense </button>
       )}

       {click && (
      <NewExpenseForm onSaveExpensedata={onSaveEventHandler}
       onCancel={stopClicked}/>
       )}

    
    </div>
 )
}

export  default NewExpense;