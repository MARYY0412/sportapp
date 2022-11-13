import './App.css';
import { Link, Route, Routes }  from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home';
import Running from './pages/Running'
import Bike from './pages/Bike'
import Profile from './pages/Profile'



function App() {
  return (
      <div className="App">

        <Navigation>
          <NavbarLink to="/">HOME</NavbarLink>
          <NavbarLink to="/bike">BIKE</NavbarLink>
          <NavbarLink to="/running">RUNNING</NavbarLink>
          <NavbarLink to="/profile">PROFILE</NavbarLink>
        </Navigation>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bike" element={<Bike />}/>
          <Route path="/running" element={<Running />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Routes>
        
      </div> 
  );
}

export default App;

const Navigation = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const NavbarLink = styled(Link)`
  color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 1rem;
    transition: 2s all;
  :hover{
    color: white;
    background-color: darkblue;
    cursor: pointer;
  }
`