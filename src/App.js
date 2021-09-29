import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className='body'>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <Transaction />
    </GlobalProvider>
  );
}

export default App;
