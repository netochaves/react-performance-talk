import React from 'react';
import './style.css';

const Item = ({ item }) => (
  <div key={item.id} className="row">
    <div className="image">
      <img src={item.image} alt="" />
    </div>
    <div className="content">
      <div>{item.name}</div>
      <div>{item.text}</div>
    </div>
  </div>
);

const List = () => {
  const rowCount = 1000;

  const list = Array(rowCount)
    .fill()
    .map((val, idx) => ({
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }));

  return (
    <div className="list">
      {list.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default List;
