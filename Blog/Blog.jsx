import React from 'react';

const Blog = ({blog,handleBookMark,handleMarkAsRead,bookmarked}) => {
let isBookmarked = false;
for (let i = 0; i < bookmarked.length; i++) {
  if (bookmarked[i].id === blog.id) {
    isBookmarked = true;
    break;
  }
}
    return (
        <div>
            <div className="w-full pt-4 pl-4">
  <div className="grid grid-cols-4 gap-4 items-center border-t border-gray-200 py-4 ">
    {/* Item */}
    <div className="flex items-center gap-4">
      <div className="h-14 overflow-hidden rounded-box border border-gray-200">
        <img
          src={blog.image}
          className="w-full h-full object-cover"
          alt="Bid"
        />
      </div>
      <div>
        <p className="text-[13px]  text-left w-33">
            {
                blog.title
            }
        </p>
      </div>
    </div>

    {/* current bid */}
    <div className="text-center text-md">{blog.currentBidPrice}</div>

    {/* time left */}
    <div className="text-center">
        {blog.timeLeft}
    </div>

    {/* bid*/}
    <div className="flex justify-center items-center">
      <button  onClick={() => {
     if (!isBookmarked) {
        handleBookMark(blog);
        handleMarkAsRead(blog.currentBidPrice, blog.id);
      }
    }}
    className="btn btn-square btn-ghost" title={isBookmarked ? '🚫' : ''}>
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g    strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" 
           fill={isBookmarked ? "red" : "none"}
           stroke={isBookmarked ? "red" : "currentColor"}
          >
            <path  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </g>
        </svg>
      </button>
      
    </div>
  </div>
            </div>
        </div>
    );
};

export default Blog;