import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { getEverythingAction } from '../Redux/Actions/actions'
import { Link } from 'react-router-dom';
import Products from './Products'




class VendorPage extends React.Component {



    componentDidMount() {
        this.props.getEverythingAction()
    }

    render() {



        return (
           

                   



                    
                        <div id="Products" style={{ textAlign: "center" }}>
                            <h2>New Products</h2>
                            <br></br><br></br>
                            <Products />
                           
                          

                        </div>




                    

        )
    }
}



const mapDispatch = {
    getEverythingAction: getEverythingAction
}

export default connect(null, mapDispatch)(VendorPage)