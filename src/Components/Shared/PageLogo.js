import styled from 'styled-components';

export default function PageLogo() {
  return (
    <>
      <LogoContainer>
        <TitleText>MyWallet</TitleText>
      </LogoContainer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 70px 0 0 0;
`;

const TitleText = styled.div`
  font-family: 'Playball', sans-serif;
  width: 150px;
  height: 55px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 60px;
  color: #ffffff;
`;
