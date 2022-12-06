import { Background } from '../../Styles/Background';
import PageContainer from '../../Styles/PageContainer';
import { InputOutputContent, ContentContainer } from './InputOutputStyles';
import PageHeader from '../../Styles/PageHeader';
import { AuxButton, AuxDiv } from '../Home/HomeStyles';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import InputField from '../../Shared/InputField';
import { useEffect, useState } from 'react';
import { FormsContainer } from '../Login/LoginStyles';
import GenericButton from '../../Shared/GenericButton';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { stripHtml } from 'string-strip-html';

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//IMPORTANT:
//I NEED THE TOKEN HERE

export default function InputOutput() {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const typeTransaction = location.state.transaction;
  const [value, setValue] = useState(
    typeTransaction ? location.state.transaction.value : ''
  );
  const [name, setName] = useState(
    typeTransaction ? location.state.transaction.name : ''
  );
  const token = location.state.token;

  const transactionType = location.state.type;
  const baseText = location.state.baseText;

  const [transaction, setTransaction] = useState({
    type: transactionType,
    name: typeTransaction ? location.state.transaction.name : '',
    value: typeTransaction ? location.state.transaction.value : '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    let submitteddata = { ...transaction };
    submitteddata.value = value.replaceAll(',', '.');
    submitteddata.name = stripHtml(name).result;

    let dataVerified = false;

    dataVerified = verifyData(submitteddata);

    if (dataVerified) {
      submitteddata.value = Number(submitteddata.value).toFixed(2);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (!typeTransaction) {
        axios
          .post('http://localhost:5000/new-transaction', submitteddata, config)
          .then(handleSuccess)
          .catch((event) => console.log(event));
      } else {
        //axios put
        submitteddata.key = location.state.transaction.key;
        console.log('MODIFY: ', submitteddata);

        handleSuccess();
      }
    }
  }

  function verifyData(submitteddata) {
    //VerifyData
    // !Data ? return false : return true
    if (!Number(submitteddata.value)) {
      window.alert('O valor deve ser um número');
      return false;
    }
    let value = Number(submitteddata.value);
    let valueString = value.toString();

    //Yes, this is only due to the magic numbers rule from eslint
    //I could disable the rule, however, i don't want to.
    const ZERO = 0,
      ONE = 1,
      TWO = 2;

    if (valueString.split('.').length > ONE) {
      if (valueString.split('.')[ONE].split('').length > TWO) {
        window.alert('Se atente ao número de casas decimais!');
        return false;
      }
    }

    if (submitteddata.name.length === ZERO) {
      window.alert('Você precisa modificar o nome');
      return false;
    }
    return true;
  }

  function handleSuccess(event) {
    navigate('/home', { state: { id: 1, token: token } });
  }

  //!Important:
  //return the TOKEN when navigating back home

  return (
    <>
      <PageContainer>
        <Background></Background>
        <InputOutputContent>
          <PageHeader>
            <AuxDiv>
              {baseText} {transactionType === 'input' ? 'entrada' : 'saída'}
            </AuxDiv>
            <AuxButton
              size={'35px'}
              onClick={() =>
                navigate('/home', { state: { id: 1, token: token } })
              }
            >
              <RiArrowGoBackLine />
            </AuxButton>
          </PageHeader>
          <ContentContainer>
            <FormsContainer
              size={'80vw'}
              onSubmit={(event) => handleSubmit(event)}
            >
              <InputField
                size={'100%'}
                disabled={false}
                type={'text'}
                text={'Valor'}
                info={'value'}
                data={transaction}
                setData={setValue}
                value={typeTransaction ? location.state.transaction.value : ''}
              />
              <InputField
                size={'100%'}
                disabled={false}
                type={'text'}
                text={'Descrição'}
                info={'name'}
                data={transaction}
                setData={setName}
                value={typeTransaction ? location.state.transaction.name : ''}
              />
              {!disabled ? (
                <GenericButton
                  size={'100%'}
                  disabled={disabled}
                  text={
                    <span>
                      {typeTransaction
                        ? `Modificar ${
                            transactionType === 'input' ? 'entrada' : 'saída'
                          }`
                        : `Salvar ${
                            transactionType === 'input' ? 'entrada' : 'saída'
                          }`}
                    </span>
                  }
                ></GenericButton>
              ) : (
                <GenericButton
                  size={'100%'}
                  disabled={disabled}
                  text={<ThreeDots color='#FFFFFF' height={80} width={80} />}
                ></GenericButton>
              )}
            </FormsContainer>
          </ContentContainer>
        </InputOutputContent>
      </PageContainer>
    </>
  );
}
