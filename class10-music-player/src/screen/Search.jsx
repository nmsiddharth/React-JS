import React, { useState } from 'react'

const Search = (props) => {
    const [artist, setArtist] = useState();

    const submitHandler = (e)=>{
        e.preventDefault();
        props.searchName(artist)
    }
  return (
    <div className="row">
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                       <div className="input-group">
                       <input type="text" name='artist' id='artist' className="form-control" placeholder='Enter Artist Name' value={artist} required onChange={(e)=>setArtist(e.target.value)}/>
                        <button type="button" className='btn btn-outline-success ms-3
                        ' onClick={submitHandler}><i className='bi bi-search'></i></button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search