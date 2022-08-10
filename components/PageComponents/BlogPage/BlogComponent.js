import React from 'react';
import style from './blog.module.css'
import blogTitleTrim from '../../../utility/blogTitleTrim';
import Link from "next/link";
import Image from 'next/image';
const BlogComponent = ({blogs}) => {
    return (
        <>

           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
              {
                blogs.map((item, index) =>{
                    return(
                    <div key={index} className="mb-6">
                        <div>
                            <div className='bg-white border rounded p-4'>
                              <Image className='rounded' width={'600px'} height={'500px'}
                              src={'/images/hrithik-roshan.jpg'}>

                              </Image>

                               <div className=''>
                                 <p className="my-3 text-black text-lg font-medium hover:text-red-600 ">{item.post_title}</p>
                                  <p className='mt-4 text-md'>{blogTitleTrim(item.des)}
                                    <Link
                                        href={{
                                          pathname: "/blog/[slug]",
                                          query: { slug: item.slug },
                                        }}
                                      >
                                    <a className='ml-3 pb-1 border-b border-red-600 hover:text-red-600'>
                                      Read More ➾
                                    </a>
                                  </Link>
                                  </p>
                                  <p className='mt-6 text-gray-700 text-sm'>By <span className='text-md font-semibold pl-1 pr-4'>Team Textfm</span> January 27, 2022</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    )
                })
              }
         </div>
        </>
    );
};

export default BlogComponent;