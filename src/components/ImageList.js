import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({ description, urls, id }) => (
    <img key={id} src={urls.thumb} alt={description} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
// https://www.udemy.com/course/react-redux/learn/lecture/12531328#questions/12637862
