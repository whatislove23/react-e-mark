import classes from '../components/groups/MyGroup.module.css';
import Loader from '../components/lader/loader';
import MyItem from '../components/item/MyItem';
import React, { useEffect, useState } from 'react';
import { getAllSubjects } from '../services/subjects';

export default function Home({ isAuth, setAuth }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('ide');
  useEffect(async () => {
    setStatus('loading');
    let { data, error } = await getAllSubjects();
    setData(data);
    if (error) {
      let alertMessage =
        error.message === 'FetchError: Load failed' &&
        'FetchError: Load failed probably database is disabled contact to admin';
      alert(alertMessage);
      setStatus('loading');
      return;
    }
    setStatus('resolved');
  }, []);
  return (
    <div>
      <div className={classes.container}>
        {status === 'resolved' ? (
          <MyItem
            setAuth={setAuth}
            isAuth={true}
            subjects={data}
            status={setStatus}
          />
        ) : (
          <div className={classes.center}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
