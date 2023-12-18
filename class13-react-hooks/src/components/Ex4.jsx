import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const URL = "https://fakestoreapi.com"

const Ex4 = (props) => {

  const  [products, setProducts] = useState([]);

  //pagination states
const [currentItems, setCurrentItems] =  useState([]) // current filtered data
const [offset, setOffset] =  useState(0) // starting index
const [pageCount, setPageCount] =  useState(0)

 // useEffect => api call, initial values
 const getProducts = async () => {
  await fetch(`${URL}/products`)
  .then(res=> res.json())
  .then(out =>{
    setProducts(out)
  }).catch(err=>console.log(err.message))
}

useEffect(()=>{
  getProducts();
  const endOffset = offset + props.itemsPerPage
  const data = products ? products.slice(offset, endOffset) : []
  setCurrentItems(data);
  const pCount = Math.ceil(products.length / props.itemsPerPage)
  setPageCount(pCount)
}, [products])

 // page click handler , e = event
 const handler = (e) => {
  console.log(e.selected);
  const newOffset = Number(e.selected * props.itemsPerPage) % products.length;
  console.log(newOffset);
  setOffset(newOffset)
}

if(!products){
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h3 className="display-3 text-center text-success">No Products.. Server Error</h3>
      </div>
    </div>
    </div>
  )
} else {
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h5 className="display-3 text-center text-success">useEffect Hook</h5>
        <p className='text-secondary'>useEffect is a tool that lets us to interact with the outside world but not affect the rendering or performance of the component that it's in.</p>
      </div>
    </div>
    <div className="row">
      {
        currentItems && currentItems.map((item, index)=>{
          return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key ={index}>
              <div className="card my-3">
                <img src={item.image ? item.image : '#'} alt="no product image" className='img-fluid p-2'/>
                <div className="card-body">
                  <h5 className="text-success text-center">{item.title}</h5>
                  <ul className='list-group'>
                      <li className='list-group-item'>
                        <strong>Price</strong>
                        <span className='float-end text-success'>&#8377; {item.price}</span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    <div className="row my-3">
      <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
        <ReactPaginate
          pageCount={pageCount}
          className='pagination'
          pageClassName="page-item"
          pageLinkClassName="page-link"
          nextClassName='page-item'
          nextLinkClassName="page-link"
          previousClassName='page-item'
          previousLinkClassName='page-link'
          activeClassName='active'
          activeLinkClassName='active'
          onPageChange={handler}
        ></ReactPaginate>
      </div>
    </div>
    </div>
  )
}
}
  

export default Ex4