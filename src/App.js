import {Route,Routes} from 'react-router-dom';
import SignIn from './SignIn/Signin';
import FirstView from './FirstView/FirstView';
import AddRide from './AddRide/First'
const App=()=>{
return <Routes>
  <Route path="/" element={<FirstView/>}/>
 <Route path="/signin" element={<SignIn/>}/>
 <Route path="/addRide" element={<AddRide/>}/>
</Routes>

};
export default App;
