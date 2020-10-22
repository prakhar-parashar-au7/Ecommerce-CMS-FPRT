import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import {getEverythingAction} from '../Redux/Actions/actions'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Card from './Card'
import UserCard from './userCard'
import Products from './Products'




class AdminPage extends React.Component {
  


    componentDidMount() {
        this.props.getEverythingAction()
    }
   
    render(){
        var settings = {
            dots: true,
            infinite: true,
             speed: 500,
            slidesToShow: 5,
             slidesToScroll: 1,
            arrows : true
           }

    
    return(
        <div>
        <div id="brands"  style={{textAlign : "center", textDecoration : "none"}}>
            <h3 >New Brands Launched</h3>
        {this.props.brands ? 
           <Slider {...settings}>       
               {this.props.brands.map((brand, index) => <Card photoId ={brand.photoId} Name = {brand.Name}/>)}
               
           </Slider> : null}
          <Link to='/addUser' style={{textDecoration : "none"}}><Button variant="contained" color="primary" style={{marginTop : "30px" }}>Add More</Button></Link>  
          
        </div>
       <br></br> <br></br> <br></br>


       <div style={{display : "grid", gridTemplateColumns : "auto auto auto"}}>
        <div id="vendors" >
            <h2 style={{marginLeft: "20px"}}>Vendors</h2>
            {
                (this.props.vendors) ? this.props.vendors.map((vendor, index) => 
                    <UserCard user = {vendor}/>
            ) : null
            }

            <Link to='/addVendor'><Button variant="contained" color="primary" >Add More</Button></Link> 

        </div>

        <div id="Products">
            <h1>Products</h1>
            <Products/>
            <Link to='/addProduct'><Button variant="contained" color="primary" >Add More</Button></Link>

        </div>

        <div id="users" >
            <h2 style={{marginLeft: "20px"}}>Users</h2>
            {
                (this.props.users) ? this.props.users.map((user, index) => 
                    <UserCard user = {user}/>
            ) : null
            }

            <Link to='/addUser'><Button variant="contained" color="primary" >Add More</Button></Link> 

        </div>
   </div>

   
        <div id="Categories">
            <h1>Category</h1>
            <Link to='/addCategory'><Button variant="contained" color="primary" >Add More</Button></Link>

        </div>

        
    

        </div>
        
    )
}
}


const mapState = (state) => {
    return {
      brands : state.brands,
      vendors : state.vendors,
      users : state.users

    }
}

 const mapDispatch = {
     getEverythingAction : getEverythingAction
 }

export default connect(mapState, mapDispatch)(AdminPage)