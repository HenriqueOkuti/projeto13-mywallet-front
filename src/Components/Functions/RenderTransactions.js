import {
  Date,
  Title,
  Value,
  Exclude,
  TransactionContainer,
} from '../Pages/Home/Transactions/TransactionsStyles';

import { IoRemoveCircleOutline } from 'react-icons/io5';
import { AuxButton } from '../Pages/Home/HomeStyles';
import { useNavigate } from 'react-router-dom';

export default function RenderTransaction({ transaction, token }) {
  //console.log(transaction);
  const navigate = useNavigate();

  function handleDelete(transaction) {
    console.log('Delete:', transaction);
    //handle Delete

    //If success:
    navigate('/home');
  }

  function handleModify(transaction) {
    navigate('/input', {
      state: {
        id: 2,
        type: transaction.type,
        token: token,
        baseText: 'Editar',
        transaction: transaction,
      },
    });
  }

  return (
    <TransactionContainer>
      <Date>{transaction.date}</Date>
      <Title onClick={() => handleModify(transaction)}>
        {transaction.name}
      </Title>
      <Value type={transaction.type}>{transaction.value}</Value>
      <Exclude onClick={() => handleDelete(transaction)}>
        <AuxButton size={'18px'}>
          <IoRemoveCircleOutline />
        </AuxButton>
      </Exclude>
    </TransactionContainer>
  );
}
