import React, {useEffect, useState, useCallback} from 'react';
import MarsRoverPhotos from '../layout/Mars/MarsRoverPhotos';
import MarsWeatherDesign from './Mars/MarsWeather';
import MarsWeather from './Mars/MarsWeather';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [marsData, setMarsData] = useState([]);

  const getMarsData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/nasa/mars');
      if (res.ok) {
        const jsosData = await res.json();
        setMarsData(jsosData.photos.slice(1, 6));
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

  // if (isLoading) {
  // }
  // let temp = [];
  // for (let i = 0; i < marsData.length; i++) {
  //   temp.push(marsData[i].img_src);
  // }

  return (
    <div>
      <MarsRoverPhotos images={marsData} />
      <MarsWeather />
    </div>
  );
};

export default Dashboard;
