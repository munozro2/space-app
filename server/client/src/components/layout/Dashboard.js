import React, {useEffect, useState, useCallback} from 'react';
import MarsRoverPhotos from '../layout/Mars/MarsRoverPhotos';
import MarsWeatherDesign from './Mars/MarsWeather';
import MarsWeather from './Mars/MarsWeather';
import {Col, Row, Preloader} from 'react-materialize';
import _ from 'lodash';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [marsData, setMarsData] = useState([]);

  const getMarsData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch('/api/nasa/mars');

      if (res.ok) {
        const jsonData = await res.json();
        setMarsData(jsonData.photos);
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => console.log(marsData), [marsData]);

  useEffect(() => {
    getMarsData();
  }, [getMarsData]);

  if (isLoading) {
    return (
      <div>
        <Col s={4}>
          <Preloader active color="blue" flashing={false} size="big" />
        </Col>
      </div>
    );
  } else {
    return (
      <div>
        <MarsRoverPhotos data={marsData} />
      </div>
    );
  }

  // let temp = [];
  // for (let i = 0; i < marsData.length; i++) {
  //   temp.push(marsData[i].img_src);
  // }

  // return (
  //   <div>

  //     {isLoading ? (
  //       marsData
  //     ) : (
  //       <Col s={4}>
  //         <Preloader active color="blue" flashing={false} size="big" />
  //       </Col>
  //     )}

  //     <MarsRoverPhotos data={marsData} />
  //   </div>
  // );
};

export default Dashboard;
