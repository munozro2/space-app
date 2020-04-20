import React, {useEffect, useState, useCallback} from 'react';
import MarsWeatherDesign from './MarsWeatherDesign';
import land from '../images/mars-surface-artists-impression.jpg';

const MarsWeather = () => {
  const [isLoading, setLoading] = useState(false);
  const [marsData, setMarsData] = useState([]);

  const getMarsData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/nasa/mars/weather');
      if (res.ok) {
        const jsonData = await res.json();
        setMarsData(jsonData);
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

  return (
    <div>
      <MarsWeatherDesign data={marsData} />
    </div>
  );
};

export default MarsWeather;
