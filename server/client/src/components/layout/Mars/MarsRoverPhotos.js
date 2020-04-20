import React, {useState} from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

const MarsRoverPhotos = ({images}) => {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 6000,
      }}
    >
      {images.map((d) => (
        <Slide image={<img key={d.id} alt="" src={d.img_src} />}>
          <Caption placement="center">
            <h3>{d.camera.name}</h3>
            <h5 className="light grey-text text-lighten-3">
              {d.camera.full_name}
            </h5>
          </Caption>
        </Slide>
      ))}
    </Slider>
  );
};

export default MarsRoverPhotos;
