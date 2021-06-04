
import SidebarRow from './SidebarRow.js'
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SidebarWrapper>
      <IconContext.Provider className="Content" value={{ color: 'rgb(0, 0, 0)' }}>

        <div className="BarBtn">
          <ArrowForwardIosIcon fontSize="" color='black' onClick={showSidebar} />
        </div>

        <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <div className='sidebar-menu-items' onClick={showSidebar}>
            <div className='toggleIcon'>

              <div className="CloseIcon"><CloseIcon /></div>

            </div>
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>

                  <SidebarRow name={item.title} />

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
  overflow-y : scroll;
    top: 148px;
    
    background-color: #d4d4d4;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    left: -100%;
    transition: 850ms;
    @media only screen and (max-device-width: 480px){
      top: 120px;

  }
  @media only screen and (min-device-width: 826px){
   
    top: 78px;
}
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