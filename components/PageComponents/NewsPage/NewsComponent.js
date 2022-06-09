import React from 'react';
import Image from 'next/image';
import style from './blog.module.css'
const NewsComponent = ({news}) => {
    return (
        <>
          {
            news.map((item, index) =>{
                return(
                <div key={index} className="mb-6 bg-white rounded-lg shadow-lg px-5 pt-4 pb-2 box__shadow border border-gray-200  ">
                    <div className='mt-2 lg:flex md:flex justify-center items-center gap-5'>

                          <div className='lg:w-4/12 md:w-5/12 w-full'>
                              <Image  width="500px" height="280px" src="/images/gig4.jpg" 
                                  className={`${style.blog__image} blog__image rounded-lg`}  alt={item.post_title}  />
                          </div>

                          <div className='lg:w-8/12 md:w-7/12'>
                          
                           <div className='flex gap-5 justfy-between items-center '>
                              <p className="mt-3 lg:text-2xl text-lg">{item.post_title}</p>

                              <button className='text-6xl text-gray-500 '><i className="las la-play-circle"></i></button>
                            </div>

                            <div>
                           

                              <p className='mt-3' >{item.des}</p>

                              <p className='mt-4 text-gray-700 text-sm'>12-07-2022 05:13 PM</p>

                                <button className='mt-3 text-left text-black py-3'>Read more at 
                                  <span className='ml-2  font-medium border-b border-black pb-1 '>
                                    Time Now
                                  </span>
                                </button>

                            </div>

                          </div>
                    </div>
                </div>
                )
            })
        }

        </>
    );
};

export default NewsComponent;