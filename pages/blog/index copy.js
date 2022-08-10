import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/layouts/footer/footer';
import Header from '../../components/layouts/header/header';
import { Rings } from "react-loader-spinner";
import BlogComponent from '../../components/PageComponents/BlogPage/BlogComponent';
export default function Index() {
 
    const [Post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);


    const searchBlog = () =>{
      alert('Pending')
    }
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
        <title>TextFM Blog</title>
      </Head>
      <div>
     
          <Header/>
          {loading ? (
            
            <div className="s-mt flex justify-center">
                    <Rings height="100" width="100" color="grey" ariaLabel="loading" />
              </div>
            ):(
              
            <div className="s-mt  ">
                <div className='-mt-2 m_t_gradient__bg border-y border-general'>

                  <h1 className=' pt-8 pb-18 lg:px-48 md:px-12 px-6 text-5xl font-bold  py-10 '>Archives</h1>
                </div>
                <div className='pt-4 pb-16 lg:px-48 md:px-12 px-6 '>
                  <div className="blogs py-8 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                      <BlogComponent blogs={Post}/>
                  </div>
                </div>
            </div>

          )}

    </div>
   
   <Footer/>
    
  </div>

  )
}
