import React from 'react';
import style from './blog.module.css'
const BlogComponent = ({blogs}) => {
    return (
        <>
          {
            blogs.map((item, index) =>{
                return(
                <div key={index} className="mb-6 px-5 py-4">
                    <div className='mt-4'>
                           <div>
                              <p className="mt-3 lg:text-3xl md:text-2xl font-medium ">{item.post_title}</p>
                            </div>

                            <div>
                              <p className='mt-2' >{item.des}</p>
                              <p className='mt-2 text-gray-700 text-sm'>By Textfm 25 Sep 2022</p>
                            </div>
                    </div>
                </div>
                )
            })
        }

        </>
    );
};

export default BlogComponent;