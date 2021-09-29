import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const HistoryCard = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <div className={ transaction.amount > 0 ? 'history-card green-card' : 'history-card red-card' }>
            <div>{transaction.text}</div>
            <div>{transaction.amount}</div>
            <button onClick={() => deleteTransaction(transaction.id)} className='bg-red-500 text-white font-bold p-4 rounded-md'> delete </button>
        </div>
    )
}

export default HistoryCard
