import React from 'react';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" alt="" className='singlePostImg' />
        <div className="singlePostHeading">
          <h1 className="singlePostTitle">How to become a man?</h1>
          <div className="singlePostControls">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>sabastine</b></span>
            <span className="singlePostDate">5 mins ago</span>
        </div>
        <p className="singlePostBody">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, veritatis adipisci! Minima minus autem voluptas cupiditate voluptate, beatae vitae eos earum dolore ex iste odit iusto corporis, voluptatum eaque, aspernatur ullam natus quam alias tenetur quia! Maxime, odit possimus. Vero totam repellendus quae recusandae ratione illum at quasi pariatur minima.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
