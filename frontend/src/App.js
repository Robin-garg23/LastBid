import React, { useState } from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import SignIn from "./components/SignIn";
import DashBoard from "./components/DashBoard";
import My_Orders from "./components/My_Orders";
import NavBar from "./components/NavBar";
import MyProfile from "./components/MyProfile";
import { BrowserRouter as Router ,Switch, Route} from "react-router-dom";


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
  
 
    
    const App = () => {
        const [isLogin, setisLogin]=useState(false);
        const [Id,setId]=useState('0');
        // setId(1);
        const classes = useStyles();
        return (
            
            <Router>
            <div>
              {isLogin?<NavBar />:""}
              <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                
                    <Route exact path="/" component={()=>(
                       <SignIn setisLogin={setisLogin} setId={setId}/>
                    )} />
                    {/* <Route exact path='/NavBar' component={DashBoard} /> */}
                    <Route path='/DashBoard' component={()=>(
                       <DashBoard setisLogin={setisLogin} userid={Id} />
                       )}/>
                    <Route path='/Orders' component={()=>(
                       <My_Orders setisLogin={setisLogin} userid={Id} />
                       )}/>
                    <Route path='/Profile' component={()=>(
                       <MyProfile setisLogin={setisLogin} userid={Id} />
                       )}/>
                    {/* <Route path='/My_Orders' component={My_Orders} /> */}
                   
                    {/* <Route path="/Products" component={Products} /> */} *
                </Switch>
            </div>
            </Router>
        
        );
    
}
  
export default App;
