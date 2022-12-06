import styled from 'styled-components';

export default function GenericButton({ disabled, text, size }) {
  return (
    <>
      <Button size={size} disabled={disabled}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === '100%' ? '100%' : '300px')};
  height: 45px;
  background: #a328d6;
  border-radius: 5px;
  margin: 5px 0 0 0;
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 26px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
