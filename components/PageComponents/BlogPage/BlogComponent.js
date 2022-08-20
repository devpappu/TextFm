import React from 'react';
import style from './blog.module.css'
import blogTitleTrim from '../../../utility/blogTitleTrim';
import Link from "next/link";
import Image from 'next/image';
const BlogComponent = ({blogs}) => {
    return (
        <div className='flex gap-10'>

         <div className='bg-white shadow h-screen p-3 lg:block md:block hidden '>
            <Image className='rounded' width={'400px'} height={'300px'}
                                   src={'/images/hrithik-roshan.jpg'}>
            </Image>
         </div>
           
           <div className='lg:block md:block hidden'>
            <div className='grid grid-cols-1 gap-5'>
                {
                  blogs.map((item, index) =>{
                      return(
                      <div key={index} className="bg-white shadow border rounded px-5 py-3  flex gap-4">
                            
                              <div className=''>

                                    <p className="lg:block md:block hidden my-3 text-black text-lg font-medium hover:text-red-600 ">{item.post_title}</p>

                                    <p className="lg:hidden md:hidden block my-3 text-black text-md font-medium hover:text-red-600 ">{blogTitleTrim(item.post_title, 40)}</p>


                                    <p className='lg:block md:block hidden mt-4 text-md'>{blogTitleTrim(item.des, 110)}
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
                                    <div className='flex justify-between items-center mt-6'>
                                      <p className=' text-gray-700 text-sm'>By <span className=' text-md font-semibold pl-1 pr-4'>Team Textfm</span> January 27, 2022</p>

                                      {/* <p className=' text-gray-700 text-sm'>By <span className=' text-md font-semibold pl-1 pr-4'>Team Textfm</span> January 27, 2022</p> */}

                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="mo"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                                    </div>
                                </div>

                              <div className='p-4 w-[300px]' >
                                  <Image className='rounded object-cover ' width={'200px'} height={'230px'}
                                    src={'/images/hrithik-roshan.jpg'}>
                                  </Image>
                              </div>
                      </div>
                      )
                  })
                }
            </div>
           </div>

          <div className='bg-white shadow-lg h-screen p-3 lg:block md:hidden hidden'>
            <Image className='rounded' width={'400px'} height={'300px'}
                                  src={'/images/hrithik-roshan.jpg'}>
            </Image>
          </div>

          <div className='lg:hidden md:hidden block'>
           <div className='grid grid-cols-1 gap-5'>
              {
                blogs.map((item, index) =>{
                    return(
                      <>
                        <Link href={`/blog/${item.slug}`}>
                                <a>  

                                <div key={index} className="bg-white shadow border rounded px-4 py-3  flex gap-4">
                         
                               
                         <div className=''>
                            <p className=" my-3 text-black text-md font-medium hover:text-red-600 ">{blogTitleTrim(item.post_title, 60)}</p>

            
                            
                            <div className='flex justify-between items-center mt-1'>
                               <p className=' text-gray-700 text-sm'> January 27, 2022</p>

                               <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="mo"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                            </div>
                            
                         </div>

                      <div className='w-[250px]' >
                           <Image className='rounded object-cover ' width={'300px'} height={'350px'}
                             src={'/images/hrithik-roshan.jpg'}>
                           </Image>
                      </div>

                    
              </div>


                                </a>
                        </Link>
                      </>
                    
                    )
                })
              }
           </div>
          </div>

        </div>
    );
};

export default BlogComponent;