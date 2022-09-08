import styled from 'styled-components';

const HomeContainer = styled.div``;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 35px;
  margin: 30px 0 0 0;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  color: #ffffff;
`;

const HomeBody = styled.div`
  width: 80vw;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin: 30px 0 0 0;
`;

const HomeFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-items: center;
  width: 80vw;
  height: 120px;
  margin: 40px 0 0 0;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;
`;

const FooterMenu = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: #a500b5;
  border-radius: 5px;
  padding: 0 0 0 10px;
`;

const AuxDiv = styled.div`
  font-size: ${(props) => props.size};
`;

const AuxButton = styled.button`
  font-size: ${(props) => props.size};
`;

export {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeBody,
  HomeFooter,
  FooterMenu,
  AuxDiv,
  AuxButton,
};
