import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/layouts/footer/footer';
import Header from '../../components/layouts/header/header';
import style from './blog.module.css'
import { Rings } from "react-loader-spinner";
import BlogComponent from '../../components/PageComponents/BlogPage/BlogComponent';
export default function Index() {
 
    const [Post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

   //  post data call
   useEffect(()=>{
    axios.get('./json/blog.json')
    .then(response => {
        const post = response.data; 
        setPost(post);
        setLoading(false)

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
          {loading ? (
            
            <div className="mt-5 flex justify-center">
                    <Rings height="100" width="100" color="grey" ariaLabel="loading" />
              </div>

            ):(
              
            <div className="pt-4 pb-16 bg-gray-100  lg:px-40 md:px-5 px-4">
                <div className="blogs py-8 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                    <BlogComponent blogs={Post}/>
                </div>
            </div>

          )}

    </div>
   
   <Footer/>
    
  </div>

  )
}
