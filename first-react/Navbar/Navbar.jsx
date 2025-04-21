import React from 'react';

const Navbar = () => {
    return (
        <div >
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
  <div className="flex items-center">
    <a className="ml-20 text-xl text-blue-900">Auction<span className='font-bold text-yellow-400'>Gallery</span></a>
  </div>
  <div className='flex '>
    <ul className='flex gap-10 items-center '>
      <li>Home</li>
      <li>Auction</li>
      <li>Categories</li>
      <li>How to works</li>
    </ul>
  </div>
  <div className="flex justify-end items-end mr-20">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-4.878M6 14.158c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
          <span className="badge badge-xs indicator-item">0</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="../assets/hamster_1.jpg" />
        </div>
      </div>
     
    </div>
  </div>
</div>
</div>


    );
};

export default Navbar;