import React from 'react';

const Photo = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="" />
    </div>
  );
};

export default Photo;
