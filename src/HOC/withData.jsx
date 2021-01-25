import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import axios from 'axios';

const baseUrl = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';

const withData = (WrappedComponent) => {
  return () => {
    const history = useHistory();
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios(baseUrl);
          setData(data);
        } catch (error) {
          history.push('/error');
        }
      })();
    }, []);

    return data ? <WrappedComponent data={data} /> : <Loader />;
  };
};
export default withData;
