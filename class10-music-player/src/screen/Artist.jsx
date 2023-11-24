import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from './Image';

const Artist = (props) => {
    const {id, name, images, genres, followers } = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 my-3">
        <div className="card">
            <Image data={images ? images[0] : false}/>
            <div className="card-body">
                <h5 className="text-center text-success p-3">{name}</h5>
            </div>
            <div className="card-footer">
                <NavLink to={`/track/${id}`} className={"btn btn-success"}>
                    TRACK
                </NavLink>
            </div>
        </div>
    </div>

  )
}

export default Artist;