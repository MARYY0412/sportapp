import React, {useState} from 'react'
import styled from 'styled-components'


function Registration() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);


  const checkValues = () => {

    if(password === '' || username === '' || password2 === '' || email === '')
      setError('Uzupełnij wszystkie pola!')
    //CHECK PASSWORDS
    else if(password.length < 8)
      setError('Hasło nie może być krótsze niż 8 słów')
    else if(password !== password2)
      setError('Hasło muszą być takie same!')
    else if(!checkIsUpperCase(password))
      setError("Hasło musi zawierać chociaż jedną dużą literę!")
    else if(!checkIsLowerCase(password))
      setError("Hasło musi zawierać chociaż jedną małą literę!")
    else if(!checkSpecialCharacter(password))
      setError("Hasło musi zawierać chociaż jeden znak specjalny!")
    else if(!checkNumber(password))
      setError("Hasło musi zawierać chociaż jedną liczbę!")
    else if(!isValidEmail(email))
      setError("Wpisz odpowiedni email!")
    else
    {
      setIsValid(true);
      setError("");
    }
  }

  const submit = () => {
    checkValues();
  }



  //FUNKCJE POTRZEBNE DO WALIDACJI FORMULARZA

  //WALIDACJA HASŁA
  //sprawdzenie czy password posiada dużą literę
  const checkIsUpperCase = (word) => {
    return Boolean(word.match(/[A-Z]/));
  }
  //sprawdzenie czy password posiada chociaż jedną mała literę
  const checkIsLowerCase = (word) => {
    return Boolean(word.match(/[a-z]/));
  }
   //sprawdzenie czy password posiada chociaż jeden znak specjalny
  const checkSpecialCharacter = (word) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return regex.test(password);
  }
  //sprawdzenie czy password posiada chociaż jedną liczbę
  const checkNumber = (word) => {
    const regex = /\d/;
    return regex.test(password);
  }

  //WALIDACJA EMAILA
  const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }


  return (
    <Container>

      <div>
      <p>Username</p>
        <input type="text" value={username} onChange={(e) => {
          setUsername(e.target.value);
        }}></input>
      </div>

      <div>
        <p>Password</p>
        <input type="text" value={password} onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
      </div>
      
      <div>
        <p>Repeat password</p>
        <input type="text" value={password2} onChange={(e) => {
          setPassword2(e.target.value)
        }}></input>
      </div>
      
      <div>
        <p>Email</p>
        <input type="email" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
      </div>

      <Button type='submit' onClick={submit}>REGISTER</Button>
      
      <InfoSection>
          <a href='#'>forgot password?</a>
          <a href='#'>register</a>
          <p className='error-p'>{error}</p>
      </InfoSection>
      
    </Container>
  )
}

export default Registration

const Container = styled.div`
  background-color: rgba(255,255,255, 0.8);
  backdrop-filter: blur(2px);

  width: 20rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1vh;
    
    input{
      text-align: center;
      height: 5vh;
      background-color: rgba(15,100,150, 0.5);
      transition: 2s all;
      border: none;
    }  
    input:hover{

    -webkit-box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
    }

    *{
      margin: 1vh;
    }

  }
`

const Button = styled.button`
  width: 80%;
  padding: 2vh;
  border: none;
  letter-spacing: 1vh;
  transition: 2s all;

  :hover{
  cursor: pointer;
  border: none;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
}
`

const InfoSection = styled.div`

    a
    {
      text-align: center;
      text-decoration: none;
      color: rgba(15,100,150);
      padding: 1vh;

      transition: 2s all;
    }
    a:hover
    {
      background-color: white;
    }

    .error-p{
      text-align: center;
      color: red;
      font-size: 15px;
    }
`