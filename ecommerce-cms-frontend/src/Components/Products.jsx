import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import './styles/productStyles.css'
import {connect} from 'react-redux'
import { Image } from 'cloudinary-react';
import {useSelector} from 'react-redux'


const Products = (props) =>  {
  
    
         const [offset, setOffset] = React.useState(0)
          const [data, setData]=  React.useState([])
          const [perPage, setPerPage ]= React.useState(12)
          const [currentPage, setCurrentPage] =  React.useState(0)
         const [pageCount, setPageCount] = React.useState(0)
        const [postData, setPostData] = React.useState([])

       const Products = useSelector ( state => state.products)



  const recievedData = () => {
       if (Products) {

    const slice = Products.slice(this.state.offset, this.state.offset + this.state.perPage)
    const postData = slice.map(product => <React.Fragment>
        <p>{product.Name}</p>
        <Image publicId={product.photoId} cloudName="prakhar-parashar" width="150" height="150"/>
    </React.Fragment>)

setPageCount(Math.ceil(this.Products.length / this.state.perPage))
setPostData(postData)
}
  } 



  const  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setCurrentPage(selectedPage)
   setOffset(offset)
  recievedData()
   

};

 React.useEffect(() => {
     recievedData()
 }, [])
   

    

     
  
      return (
          <div>
              {postData}
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