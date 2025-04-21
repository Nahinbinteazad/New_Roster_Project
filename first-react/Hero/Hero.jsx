import React from 'react';

const Hero = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/Banner-min.jpg')" }}
    >
      <div className='pt-30 pl-30'>
      <h1 className='text-4xl text-white font-semibold '>Bid on Unique Items from <br />Around the World</h1>
      <p className='text-white opacity-70 mt-5'>Discover rare collectibles,luxury goods,and vintage <br />treasures in out curated auctions</p>
      <button className='text-black bg-white btn rounded-4xl p-3 mt-5'>Explore Auctions</button>
      </div>
    </div>
  );
};

export default Hero;
