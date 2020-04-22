import React, {useState} from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

const MarsRoverPhotos = ({data}) => {
  return (
    <div>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000,
        }}
      >
        {data.slice(1, 10).map((d) => (
          <Slide image={<img key={d.id} alt="" src={d.img_src} />}>
            <Caption
              placement="right"
              style={{height: '30px', paddingTop: '175px'}}
            >
              <h3>{d.camera.name}</h3>
              <h5 className="light grey-text text-lighten-3">
                {d.camera.full_name}
              </h5>
            </Caption>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default MarsRoverPhotos;
