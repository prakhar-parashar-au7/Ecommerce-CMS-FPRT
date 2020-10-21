import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
//import { connect } from 'react-redux'
import {getEverything} from '../Redux/Actions/actions'

import SimpleModal from './addUser.jsx'
//import {getEverything} from ''

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
            <Button variant="contained" color="primary" onClick = {() => {this.setState({userModalShow : true})}}>Add More</Button>
           
            <SimpleModal/>
        </div>
       
        <div id="vendors">
            <h1>vendors</h1>
            <Button variant="contained" color="primary">Add More</Button>

        </div>

        <div id="Brands">
            <h1>Brands</h1>
            <Button variant="contained" color="primary">Add More</Button>

        </div>

        <div id="Categories">
            <h1>Brands</h1>
            <Button variant="contained" color="primary">Add More</Button>

        </div>

        <div id="Products">
            <h1>Products</h1>
            <Button variant="contained" color="primary">Add More</Button>

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