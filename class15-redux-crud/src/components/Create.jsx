import React, { useState } from 'react'

const Create = () => {
    const [blog, setBlog] = useState({
        title:"",
        subTitle:'',
        image:'',
        content:''
    })
    const readValue = (e) => {
        const {name, value} = e.target;
        setBlog({...blog,[name]:value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3">Create Blog</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="title">Title</label>
                                <input type="text" name='title' id='title' onChange={readValue}  value={blog.title} className='form-group' required/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="title">Sub Title</label>
                                <input type="text" name='title' id='title' onChange={readValue}  value={blog.subTitle} className='form-group'required/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="title">Image Url</label>
                                <input type="text" name='image' id='image' onChange={readValue}  value={blog.image} className='form-group'required/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="title">Content</label>
                                <input type="text" name='image' id='image' onChange={readValue}  value={blog.content} className='form-group'required/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" name='image' id='image' value='Create' className='btn btn-outline-success'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create