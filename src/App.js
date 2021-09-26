import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';

function App() {
  return (
    <div className='body'>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <Transaction />
    </div>
  );
}

export default App;
