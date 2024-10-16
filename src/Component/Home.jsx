import React, { useEffect, useState } from 'react'
import './style.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Third Slide'
  },
];

function Home() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:5000/products");
      let password = await req.json();
      console.log(password);
      setVal(password);
    };
    getData();
  }, []);

  return (
    <>
      <div className="firstbox grid grid-cols-3 gap-10 p-10 ml-8 grid-rows-3">
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Electronic</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Books</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Bicycle</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Furniture</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Accessories</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Fitness</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Appliances</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>Stationery</div>
        <div className='h-14 w-14 rounded-full border-sky-400 border-2 catagory-text text-center'>catagory</div>
      </div>
      <h1 className='font-bold text-xl ml-8'>Hot Deals</h1>
      <div className="imgslider w-4/5 h-[10rem] ml-12 mt-3 rounded-2xl">
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '100%', height: '10rem', borderRadius: '2rem' }} src={fadeImage.url} />
                {/* <h2>{fadeImage.caption}</h2> */}
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <h2 className='font-bold text-xl mt-8 ml-8'>Best Rating Product</h2>
      <hr className='h-[1px] bg-gray-700 w-[85%] ml-8 mt-2' />
      <div className="thirdbox grid grid-cols-3 gap-10 p-10 grid-rows-3">
        {val.map((item, index) => (
          <div key={index} className='h-28 w-[6.5rem] border-gray-600 border-[1px]'>
            <div><img className='h-[72px]  w-full' src={item.url}alt="img" /></div>
            <div><p className='text-xs text-center font-bold'>{item.product_name}</p></div>
            <div className='flex justify-around'>
              <p>{item.price}</p>
              <p className='text-green-600'>{item.offer}</p>
             
            </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Home;
