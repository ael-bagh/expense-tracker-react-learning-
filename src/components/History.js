import { useContext } from 'react';
import HistoryCard from "./HistoryCard"
import { GlobalContext } from "../context/GlobalState"

const History = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='history'>
            <h1>
                History
            </h1>
            { transactions.map(transaction => (<HistoryCard transaction={transaction} />))}
        </div>
    )
}

export default History
