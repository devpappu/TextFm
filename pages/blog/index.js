import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/layouts/footer/footer';
import Header from '../../components/layouts/header/header';
import style from './blog.module.css'
// import Image from 'next/image';
export default function Index() {
 
    const [Post, setPost] = useState([]);

   //  post data call
   useEffect(()=>{
    axios.get('./json/blog.json')
    .then(response => {
        const post = response.data ; 
        setPost(post);

    })
    .catch(err => console.error(err))
    .then(() => {console.log("final done post")})
  },[])


  return (
  <div>
     <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
     
          {/* post section */}
          <Header/>

          <div className="pt-4 pb-16 bg-gray-100  lg:px-40 md:px-5 px-4">
                  <div className="blogs py-8 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                          {
                              Post.map((item, index) =>{
                                  return(
                                  <div key={index} className="bg-white rounded-lg shadow-lg px-5 py-4 box__shadow border border-gray-200  ">
                                      <div className='mt-2 lg:flex md:flex justify-center items-center gap-5'>

                                            <div className='lg:w-4/12 md:w-5/12 w-full'>
                                                <Image  width="500px" height="350px" src="/images/gig4.jpg" 
                                                    className={`${style.blog__image} blog__image rounded-2xl`}  alt={item.post_title}  />
                                            </div>

                                            <div className='lg:w-8/12 md:w-7/12'>
                                            
                                             <div>
                                                <p className="mt-3 lg:text-2xl md:text-2xl font-medium ">{item.post_title}</p>
                                                <p className='mt-2 text-gray-700 text-sm'>By Textfm 25 Sep 2022</p>
                                              </div>

                                              <div>
                                                <p className='mt-2' >{item.des}</p>
                                                <div className='mt-3 flex'>
                                                  <button className='px-16 py-3 border-2 shadow-2xl rounded-full '>SOURCE</button>
                                                </div>
                                              </div>

                                            </div>
                                      </div>
                                  </div>
                                  )
                              })
                          }
                  
                  </div>
              </div>
    </div>
   
   <Footer/>
    
  </div>

  )
}
