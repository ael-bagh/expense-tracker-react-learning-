import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <form className='transaction' onSubmit= {onSubmit}>
            <h1>Add transaction</h1>
            <label>Text</label>
            <input placeholder='Enter text...'  value={text} onChange={(e) => setText(e.target.value)}/>
            <label>Amount</label>
            <p>(negative - expense, positive - income)</p>
            <input placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button type='submit' className='bg-purple-500 text-white font-bold w-full mt-2 p-4 rounded-md'>Add transaction</button>
        </form>
    )
}

export default Transaction
