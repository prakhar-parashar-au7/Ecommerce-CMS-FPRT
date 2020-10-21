import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './Components/signUpForm.jsx'
import LoginForm from './Components/LoginForm.jsx';
import AdminPage from './Components/AdminPage.jsx'
import addUser from './Components/addUser.jsx'
import AddVendor from './Components/addVendor.jsx'
import AddBrand from './Components/addBrand.jsx'
import AddCategory from './Components/addCategory.jsx'
import AddProduct from './Components/addProducts.jsx'


function App() {


  return (
    <Router>
      

        <Route exact path="/" component={LoginForm} /> 
        <Route exact path="/signUp" component={SignUpForm}/>
         <Route exact path="/AdminPage" component={AdminPage} />
        <Route exact path="/addUser" component = {addUser}/>
        <Route exact path="/addVendor" component = {AddVendor} />
        <Route exact path="/addBrand" component = {AddBrand} />
        <Route exact path="/addCategory" component = {AddCategory} />
        <Route exact path="/addProduct" component = {AddProduct} />
        
    
    </Router>

  );
}

export default App;
