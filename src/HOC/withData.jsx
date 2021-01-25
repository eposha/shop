import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
// import axios from 'axios';
import { data } from './data';

// const baseUrl = 'baseUrl' --> base URl for request

const withData = (WrappedComponent) => {
  return () => {
    const history = useHistory();
    const [requestData, setData] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          // const { data } = await axios(baseUrl); --> for real request
          setData(data);
        } catch (error) {
          history.push('/error');
        }
      })();
    }, []);

    return requestData ? <WrappedComponent data={requestData} /> : <Loader />;
  };
};
export default withData;
