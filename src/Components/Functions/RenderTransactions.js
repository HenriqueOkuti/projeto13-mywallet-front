import {
  Date,
  Title,
  Value,
  Exclude,
  TransactionContainer,
} from '../Pages/Home/Transactions/TransactionsStyles';

import { IoRemoveCircleOutline } from 'react-icons/io5';
import { AuxButton } from '../Pages/Home/HomeStyles';

export default function RenderTransaction({ transaction }) {
  //console.log(transaction);
  return (
    <TransactionContainer>
      <Date>{transaction.date}</Date>
      <Title onClick={() => console.log('edit')}>{transaction.name}</Title>
      <Value type={transaction.type}>{transaction.value}</Value>
      <Exclude onClick={() => console.log('exclude')}>
        <AuxButton size={'18px'}>
          <IoRemoveCircleOutline />
        </AuxButton>
      </Exclude>
    </TransactionContainer>
  );
}
