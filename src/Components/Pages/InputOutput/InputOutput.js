import { Background } from '../../Styles/Background';
import PageContainer from '../../Styles/PageContainer';
import { InputOutputContent, ContentContainer } from './InputOutputStyles';
import PageHeader from '../../Styles/PageHeader';
import { AuxButton, AuxDiv } from '../Home/HomeStyles';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import InputField from '../../Shared/InputField';
import { useState } from 'react';
import { FormsContainer } from '../Login/LoginStyles';
import GenericButton from '../../Shared/GenericButton';
import { ThreeDots } from 'react-loader-spinner';

export default function InputOutput() {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  const transactionType = location.state.type;

  const [transaction, setTransaction] = useState({
    type: transactionType,
    name: '',
    value: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const submitteddata = { ...transaction };
    submitteddata.value = value;
    submitteddata.name = name;
    console.log(submitteddata);

    //VerifyData
    //Cash Regex:
    //^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$

    //Data ok ? send to server

    //data sent ? navigate to home
  }

  return (
    <>
      <PageContainer>
        <Background></Background>
        <InputOutputContent>
          <PageHeader>
            <AuxDiv>
              Nova {transactionType === 'input' ? 'entrada' : 'saída'}
            </AuxDiv>
            <AuxButton size={'35px'} onClick={() => navigate('/home')}>
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
              />
              <InputField
                size={'100%'}
                disabled={false}
                type={'text'}
                text={'Descrição'}
                info={'name'}
                data={transaction}
                setData={setName}
              />
              {!disabled ? (
                <GenericButton
                  size={'100%'}
                  disabled={disabled}
                  text={<span>Entrar</span>}
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
