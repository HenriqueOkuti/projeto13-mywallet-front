import { Background } from '../../Styles/Background';
import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeBody,
  HomeFooter,
  FooterMenu,
  AuxDiv,
  AuxButton,
} from './HomeStyles';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsDoorOpen } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>
        <Background></Background>
        <HomeContent>
          <HomeHeader>
            <AuxDiv>Olá, FULANO</AuxDiv>
            <AuxButton size={'35px'} onClick={() => navigate('/')}>
              <BsDoorOpen />
            </AuxButton>
          </HomeHeader>
          <HomeBody>This is the BODY</HomeBody>
          <HomeFooter>
            <FooterMenu
              onClick={() =>
                navigate('/input', { state: { id: 1, type: 'input' } })
              }
            >
              <AuxDiv size={'30px'}>
                <AiFillPlusCircle />
              </AuxDiv>
              <AuxDiv>Nova entrada</AuxDiv>
            </FooterMenu>
            <FooterMenu
              onClick={() =>
                navigate('/input', { state: { id: 2, type: 'output' } })
              }
            >
              <AuxDiv size={'30px'}>
                <AiFillMinusCircle />
              </AuxDiv>
              <AuxDiv>Nova saída</AuxDiv>
            </FooterMenu>
          </HomeFooter>
        </HomeContent>
      </HomeContainer>
    </>
  );
}
