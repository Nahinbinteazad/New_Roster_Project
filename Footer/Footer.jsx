import React from 'react';

const Footer = () => {
    return (
        <div>
<footer className="foote text-center footer-center bg-white  p-10">
  <aside className='flex flex-col items-center'>
    
  <a className=" text-lg text-blue-900">Auction<span className='font-bold text-yellow-400'>Gallery</span></a>
    <p className='text-black text-md '>Bid. <span className='ml-2'>Win.</span> <span className='ml-2'>Own.</span> </p>
    <ul className='text-center items-center flex gap-10  text-black text-xs cursor-pointer mt-3'>
      <li >Home</li>
      <li>Auction</li>
      <li >Categories</li>
      <li >How to works</li>
    </ul>
    <p className='text-black text-xs mt-3' >© {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;