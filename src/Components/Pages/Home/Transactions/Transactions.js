import {
  TransactionsContainer,
  Empty,
  Balance,
  UserValue,
} from './TransactionsStyles';
import RenderTransaction from '../../../Functions/RenderTransactions';

export default function Transactions() {
  //Mock data generation:
  generateTransactions();

  //Mock empty data:
  //transactionHistory = [];
  let hasTransactions = transactionHistory.length === 0 ? false : true;

  let userBalance;
  function updateBalance() {
    userBalance = 0;
    for (let i = 0; i < transactionHistory.length; i++) {
      userBalance += transactionHistory[i].value;
    }
    userBalance = userBalance.toFixed(2);
  }
  updateBalance();

  return (
    <>
      <TransactionsContainer>
        {hasTransactions ? (
          transactionHistory.map((e, i) => (
            <RenderTransaction transaction={e} key={i} />
          ))
        ) : (
          <Empty>Sem histórico de transações...</Empty>
        )}
        {hasTransactions ? (
          <Balance>
            <div>Saldo</div>
            <UserValue net={userBalance}>{userBalance}</UserValue>
          </Balance>
        ) : (
          <></>
        )}
      </TransactionsContainer>
    </>
  );
}

let transactionHistory = [];

let transaction1 = {
  date: '08/09',
  name: 'transaction type === input',
  value: +555.55,
  type: 'input',
};
let transaction2 = {
  date: '08/09',
  name: 'transaction type === output',
  value: +555.55,
  type: 'output',
};

function generateTransactions() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      transactionHistory.push(transaction1);
    } else {
      transactionHistory.push(transaction2);
    }
  }
}
