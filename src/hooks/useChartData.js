import { useState, useEffect, useRef } from 'react';
import { getChartData } from '../services/chartService';

export const useChartData = (range = '1w') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cache = useRef({}); 
  useEffect(() => {
    if (cache.current[range]) {
      setData(cache.current[range]);
      setLoading(false);
    } else {
      setLoading(true);
      getChartData(range)
        .then(fetchedData => {
          console.log('Fetched data for range:', range, fetchedData);
          if (Array.isArray(fetchedData)) {
            cache.current[range] = fetchedData; 
            setData(fetchedData);
          } else {
            console.error('Invalid data format:', fetchedData);
            setData([]); 
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setData([]); 
        })
        .finally(() => setLoading(false));
    }
  }, [range]);

  return { data, loading };
};
