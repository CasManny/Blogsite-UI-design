import React from 'react';
import Post from './Post';
import './postList.css'

const posts = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum pariatur exercitationem laboriosam totam soluta perspiciatis cupiditate incidunt nemo dolorum quas!",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum pariatur exercitationem laboriosam totam soluta perspiciatis cupiditate incidunt nemo dolorum quas!",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum pariatur exercitationem laboriosam totam soluta perspiciatis cupiditate incidunt nemo dolorum quas!",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum pariatur exercitationem laboriosam totam soluta perspiciatis cupiditate incidunt nemo dolorum quas!",
];

const PostList = () => {
  return (
      <div className="postList">
          {posts.map((post,index) => (
            <Post key={index} posts={post} />
          ))}
      </div>
  )
};

export default PostList;
