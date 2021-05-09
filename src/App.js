import {Route, Switch} from 'react-router-dom'
import './App.css';
import FresherJobs from './Component/FresherJobs';
import Internships from './Component/Internships';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import OnlineTrainings from './Component/OnlineTrainings';
import Register from './Component/Register';
import WorkFromHome from './Component/WorkFromHome';



function App() {


 
  return (
   <>
   <Navbar/>
    <Switch>
    <Route exact  path = "/" component ={Internships}/>
    <Route exact path="/OnlineTrainings" component ={OnlineTrainings} />
    <Route exact path="/FresherJobs" component ={FresherJobs} />
    <Route exact path = "/Login" component={Login} />
    <Route exact path="/Register" component ={Register} /> 
    <Route exact path="/workfromhome" component={WorkFromHome} />

    

    </Switch>
    

    </>
  
  );
}

export default App;
