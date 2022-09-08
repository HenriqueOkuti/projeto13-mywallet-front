import styled from 'styled-components';

const TransactionsContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  overflow-y: scroll;
  height: 100%;
`;

const Date = styled.div`
  justify-self: flex-start;
  color: #c6c6c6;
`;
const Title = styled.button``;
const Value = styled.div`
  justify-self: flex-end;
  color: ${(props) => (props.type === 'input' ? '#03AC00' : '#C70000')};
`;
const Exclude = styled.button`
  justify-self: flex-end;
  color: #c6c6c6;
`;

const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20% 10%;
  margin: 10px 10px 10px 10px;
  justify-items: baseline;
  align-items: center;
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
`;

export {
  TransactionsContainer,
  Date,
  Title,
  Value,
  Exclude,
  TransactionContainer,
  Empty,
};
