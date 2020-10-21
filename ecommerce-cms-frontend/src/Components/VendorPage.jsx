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

       

   }
   


    componentDidMount() {
        //this.props.getEverything()
    }
   
    render(){

    
    return(
        <div>
        
       
       

        <div id="Brands">
            <h1>Brands</h1>
           

        </div>

        <div id="Categories">
            <h1>Category</h1>
            

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