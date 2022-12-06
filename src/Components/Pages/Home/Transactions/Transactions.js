import {
  TransactionsContainer,
  Empty,
  Balance,
  UserValue,
} from './TransactionsStyles';
import RenderTransaction from '../../../Functions/RenderTransactions';
import { useEffect, useState } from 'react';

export default function Transactions({ updateHome, token, userTransactions }) {
  const [update, setUpdate] = useState(userTransactions.length);
  const [userBalance, setUserBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  let transactionHistory = transactions;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    transactionHistory = transactions;
    updateBalance();
  }, [update]);

  let len = userTransactions.length - 1;
  if (transactions[len] !== userTransactions[len]) {
    setTransactions(userTransactions);
    setUpdate(!update);
  }

  let hasTransactions = transactionHistory.length === 0 ? false : true;

  //Mock empty data:
  //transactionHistory = [];

  function updateBalance() {
    let balance = 0;
    for (let i = 0; i < transactionHistory.length; i++) {
      if (transactionHistory[i].type === 'input') {
        balance += Number(transactionHistory[i].value);
      } else {
        balance -= Number(transactionHistory[i].value);
      }
    }

    const LESS_THAN_PRECISION = 1e-2;
    if (Math.abs(balance) < LESS_THAN_PRECISION) {
      balance = 0;
    }
    balance = balance.toFixed(2);

    setUserBalance(balance);
  }

  return (
    <>
      <TransactionsContainer>
        {hasTransactions ? (
          transactionHistory.map((e, i) => (
            <RenderTransaction token={token} transaction={e} key={i} />
          ))
        ) : (
          <Empty>Sem histórico de transações</Empty>
        )}
        {hasTransactions ? (
          <Balance>
            <div>Saldo</div>
            <UserValue net={userBalance}>
              {userBalance < 0 ? Math.abs(userBalance) : userBalance}
            </UserValue>
          </Balance>
        ) : (
          <></>
        )}
      </TransactionsContainer>
    </>
  );
}
