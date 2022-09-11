import { ThreeDots } from 'react-loader-spinner';
import InputField from '../../Shared/InputField';
import GenericButton from '../../Shared/GenericButton';
import PageLogo from '../../Shared/PageLogo';
import { FormsContainer } from '../Login/LoginStyles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PageContainer } from '../../Shared/PageContainer';
import { Background } from '../../Styles/Background';
import Redirect from '../../Shared/Redirect';
import axios from 'axios';
import { stripHtml } from 'string-strip-html';

export default function Signin() {
  const [disabled, setDisabled] = useState(true);
  const [failure, setFailure] = useState(false);
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [name, setName] = useState('');
  const [password2, setPassword2] = useState('');
  const [user, setUser] = useState({
    email: '',
    password1: '',
  });
  let navigate = useNavigate();

  useEffect(() => {
    setDisabled(!disabled);
  }, [failure]);

  function HandleSubmit(event) {
    if (event === undefined) {
      return;
    }
    event.preventDefault();
    setDisabled(!disabled);
    let submitteddata = {
      email: email,
      name: stripHtml(name).result,
      password1: password1,
      password2: password2,
    };
    let dataValid = verifyData(submitteddata);
    if (dataValid) {
      const send = {
        name: submitteddata.name,
        email: submitteddata.email,
        password: submitteddata.password1,
      };

      console.log(send.name);

      axios
        .post('http://localhost:5000/sign-in', send)
        .then(handleSuccess)
        .catch(handleFailure);
    }
    if (!dataValid) {
      handleFailure();
    }
  }

  function verifyData(submitteddata) {
    if (submitteddata.password1 !== submitteddata.password2) {
      return false;
    }

    //Valid return true
    return true;
  }

  function handleSuccess(event) {
    setDisabled(!disabled);
    navigate('/');
  }

  function handleFailure(event) {
    if (event !== undefined) {
      console.log(event);
      //Wrong password:
      alert(
        'Não foi possível realizar seu cadastro! Verifique as informações inseridas'
      );
      //Email already registered:

      setFailure(!failure);
    } else {
      setFailure(!failure);
    }
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
            info={'name'}
            disabled={disabled}
            type='text'
            text={'nome'}
            setData={setName}
          ></InputField>
          <InputField
            info={'password'}
            disabled={disabled}
            type='password'
            text={'senha'}
            setData={setPassword1}
          ></InputField>
          <InputField
            info={'password'}
            disabled={disabled}
            type='password'
            text={'Confirme sua senha'}
            setData={setPassword2}
          ></InputField>
          {!disabled ? (
            <GenericButton
              disabled={disabled}
              text={<span>Cadastrar</span>}
            ></GenericButton>
          ) : (
            <GenericButton
              disabled={disabled}
              text={<ThreeDots color='#FFFFFF' height={30} width={50} />}
            ></GenericButton>
          )}
        </FormsContainer>
        <Link to={`/`}>
          <Redirect>Já tem uma conta? Faça login!</Redirect>
        </Link>
      </PageContainer>
    </>
  );
}
