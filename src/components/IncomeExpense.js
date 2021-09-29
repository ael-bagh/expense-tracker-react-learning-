import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    var expense = transactions.reduce((prev, transaction) => {
        return prev + (transaction.amount < 0 ? transaction.amount : 0);
    }, 0);
    var income = transactions.reduce((prev, transaction) => {
        return prev + (transaction.amount > 0 ? transaction.amount : 0);
    }, 0);
    return (
        <div className='ie-container'>
            <div className='income'>
                <h1>Income</h1>
                <h2>${income}</h2>
            </div>
            <div className='expense'>
                <h1>Expense</h1>
                <h2>${Math.abs(expense)}</h2>
            </div>
        </div>
    )
}

export default IncomeExpense
