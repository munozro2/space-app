import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Landing = () => {
  const [pictureOTD, setPictureOTD] = useState([]);

  useEffect(() => {
    getPictureOTD(); //run our async fetch once per render
  }, []);

  const getPictureOTD = async () => {
    const response = await fetch('/api/nasa/POTD');
    const data = await response.json();
    setPictureOTD(data);
    console.log(data);
  };

  return (
    <div style={{height: '75vh'}} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <img src={pictureOTD.url} />
          <h4 style={{textAlign: 'center'}}>
            <b>Eternal Space</b> with Authorization
          </h4>
        </div>
        <br />
        <div className="col s6">
          <Link
            to="/register"
            style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Register
          </Link>
        </div>
        <div className="col s6">
          <Link
            to="/login"
            style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}
            className="btn btn-large  waves-effect white black-text"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
