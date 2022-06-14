import classes from '../components/groups/MyGroup.module.css';
import Loader from '../components/lader/loader';
import MyItem from '../components/item/MyItem';
import React, { useEffect, useState } from 'react';
import { getAllSubjects } from '../services/subjects';

export default function Home({ isAuth, setAuth }) {
  const [data, setData] = useState();
  const [status, setStatus] = useState('ide');
  useEffect(async () => {
    setStatus('loading');
    let { data } = await getAllSubjects();
    setData(data);
    setStatus('resolved');
  }, []);
  return (
    <div>
      <div className={classes.container}>
        {status === 'resolved' ? (
          <MyItem
            setAuth={setAuth}
            isAuth={isAuth}
            subjects={data}      
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
