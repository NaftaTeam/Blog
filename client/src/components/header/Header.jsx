import React from 'react';
import './Header.css';
import LeftHeader from '../leftHeader/LeftHeader';
import RightHeader from '../rightHeader/RightHeader';

export default function Header() {
  return (
    <div className="Header">
      <LeftHeader />
      <RightHeader />
    </div>
  );
}