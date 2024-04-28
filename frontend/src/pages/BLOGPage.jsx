import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { blogData } from "../static/blogData";
import BlogCard from "../components/BlogCard";

const BLOGpage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Blog />
      <Footer />
    </div>
  );
};

const Blog = () => {
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">BLOGS</h2>
  
       <div className="flex flex-wrap w-full ">
        {blogData.map((blog,index)=>{
           return <BlogCard {...blog} key={index} />;
        })}
       </div>
       
    </div>
  );
};

export default BLOGpage;
