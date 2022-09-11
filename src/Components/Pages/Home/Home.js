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
import { useNavigate, useLocation } from 'react-router-dom';
import Transactions from './Transactions/Transactions';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [update, setUpdate] = useState(false);
  const [render, setRender] = useState(false);
  const [newdata, setNewdata] = useState(false);
  const [user, setUser] = useState({
    name: 'default',
    transactionHistory: [],
    token: 'abcd',
  });

  const location = useLocation();
  const navigate = useNavigate();

  //  !Important:
  //  Store TOKEN obtained after navigate, send it through the navigate

  useEffect(() => {
    if (!location.state || user.token === '') {
      navigate('/', { error: 'no token' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, user.transactionHistory.length]);

  const token = location.state?.token;
  if (token) {
    user.token = token;
  }

  useEffect(() => {
    setRender(false);
    setUser(getUserData(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, newdata]);

  if (render) {
    setUpdate(!update);
    setRender(false);
  }

  function getUserData(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let userData = {
      name: 'default',
      transactionHistory: [],
      token: token,
    };

    function HandleSuccess(event) {
      const recievedData = event.data;
      userData = {
        name: recievedData.name,
        transactionHistory: recievedData.transactionHistory,
        token: token,
      };
      const len = userData.transactionHistory.length - 1;
      if (
        userData.transactionHistory[len] !== user.transactionHistory[len] ||
        userData.name !== 'default'
      ) {
        userData.transactionHistory.reverse();
        setUser(userData);
        setNewdata(true);
      }
    }

    axios
      .get('http://localhost:5000/transactions', config)
      .then((event) => HandleSuccess(event))
      .catch((event) => console.log(event));

    return userData;
  }

  return (
    <>
      <HomeContainer>
        <Background></Background>
        <HomeContent>
          <HomeHeader>
            <AuxDiv>Olá, {user.name}</AuxDiv>
            <AuxButton size={'35px'} onClick={() => navigate('/')}>
              <BsDoorOpen />
            </AuxButton>
          </HomeHeader>
          <HomeBody>
            <Transactions
              updateHome={newdata}
              token={user.token}
              userTransactions={user.transactionHistory}
            />
          </HomeBody>
          <HomeFooter>
            <FooterMenu
              onClick={() =>
                navigate('/input', {
                  state: {
                    id: 1,
                    type: 'input',
                    token: token,
                    baseText: 'Nova',
                  },
                })
              }
            >
              <AuxDiv size={'30px'}>
                <AiFillPlusCircle />
              </AuxDiv>
              <AuxDiv>Nova entrada</AuxDiv>
            </FooterMenu>
            <FooterMenu
              onClick={() =>
                navigate('/input', {
                  state: {
                    id: 2,
                    type: 'output',
                    token: token,
                    baseText: 'Nova',
                  },
                })
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
