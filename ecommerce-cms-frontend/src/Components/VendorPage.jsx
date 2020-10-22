import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { getEverythingAction } from '../Redux/Actions/actions'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Card from './Card'
import UserCard from './userCard'
import Products from './Products'
import { Image } from 'cloudinary-react';




class VendorPage extends React.Component {



    componentDidMount() {
        this.props.getEverythingAction()
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true
        }


        return (
            <div>
                <div id="brands" style={{ textAlign: "center", textDecoration: "none" }}>
                    <h3 >New Brands Launched</h3>
                    {this.props.brands ?
                        <Slider {...settings}>
                            {this.props.brands.map((brand, index) => <Card photoId={brand.photoId} Name={brand.Name} />)}

                        </Slider> : null}
                  

                </div>
                <br></br> <br></br> <br></br>


                   



                    <div >
                        <div id="Products" style={{ textAlign: "center" }}>
                            <h2>New Products</h2>
                            <br></br><br></br>
                            <Products />
                            <br></br>
                            <Link to='/addProduct' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" >Add More</Button></Link>

                        </div>




                    </div>
                    <br></br><br></br><br></br><br></br>



            
                
                <div id="category" style={{ textAlign: "center", textDecoration: "none" }}>
                            <h3 >Categories</h3>
                            {this.props.categories ?

                                <Slider {...settings}>

                                    {this.props.categories.map((category, index) => <div style={{ boxShadow: "3px 3px 4px 2px rgba(0,0,0,0.2)", textAlign: "center", width: "60px", height : "60px", marginBottom: "20px" }}>
                                         <div style={{marginLeft: "30px"}}>
                                         <Image publicId={category.photoId} cloudName="prakhar-parashar" width="60" height="60" /> 
                                         </div>
                                        <p>{category.Name}</p>
                                        
                                        
                                    </div>)}

                                </Slider> : null}
                           
          
        </div>







            </div>

        )
    }
}


const mapState = (state) => {
    return {
        brands: state.brands,
        categories: state.categories

    }
}

const mapDispatch = {
    getEverythingAction: getEverythingAction
}

export default connect(mapState, mapDispatch)(VendorPage)