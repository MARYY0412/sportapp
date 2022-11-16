import React, {useState} from 'react'
import styled from 'styled-components'


function Registration() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

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
        <input type="password" value={password} onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
      </div>
      
      <div>
        <p>Repeat password</p>
        <input type="password" value={password2} onChange={(e) => {
          setPassword2(e.target.value)
        }}></input>
      </div>
      
      <div>
        <p>Email</p>
        <input type="email" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
      </div>

      <Button type='submit'>REGISTER</Button>
      
      <InfoSection>
          <a href='#'>forgot password?</a>
          <a href='#'>register</a>
      </InfoSection>
      
    </Container>
  )
}

export default Registration

const Container = styled.div`
  background-color: rgba(255,255,255, 0.8);
  backdrop-filter: blur(2px);

  width: 20rem;
  height: 35rem;

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
`