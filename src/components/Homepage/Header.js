import React from 'react';
import './header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesSm">React & Node </span>
          <span className="headerTitlesLg">Blog</span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/11/14/56/ireland-1971997_960_720.jpg"
          alt=""
          className="headerImg"
        />
      </div>
    </>
  );
};

export default Header;
