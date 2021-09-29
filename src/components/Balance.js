import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const balance = transactions.reduce((prev, cur) => {
        return prev + cur.amount;
    }, 0);

    return (
        <div className='balance'>
            <h4>Your balance</h4>
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance
