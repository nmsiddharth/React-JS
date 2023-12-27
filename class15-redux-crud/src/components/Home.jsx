import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteBlog, retrieveBlogs } from '../Action/BlogAction';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initFetch = useCallback(()=>{
    dispatch(retrieveBlogs())
  }, [dispatch])

  useEffect(()=>{
    initFetch();
  }, [initFetch]);

// read data from redux state
  const blogs = useSelector((item)=>item.blogs);

  //delete handler
  const delHandler = async(id) => {
    if (window.confirm(`Are you sure to delete a blog id = ${id}?`)) {
      dispatch(deleteBlog({id: id}))
      .unwrap()
      .then((res)=>{
        toast.success("Blog is successfully deleted.")
        navigate(`/`)
      })
      .catch(err=> toast.error(err.message))
  }else{
    toast.warning('delete terminated')
  }
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col text-center">
        <h5 className="display-3 fw-bold">Blogs</h5>
      </div>
    </div>
    <div className="row">
        {
          blogs && blogs.map((item, index) => {
            const {id,title, subTitle, image, content}= item;
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
              <div className="card">
                  <img src={image} alt={title} className='img-fluid shadow' style={{height:"300px"}} />
                  <div className="card-body">
                      <h2 className="text-center text-success text-uppercase my-3">{title}</h2>
                      <h4 className="text-center text-warning my-3">{subTitle}</h4>
                      <p className="text-justify text-secondary my-3">{content}</p>
                  </div>
                  <div className="card-footer">
                      <NavLink to={`/update/${id}`} className="btn btn-sm btn-primary">
                          <i className='bi bi-pen'></i>
                      </NavLink>
                      <button className='btn btn-sm btn-danger float-end'>
                          <i className='bi bi-trash' onClick={()=> delHandler(id)}></i>
                      </button>
                  </div>
              </div>
          </div>
            )
          })
        }  
    </div>
  </div>
  )
}

export default Home;