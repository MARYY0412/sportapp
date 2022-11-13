import './App.css';
import { Link, Route, Routes }  from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home';
import Running from './pages/Running'
import Bike from './pages/Bike'
import Profile from './pages/Profile'

import {FiUserCheck} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'
import {MdDirectionsBike} from 'react-icons/md'
import {FaRunning} from 'react-icons/fa'

function App() {
  return (
      <div className="App">
        
        <Navigation>
          <NavbarLink to="/"><IoMdHome className='icon'/>HOME</NavbarLink>
          <NavbarLink to="/bike"><MdDirectionsBike className='icon'/>BIKE</NavbarLink>
          <NavbarLink to="/running"><FaRunning className='icon'/>RUNNING</NavbarLink>
          <NavbarLink to="/profile"><FiUserCheck className='icon'/>PROFILE</NavbarLink>
        </Navigation>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bike" element={<Bike />}/>
          <Route path="/running" element={<Running />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Routes>

        <Footer>
          <p>Obraz autorstwa rawpixel.com na Freepik</p>
          <p>created by MR</p>   
        </Footer>

      </div> 
  );
}

export default App;

const Navigation = styled.div`
  margin: 2rem 0rem;
  padding: 2rem;

  background-color: rgba(255,255,255, 0.8);
  backdrop-filter: blur(2px);

  width: 90%;
  display: flex;
  justify-content: space-evenly;
`

const NavbarLink = styled(Link)`
    text-decoration: none;
    font-family: Arial;
    letter-spacing: 5px;
    color: black;

    display: flex;
    padding: 2vh;

    transition: 2s all;
  :hover{
    background-color: white;
    cursor: pointer;
  }
  .icon{
    font-size: 5vh;
    margin: 0rem 1rem;
  }
`

const Footer = styled.div`
    position: absolute;
    bottom: 20px;
    text-align: center;

    background-color: rgba(255,255,255, 0.8);
    backdrop-filter: blur(2px);

    width: 90%;
    height: 8rem;
    
    *{
      margin: 2rem;
    }
`