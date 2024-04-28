import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../static/blogData';
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const BlogDetailPage = () => {
    return (
      <div >
        <Header activeHeading={5} />
        <BlogDetail />
        <Footer />
      </div>
    );
  };
  

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  
  useEffect(() => {
    // Find the blog object based on the blogId
    const selectedBlog = blogData.find(blog => blog.id === blogId);

    setBlogDetails(selectedBlog);
  }, [blogId]);

  

  return (
    <div className={`${styles.section} flex flex-col my-8 gap-2`}>
        <h2 className='text-5xl'>{blogDetails?.title}</h2>
        <p className='text-slate-500'>posted on : {blogDetails?.date}</p>
        <img className='rounded-lg' src={blogDetails?.bannerImage} style={{alignSelf:"center"}} alt="" />
        <br />
      <div dangerouslySetInnerHTML={{ __html: blogDetails?.content }}></div>
  
    </div>
  );
};


export default BlogDetailPage;