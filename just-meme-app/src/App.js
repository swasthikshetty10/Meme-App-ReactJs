
import './App.css';
import Header from './Components/Header.js'
import Sidebar from './Components/Sidebar.js'
import Feed from './Components/Feed.js'
function App() {
  return (
    <div> 
    {/* Header Components*/ }
    <Header/>
    {/* SideBar Components */ }
    <Sidebar/>
    {/* Feed Components */ }
    <Feed/>
    </div>
 
  );
}

export default App;
