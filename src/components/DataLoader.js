import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList, fetchList } from '../redux/store';

const DataLoader = ({ children }) => {
  const dispatch = useDispatch();
  const list = useSelector(getList);

  useEffect(() => {
    if(Object.keys(list).length === 0) {
      dispatch(fetchList());
    }
  }, [list]);

  if (list.loading !== false) {
    return <p>Loading...</p>
  }

  return (
    <>{ children }</>
  );
}

export default DataLoader;