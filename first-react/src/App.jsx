import { useState } from 'react'
import Blogs from '../Blogs/Blogs'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import '../src/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [bookmarked,setBookmarked]=useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
    toast.success(`item added to favorite lists ❤️`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleMarkAsRead = (bidPrice) => {
    const bid = parseFloat(bidPrice.replace(/[^\d.]/g, ''));
    if (!isNaN(bid)) {
      setReadingCount(prev => prev + bid);
    }
  };

  const handleRemoveFromBookmarked = (id, title) => {
    const itemToRemove = bookmarked.find(item => item.id === id);
    const updated = bookmarked.filter(item => item.id !== id);
    if (itemToRemove) {
      const bid = parseFloat(itemToRemove.currentBidPrice.replace(/[^\d.]/g, ''));
      setReadingCount(prev => prev - bid);
    }
    setBookmarked(updated);
    toast.info(`item removed from favorite lists ❌`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="main-container bg-[#EBF0F5] pt-20 pb-20">
        <h1 className='font-semibold text-2xl ml-11 pb-1'>Active Auctions</h1>
        <p className=' ml-11 pb-7'>Discover and bid on extraordinary items</p>
       <div className="container flex">
       <div className="left-container w-[70%] ">
        <Blogs handleBookMark={handleBookMark} bookmarked={bookmarked} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
        <div className="card card-border bg-base-100 w-80 ml-5 ">
  <div className="card-body border border-gray-300 rounded-lg">
    <h2 className="card-title text-2xl ml-[10%]"><span className='text-4xl'>♡</span>Favourite Items</h2>
    <div className='border-b border-gray-300 w-full my-2'></div>
    <div className='border-b border-gray-300 w-full my-2 '>
    {
      bookmarked.length === 0 ? (
        <div>
          <h1 className='text-center font-semibold text-lg'>No favourites yet</h1>
          <p className='text-center text-xs mb-5'>Click the heart icon on any item <br /> to add it to your favourites</p>
        </div>
  ) :
  (
    bookmarked.map((marked) => (
      <div key={marked.id}>
        <div className='flex gap-3 border p-2 rounded-md mb-5'>
        <div className="h-13  overflow-hidden rounded-box border border-black">
        <img
          src={marked.image}
          className="w-full h-full object-cover"
          alt="Bid"
        />
      </div>
      <div>
      <p className="text-[13px]  text-left font-semibold">
            {
                marked.title
            }
        </p>
        <div className='flex items-center justify-between'>
        <div className="text-left text-xs ">{marked.currentBidPrice}</div>
        <button  onClick={() => handleRemoveFromBookmarked(marked.id, marked.title)}>
          <p className='text-xs pt-1 text-orange-500 shadow-orange-700'>X</p>
        </button>
        </div>
        <div className="text-left text-xs ">Bids: {marked.bidsCount}</div>
      </div>
        </div>
        
      </div>
    ))
  )
}
    </div>
    <div className='flex gap-10'>
    <h1 className='text-center font-semibold text-lg '>Total bids Amount</h1>
    <p className='text-center font-semibold text-lg '>${readingCount}</p>
    </div>
  </div>
</div>
        </div>
       </div>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  )
}

export default App
