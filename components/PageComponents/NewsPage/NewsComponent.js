import React from 'react';
import Image from 'next/image';
import style from './blog.module.css'
const NewsComponent = ({news}) => {
    return (
        <>
          {
            news.map((item, index) =>{
                return(
                <div key={index} className="mb-6 bg-white rounded-lg shadow-lg px-5 py-4 box__shadow border border-gray-200  ">
                    <div className='mt-2 lg:flex md:flex justify-center items-center gap-5'>

                          <div className='lg:w-4/12 md:w-5/12 w-full'>
                              <Image  width="500px" height="250px" src="/images/gig4.jpg" 
                                  className={`${style.blog__image} blog__image rounded-lg`}  alt={item.post_title}  />
                          </div>

                          <div className='lg:w-8/12 md:w-7/12'>
                          
                           <div>
                              <p className="mt-3 lg:text-2xl md:text-2xl font-medium ">{item.post_title}</p>
                            </div>

                            <div>
                              <p className='mt-2' >{item.des}</p>

                              <p className='mt-3 text-gray-700 text-sm'>By Textfm 25 Sep 2022</p>

                                <button className='mt-3 text-left text-black py-3'>Read More At Time Now</button>

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