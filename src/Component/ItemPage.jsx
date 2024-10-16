import { Heart, ThumbsUpIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
function ItemPage() {
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
    const [searchlist, setsearchlist] = useState([{name : "pulser 180 black colour" , price : "10000" , about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit "}])
    return (
        <div className=''>
            <div className="imgslider  mt-3 rounded-sm " >
                <div className="slide-container">
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                            <div key={index}>
                                <img style={{ width: '95%', height: '15rem', borderRadius: '.75rem', marginLeft: '.75rem' }} src={fadeImage.url} />
                                {/* <h2>{fadeImage.caption}</h2> */}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
            <div className='flex gap-8 justify-center mt-6'>
                <button><Heart height={35} width={35} /></button>
                <button><ThumbsUpIcon height={35} width={35} /></button>
            </div>

            <div className='border-[2px] border-gray-500  w-[90%] rounded-md  ml-5 p-2 mt-4 '>
                {searchlist.map((val) => (
                    <div>
                        <p className='font-bold text-xl mt-1'>{val.name}</p>
                        <p className='text-xl mt-4'>{val.price} ₹</p>
                        <p className='font-bold mt-10 text-2xl'>Basic Details </p>
                        <p>{val.about}</p>
                    </div>
                ))}
            </div>
            <div className='bg-sky-600 text-white font-bold flex justify-center  h-10 '>
                <button className='h-8 w-24 mt-1  '>Contact</button>
            </div>
        </div>
    )
}

export default ItemPage
