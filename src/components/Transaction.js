const Transaction = () => {
    return (
        <div className='transaction'>
            <h1>Add transaction</h1>
            <label>Text</label>
            <input placeholder='Enter text...' />
            <label>Amount</label>
            <p>(negative - expense, positive - income)</p>
            <input placeholder='Enter amount' />
            <button type='submit' className='bg-purple-500 text-white font-bold w-full mt-2 p-4 rounded-md'>Add transaction</button>
        </div>
    )
}

export default Transaction
