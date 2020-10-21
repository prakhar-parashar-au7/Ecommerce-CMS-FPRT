import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
//import { connect } from 'react-redux'
import {getEverything} from '../Redux/Actions/actions'


//import {getEverything} from ''
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
            userModalShow: false
    }

   }
   


    componentDidMount() {
        //this.props.getEverything()
    }
   
    render(){

    
    return(
        <div>
        <div id="users">
            <h1>Users</h1>
          <Link to='/addUser'><Button variant="contained" color="primary" >Add More</Button></Link>  
          
        </div>
       
        <div id="vendors">
            <h1>vendors</h1>
            <Link to='/addVendor'><Button variant="contained" color="primary" >Add More</Button></Link> 

        </div>

        <div id="Brands">
            <h1>Brands</h1>
            <Link to='/addBrand'><Button variant="contained" color="primary" >Add More</Button></Link>

        </div>

        <div id="Categories">
            <h1>Category</h1>
            <Link to='/addCategory'><Button variant="contained" color="primary" >Add More</Button></Link>

        </div>

        <div id="Products">
            <h1>Products</h1>
            <Link to='/addProduct'><Button variant="contained" color="primary" >Add More</Button></Link>

        </div>
    

        </div>
        
    )
}
}


// const mapState = (state) => {
//     return {

//     }
// }

// const mapDispatch = {
//     getEverything : getEverything
// }

export default AdminPage