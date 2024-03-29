import React, { useEffect, useState } from 'react';
import Head from 'next/head'
const axios = require('axios');
import Link from 'next/link'
import localUrl from '../../utility/localUrl';
import Image from 'next/image';
import style from './blog.module.css'
import {useRouter} from "next/router";
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/footer/footer';
const Post = () => {

    const { query } = useRouter();
    
    const [Post, setRelatedPost] = useState([]);

    //  post data call
    useEffect(()=>{
     axios.get(localUrl()+'/json/singleblog.json')
     .then(response => {
         const post = response.data ; 
         setRelatedPost(post);
 
     })
     .catch(err => console.error(err))
     .then(() => {console.log("final done post")})
   },[])

   
    return (
        <>
        <Head>
        <title>Single blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header/>

        <div className='py-24 lg:px-10 px-3 bg-gray-200 flex gap-5'>

            
            <div className='bg-white shadow h-screen rounded sticky top-24	 p-3 lg:block md:block hidden w-11/12'>
                <Image className='shadow-lg rounded' width={'400px'} height={'300px'}
                        src={'/images/hrithik-roshan.jpg'}>
                </Image>
            </div>

              <div className='bg-white shadow-md rounded lg:px-8 md:px-6 px-4  py-5 w-12/12 ' >
              {/* lg:block md:block hidden */}
              <div className=" mb-4  px-3 py-4">
              <p className={`${style.blog__title} text-2xl font-bold`}>
                    
                    43% say they kept their New Year’s resolution last year: Public ki Awaaz poll</p>
              </div>


                 <div className='mb-5 flex justify-center ' >

                  {/* <div className='rounded shadow px-4' style={{width: '100%', height: '300px', position: 'relative' }}>
                      <Image
                        alt='hero banner'
                        src={'/images/single.jpg'}
                        layout='fill'
                        className='rounded shadow px-4 '
                        objectFit='contain'
                      />
                  </div> */}

                    <Image className='rounded object-cover object-top' width={'750px'} height={'300px'}
                            src={'/images/single.jpg'}>
                    </Image>

                 </div>

                  
                  <div className='border-y mt-2 py-2.5 flex flex-wrap text-[10px] font-medium gap-4 text-black items-center uppercase  '>
                     <p className='text-sm rounded-full py-1 px-4 inline-block border'>Category : Media</p>
                     <p className='text-sm rounded-full py-1  px-4 inline-block border'>3 Min Read Time</p>
                     <p className='text-sm rounded-full py-1 px-4 inline-block border'>Jan 27 2022</p>
                  </div>



                  <p className={`${style.blog__title} mt-8 text-lg font-bold`}>
                    
                    43% say they kept their New Year’s resolution last year: Public ki Awaaz poll</p>
                 
                  <p className={style.blog__description} dangerouslySetInnerHTML={{__html: Post}}/>

                <div className='mt-8'>
                  <p className='text-md font-medium'>Published by</p>
                  <p className='mt-1 text-lg font-semibold'>Team TextFm</p>
                </div>
             </div>

             <div className='sticky top-24 bg-white shadow-lg h-screen rounded p-3 lg:block md:hidden hidden w-11/12'>
                <Image className='rounded' width={'400px'} height={'300px'}
                        src={'/images/hrithik-roshan.jpg'}>
                </Image>
          </div>
         </div>


            <Footer/>
        </>
       
    );
};

export default Post;