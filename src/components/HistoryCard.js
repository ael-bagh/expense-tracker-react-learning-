const HistoryCard = ({transaction}) => {
    return (
        <div className='history-card green-card'>
            <div>{transaction.text}</div>
            <div>{transaction.amount}</div>
        </div>
    )
}

export default HistoryCard
