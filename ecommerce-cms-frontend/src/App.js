import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './Components/signUpForm.jsx'
import LoginForm from './Components/LoginForm.jsx';
import AdminPage from './Components/AdminPage.jsx'





function App() {


  return (
    <Router>
      

        <Route exact path="/" component={LoginForm} /> 
        <Route exact path="/signUp" component={SignUpForm}/>
         <Route exact path="/AdminPage" component={AdminPage} />
        {/*<Route exact path="/AdminPage" component = {Home}/>
        <Route exact path="/ProfileDetails" component = {ProfileDetails} />
        <Route exact path="/userProfile" component = {UserProfile}/> */}
    
    </Router>

  );
}

export default App;
