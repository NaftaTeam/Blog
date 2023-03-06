import React from 'react';
import './RightHeader.css';
import profile from '../../img/profile.png';

const imgStyle = {
  backgroundColor: 'white',
};

export default function RightHeader() {
  return (
    <div className="RightHeader">
      <img src={profile} alt="" width={40} height={40} style={imgStyle} />
    </div>
  );
}