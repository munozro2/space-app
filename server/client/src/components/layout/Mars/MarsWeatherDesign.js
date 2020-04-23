import React from 'react';
import land from '../images/mars-surface-artists-impression.jpg';
import _ from 'lodash';

const MarsWeatherDesign = ({data}) => {
  // const arr = _.values(weather);
  const arr = _.map(data, (value, key) => ({
    key,
    ...value,
  }));

  console.log(arr.slice(0, 7));
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          backgroundImage: `url(${land})`,
          height: '400px',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          marginTop: '30px',
        }}
      >
        {' '}
        <p style={{textAlign: 'center'}}>Mars Insight Weather Service</p>
        <div>
          {arr.slice(0, 7).map((data) => (
            <div
              class="text-block"
              style={{
                bottom: '20px',
                right: '20px',
                backgroundColor: 'black',
                color: 'white',
                paddingLeft: '20px',
                paddingRight: '20px',
                float: 'left',
                height: '10',
                opacity: '0.5',
                marginRight: '40px',
              }}
            >
              <h5 style={{fontSize: '15px'}}>Sol {data.key}</h5>
              <h5 style={{fontSize: '15px'}}>High: {data.AT.av}F</h5>
              <h4></h4>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MarsWeatherDesign;
