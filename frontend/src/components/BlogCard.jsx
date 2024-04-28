import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ title, bannerImage, date, content,id }) => {
    const navigate=useNavigate();

    return (
        <div className='flex w-1/2 mb-3' >
            <div className="w-1/3 p-3">
                <img src={bannerImage} className='w-full rounded-lg'  alt="blog_image" />
            </div>
            <div className="w-2/3 p-3 flex flex-col" >
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='font-bold text-sm mt-1 text-slate-500'>{date}</p>
                <button onClick={()=>navigate(`/blog/${id}`)} className='bg-green-400 mt-1 self-start rounded-lg px-2 py-1 text-white font-bold '>read more</button>
            </div>
        </div>
    )
}

export default BlogCard;