import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import './styles/productStyles.css'
import {connect} from 'react-redux'
import { Image } from 'cloudinary-react';
import {useSelector} from 'react-redux'


const Products = (props) =>  {
  
    
         const [offset, setOffset] = React.useState(0)
          const [data, setData]=  React.useState([])
          const [perPage, setPerPage ]= React.useState(9)
          const [currentPage, setCurrentPage] =  React.useState(0)
         const [pageCount, setPageCount] = React.useState(0)
        const [postData, setPostData] = React.useState([])

        const Products = useSelector ( state => state.products)

   

  const recievedData = () => {
    
       if (Products) {
        console.log("hey")
    const slice = Products.slice(offset, offset + perPage)
    console.log(slice)
    const postData = slice.map(product => <div >
        
        <Image publicId={product.photoId} cloudName="prakhar-parashar" width="150" height="150"/>
        <p>{product.Name}</p>
    </div>)

setPageCount(Math.ceil(Products.length / perPage))
setPostData(postData)
}
  } 



  const  handlePageClick = (e) => {
      console.log("hi")
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setCurrentPage(selectedPage)
   setOffset(offset)
    recievedData()
   

};

 React.useEffect(() => {
     
        console.log(Products)
     
  
     recievedData()
 }, [Products])
   

    

     
  
      return (
          <div style={{display : "grid"}}>
              {(postData) ? <div style={{display : "grid", gridTemplateColumns : "auto auto auto"}}> {postData}  </div>: null}
              <br></br>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                  
          </div>

      )
  }



export default Products