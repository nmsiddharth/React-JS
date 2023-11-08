import React, { Component } from 'react'
import Address from './Address';

export default class UserCard extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    const {firstName, lastName, image, email} = this.props;
    return (
      <div>
        <div className="container">
            <div className='row'>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="card my-2 text-center">
                    <img src={image ? image: "#"} alt="" className='rounded-circle img-fluid'/>
                    <h4 className='text-dark'>{firstName + " " + lastName}</h4>
                    <div className="card-body">
                        <details>
                            <summary>Details</summary>
                            <p className='text-secondary'>
                                <i className='bi bi-envelope-open-fill'></i>
                                <span className="text-primary">{email}</span>
                            </p>
                            <Address addr = {this.props.address}/>
                        </details>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
