import React from "react";
import {Header, PostList, SideBar} from '../../components'
import './homepage.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <PostList />
        <SideBar />
        </div>;
    </>
  );
};

export default Home;
