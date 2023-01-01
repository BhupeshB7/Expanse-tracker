import ExpenseItem from './ExpenseItem'

import './ExpenseList.css'
const ExpenseList = (props) => {



    if (props.items.length === 0) {
        return <h2 className='expense-list__fallback' style={{ paddingTop: "10px" }}>Found no expenses...</h2>
    }

    return (
        <div className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    )
}

export default ExpenseList