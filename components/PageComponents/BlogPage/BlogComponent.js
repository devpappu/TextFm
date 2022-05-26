import React from 'react';
import style from './blog.module.css'
import blogTitleTrim from '../../../utility/blogTitleTrim';
import Link from "next/link";

const BlogComponent = ({blogs}) => {
    return (
        <>
          {
            blogs.map((item, index) =>{
                return(
                <div key={index} className="mb-6">
                    <div>
                        <p className="mb-3 text-black text-2xl font-medium hover:text-red-600 ">{item.post_title}</p>
                        <div className=''>
                          <p className='mt-4 text-lg'>{blogTitleTrim(item.des)}
                           <span className='ml-3 pb-1 border-b border-red-600 hover:text-red-600'>
                             More
                           </span>
                           </p>
                          <p className='mt-6 text-gray-700 text-md'>By <span className='text-lg font-semibold pl-1 pr-4'>Team Textfm</span> January 27, 2022</p>
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