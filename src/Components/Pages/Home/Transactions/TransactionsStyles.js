import styled from 'styled-components';

const TransactionsContainer = styled.div`
  position: relative;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;

const Date = styled.div`
  justify-self: flex-start;
  color: #c6c6c6;
`;
const Title = styled.button`
  word-break: break-all;
`;
const Value = styled.div`
  justify-self: flex-end;
  color: ${(props) => (props.type === 'input' ? '#03AC00' : '#C70000')};
`;
const Exclude = styled.div`
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
  height: 90%;
  width: 100%;
  margin: 0;
  font-weight: bold;
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 0px;
  height: 35px;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0 15px 0 15px;
  background-color: #f5f5f5;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
`;

const UserValue = styled.div`
  color: ${(props) =>
    Math.abs(props.net) < 1e-2
      ? '#000000'
      : props.net > 0
      ? '#03AC00'
      : '#C70000'};
`;

const AuxContainer = styled.div`
`

export {
  TransactionsContainer,
  Date,
  Title,
  Value,
  Exclude,
  TransactionContainer,
  Empty,
  Balance,
  UserValue,
  AuxContainer
};
