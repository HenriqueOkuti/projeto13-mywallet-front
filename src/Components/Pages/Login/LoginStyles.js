import styled from 'styled-components';

const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;
  font-family: 'Raleway', sans-serif;
  width: ${(props) => (props.size ? props.size : 'auto')};
`;

export { FormsContainer };
