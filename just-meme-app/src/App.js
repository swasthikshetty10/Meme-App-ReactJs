
import './App.css';
import Header from './Components/Header.js'

import Feed from './Components/Feed.js'
import styled from 'styled-components'
function App() {
  return (
    <div> 
    {/* Header Components*/ }
    <Header/>
    {/* SideBar Components */ }
    <Body>
   
    {/* Feed Components */ }
    <Feed/>
    </Body>
    </div>
 
  );
}

export default App;

const Body = styled.div`

`