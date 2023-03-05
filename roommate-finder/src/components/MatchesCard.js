import React from 'react';
import {Row, Button} from 'react-bootstrap';

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
                    <div className="col-md-4">
                         <Row className="mb-3 mt-1">
                              <img className="img-fluid shadow-2-strong rounded-5" alt="Profile" src="https://media.istockphoto.com/id/639805094/photo/happy-man.jpg?s=612x612&w=0&k=20&c=REx0Usczge4a0soQvp7fQgGCcFMHeORGUTpOIPW-IYA="/>
                         </Row>
                         <Row>
                              <div className = "text-center">
                                   <p>{props.phone_number}</p>
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