import React from 'react';
import './writepost.css'

const WritePost = () => {
  return (
    <>
      <div className="writePost">
        <img
          src="https://cdn.pixabay.com/photo/2022/01/21/07/21/ring-tailed-lemur-6954076__340.jpg"
          alt=""
          className='writeImg'
        />
        <form action="" className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="fas fa-plus writeIcon"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus="true"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>

          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
};

export default WritePost;
