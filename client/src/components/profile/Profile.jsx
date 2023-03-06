import React from 'react';
import './Profile.css';
import profile from '../../img/profile.png';

export default function Profile() {
  return (
    <div className="Profile">
      <img className="Icon" src={profile} width={40} height={40} alt="" />
    </div>
  );
}