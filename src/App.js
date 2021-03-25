import logo from './logo.svg';
import './App.css';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


function App() {
  return (
    <div className="App" style={{backgroundColor:'black', color:'white'}}>
      <a>learnjs</a> 
      <br/>
    hi this my first app
    <br/>
    <button style={{backgroundColor:'darkgrey'}}>click me</button> 
    <BrowserView> this is browser view</BrowserView>
    <MobileView>This is mobile view </MobileView>
    </div>

    

  );
}

export default App;
