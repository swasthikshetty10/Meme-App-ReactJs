
// import React from 'react'
import SidebarRow from './SidebarRow.js'
// import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

// import { BrowserRouter , Switch ,Route} from 'react-router-dom'
// import {useState} from 'react-dom'
// function Sidebar() {
//     return (
//         <>
//         <BrowserRouter>
//         <SidebarWrapper>
          
//             <div className="CloseIcon"><CloseIcon/></div>
            
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>
//             <SidebarRow name="DankMeme" />
//             <SidebarRow name="DesiMeme"/>

//         </SidebarWrapper>
//         </BrowserRouter>
//         </>
        
//     )
// }

// export default Sidebar


import styled from 'styled-components'
import React, { useState } from 'react';


import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SidebarWrapper> 
      <IconContext.Provider value={{ color: 'rgb(0, 0, 0)' }}>
        
            <div  className="BarBtn">
            <ArrowForwardIosIcon fontSize="" color = 'black'  onClick={showSidebar} />
            </div>
       
        <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <div className='sidebar-menu-items' onClick={showSidebar}>
            <div className='toggleIcon'>
             
            <div className="CloseIcon"><CloseIcon/></div>
            
            </div>
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  
                  <SidebarRow name={item.title}/>
                  
                </div>
              );
            })}
          </div>
        </div>
      </IconContext.Provider>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
>  .MuiSvgIcon-root{
    color: #000;
    position: absolute;
    right: 0;
    z-index: 9999;
    line-height: 20px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 22px;
    top: 55px;
    cursor: pointer;
}
.sidebar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
}

.CloseIcon {
    padding : 10px;
    cursor : pointer;
}

.menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
}

.sidebar-menu {
    background-color: #d4d4d4;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
}

.sidebar-menu.active {
    left: 0;
    transition: 350ms;
}



.sidebar-menu-items {
    width: 100%;
}

.sidebar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
}
.BarBtn : hover{
    cursor : pointer;
}
.BarBtn > .MuiSvgIcon-root {
    color: gray;
}

.BarBtn:hover>.MuiSvgIcon-root {
  color: rgb(129, 89, 240);
}

.CloseIcon > .MuiSvgIcon-root {
    
}

.CloseIcon:hover>.MuiSvgIcon-root {
    color: gray;
}
.BarBtn{
    padding: 1px;

}
`