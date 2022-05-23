import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/layouts/footer/footer';
import Header from '../../components/layouts/header/header';
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

          <div className="py-16 bg-gray-50  section__padding">
                  <div className="blogs py-8 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                          {
                              Post.map((item, index) =>{
                                  return(
                                  <div key={index} className="bg-white shadow-lg px-5 py-4 box__shadow border border-gray-200  ">
                                      <div className='mt-2 lg:flex md:flex justify-center align-item-center  gap-5'>

                                          <div className='flex justify-between '>
                                            <div>
                                              <Link
                                                    href={{
                                                    pathname: '/blog/[slug]',
                                                    query: { slug: item.slug },
                                                }}
                                                >
                                                  
                                                <a> <Image width="500px" height="300px" src="/images/gig4.jpg" className='rounded-3xl'  alt={item.post_title}  />
                                                </a>

                                              </Link>
                                              </div>
                                          </div>

                                            <div>
                                              <div className='lg:flex md:flex justify-between items-center '>

                                             
                                              <Link
                                                    href={{
                                                    pathname: '/blog/[slug]',
                                                    query: { slug: item.slug },
                                                }}
                                                >
                                                <a className="mt-3 lg:text-2xl md:text-2xl font-medium ">{item.post_title}</a>

                                              </Link>

                                               <p className='md:mt-0 lg:mt-0 mt-2 rounded-full bg-gray-100 py-2 px-6 shadow-inner border ' >Publish Date : 11.04.2022</p>
                                              </div>

                                              <div className='mt-2'>
                                                <audio src="" controls/>
                                              </div>

                                              <div>
                                                <p className='mt-4' >{item.des}</p>

                                                <div className='mt-3 flex'>

                                                  <button className='px-10 py-3 shadow-lg border rounded-full '>Source</button>

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
