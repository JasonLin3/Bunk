import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login(props) {

    const updateStatus = props.change;

    const nav = useNavigate();

  return (
    <div className="row">
        <form className="col-md-4 offset-md-4 my-5">
            <h3 className='text-center'>Sign In</h3>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
            />
            </div>
            <div className="d-grid">
            <button onClick={(e) => {
                updateStatus();
                nav('/');
            }} type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
        </form>
      </div>
    )
  }
