import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './style.css';

const list = Array(1000)
  .fill()
  .map((val, idx) => ({
    id: idx,
    name: 'John Doe',
    image: 'http://via.placeholder.com/40',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }));

const Item = ({ index }) => (
  <div key={list[index].id} className="row">
    <div className="image">
      <img src={list[index].image} alt="" />
    </div>
    <div className="content">
      <div>{list[index].name}</div>
      <div>{list[index].text}</div>
    </div>
  </div>
);

const VirtualizedList = () => {
  const rowHeight = 50;
  const rowWidth = 800;
  const listHeight = 1080;

  return (
    <div className="list">
      <List
        width={rowWidth}
        height={listHeight}
        itemSize={rowHeight}
        itemCount={list.length}
      >
        {Item}
      </List>
    </div>
  );
};

export default VirtualizedList;
