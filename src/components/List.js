import React from 'react';
import { useSelector } from 'react-redux';
import { getList } from '../redux/store';

const List = () => {
  const list = useSelector(getList);

  return (
    <div>
      <h2>List</h2>
      <ul>
        {
          list.data.bridges.map(bridge => (
            <li key={bridge.id}>{bridge.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default List;