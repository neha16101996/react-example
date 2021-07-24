
import ExpensedList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    
    const [filterYear, setFilterYear] = useState('2020');
    const filterChnageHandler = selectYear => {
     setFilterYear(selectYear);
    };

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

  

    return (

<div className="container">
    <ExpenseFilter selected={filterYear} onChangeFilter={filterChnageHandler} />

    <ExpenseChart expenses= {filteredExpense} />
    <ExpensedList items={filteredExpense} />
    {/* <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
    ></ExpenseItem>
    <ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
    ></ExpenseItem>
    <ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}>

    </ExpenseItem> */}

    </div>
);
}

export default Expense;