import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark,bookmarked,handleMarkAsRead}) => {
    const [blogs,setBlog]=useState([]);

    useEffect(()=>{
        fetch("Blogs.json")
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
    <div className='main-container flex text-center ml-10'>
            <div className=''>
            <div className="w-full p-4 border-1 border-gray-300 bg-white rounded-xl">
            <div className="grid grid-cols-4 gap-4  text-gray-700 font-semibold ">
    <div>Items</div>
    <div className="text-center">Current Bid</div>
    <div className="text-center">Time Left</div>
    <div className="text-center">Bid Now</div>
  </div>

{            blogs.map((blog)=><Blog key={blog.id} handleBookMark={handleBookMark} bookmarked={bookmarked}  handleMarkAsRead={handleMarkAsRead}  blog={blog}></Blog>)
}
</div>

            </div>
        </div>
    );
};

export default Blogs;