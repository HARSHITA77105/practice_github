import logo from './logo.svg';
import './App.css';
import GridPractice from "./GridPractice";
import Memories from './UI/Memories';
import Sidebar from './UI/Sidebar';

import Routing from './routes/Routing'

function App() {
  return (
    <div className="App">
      {/* <GridPractice/> */}
      <Memories/>
      <Sidebar/>


      

      {/* <Routing/> */}

    </div>

  
    
  );
}

export default App;
