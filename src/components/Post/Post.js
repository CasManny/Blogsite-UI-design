import React from 'react';
import './post.css'

const Post = ({posts}) => {
  return (
    <div className="post">
      <img
        src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Category</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">How to become a millionaire?</span>
        <hr />
        <span className="postDate">2 minutes ago</span>
        <p className="postDetails">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit recusandae? Quia deserunt, similique ipsam optio quo quod non distinctio alias id perferendis! Voluptatum autem numquam rerum suscipit vero a?
        </p>
      </div>
    </div>
  );
};

export default Post;
