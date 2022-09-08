import { ThreeDots } from 'react-loader-spinner';
import InputField from '../../Shared/InputField';
import GenericButton from '../../Shared/GenericButton';
import PageLogo from '../../Shared/PageLogo';
import { FormsContainer } from './LoginStyles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Background } from '../../Styles/Background';
import { PageContainer } from '../../Shared/PageContainer';
import Redirect from '../../Shared/Redirect';

export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const [failure, setFailure] = useState(false);
  const [cacheverified, setCacheVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  function HandleSubmit(event) {
    event.preventDefault();
    setDisabled(!disabled);
    let submitteddata = { ...user };
    submitteddata = {
      email: email,
      password: password,
    };
    setUser(submitteddata);
    console.log(submitteddata);
    HandleSuccess();
  }

  function HandleSuccess() {
    navigate('/home');
  }

  return (
    <>
      <PageContainer>
        <Background></Background>
        <PageLogo />
        <FormsContainer
          onSubmit={(event) => {
            HandleSubmit(event);
          }}
        >
          <InputField
            info={'email'}
            disabled={disabled}
            type='email'
            text={'email'}
            data={user}
            setData={setEmail}
          ></InputField>
          <InputField
            info={'password'}
            disabled={disabled}
            type='password'
            text={'senha'}
            data={user}
            setData={setPassword}
          ></InputField>
          {!disabled ? (
            <GenericButton
              disabled={disabled}
              text={<span>Entrar</span>}
            ></GenericButton>
          ) : (
            <GenericButton
              disabled={disabled}
              text={<ThreeDots color='#FFFFFF' height={80} width={80} />}
            ></GenericButton>
          )}
        </FormsContainer>
        <Link to={`/sign-in`}>
          <Redirect>Não tem uma conta? Cadastre-se!</Redirect>
        </Link>
      </PageContainer>
    </>
  );
}
