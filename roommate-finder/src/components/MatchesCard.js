import React from 'react';
import { Row } from 'react-bootstrap';

export default function MatchesCard(props) {

     let imageURL; 

     function mapGender(gender) {
          if (gender === 3) return "Other";
          else if (gender === 2) return "Non-binary";
          else if (gender === 1) return "Female";
          else return "Male";
     }

     return (
          <div id="outerCard" className="card mx-3">
               <div className="row g-0 m-2">
                    <div className="square col-md-3">
                         <Row className="m-4">
                              <img className="img-fluid rounded-circle" alt="Profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"/>
                         </Row>
                         <Row>
                              <div className="text-center">
                                   <p>Contact: {props.phone_number}</p>
                              </div>
                         </Row>
                    </div>
                    <div className="col-md-3">
                         <div className="card-body">
                              <h2 className="card-title">{props.first_name} {props.last_name}</h2>
                              <p className="card-text">Gender: {mapGender(props.gender)}</p>
                              <p className="card-text">Age: {props.age}</p>
                              <p className="card-text">School: {props.school}</p>
                              <p className="card-text">Location: {props.city}, {props.state}</p>                  
                              <p className="card-text"><small className="text-muted">${props.price_lower} - ${props.price_upper}</small></p>
                         </div>
                    </div>
                    <div className="vr my-5"></div>
                    <div className="card-body col-md-4 mx-3">
                         <h2 className="card-title text-center">About Me</h2>
                         <p>{props.aboutMe}</p>
                    </div>
               </div>
          </div>

     )
}