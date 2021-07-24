import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

   // code to use useState at once for all state
    // const [userInput, enterUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });

    const titleChangeHandler = (event) =>{
     setEnterTitle(event.target.value);
    //  enterUserInput({
    //      ...userInput,
    //      enterTitle:event.target.value
    //  });
    }

    const AmountChangeHandler = (event) =>{
        setEnterAmount(event.target.value);
    //    enterUserInput({
    //     ...userInput,
    //     enterAmount:event.target.value
    // });
     }

    const DateChangeHandler = (event) =>{
        setEnterDate(event.target.value);
        // enterUserInput({
        //     ...userInput,
        //     enterDate:event.target.value
        // });
     }

     const submitChangeHandler = event => {
       event.preventDefault();

       const expensedata = {
           title: enterTitle,
           amount: enterAmount,
           date: new Date(enterDate)
       }

       props.onSaveExpensedata(expensedata);
       setEnterTitle('');
       setEnterAmount('');
       setEnterDate('');
     }

    return (
        <form onSubmit={submitChangeHandler}>
        <div>
            <div className="expense-control">
                <label>Title</label>
                <input type="text"
                 value={enterTitle}
                 onChange={titleChangeHandler}></input>
            </div>
            <div className="expense-control">
                <label>Amount</label>
                <input type="number"
                 value={enterAmount}
                 onChange={AmountChangeHandler}></input>
            </div>
            <div className="expense-control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" 
                value={enterDate}
                onChange={DateChangeHandler}></input>
            </div>
            <button type="cancel" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
        </form>

       
    )
}

export default NewExpenseForm;