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

export default function Signin() {
  const [disabled, setDisabled] = useState(false);
  const [failure, setFailure] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();

  function HandleSubmit(event) {
    if (event === undefined) {
      return;
    }
    event.preventDefault();
    setDisabled(!disabled);
    const submitteddata = {
      email: email,
      name: name,
      image: photo,
      password: password,
    };

    axios
      .post('localhost:5000/login', submitteddata)
      .then(HandleSuccess)
      .catch(HandleFailure);
  }

  function HandleSuccess(event) {
    setDisabled(!disabled);
    console.log('success');
    //navigate('/');
  }

  function HandleFailure(event) {
    console.log('failure');
    if (event !== undefined) {
      alert(
        'Não foi possível realizar seu cadastro! Tente novamente com outras informações'
      );
      setFailure(!failure);
    }
  }

  useEffect(() => {
    setDisabled(false);
  }, [failure]);

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
            setData={setPassword}
          ></InputField>
          <InputField
            info={'name'}
            disabled={disabled}
            type='text'
            text={'nome'}
            setData={setName}
          ></InputField>
          <InputField
            info={'image'}
            disabled={disabled}
            type='text'
            text={'foto'}
            setData={setPhoto}
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
