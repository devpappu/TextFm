import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/layouts/footer/footer';
import Header from '../../components/layouts/header/header';
import { Rings } from "react-loader-spinner";
import NewsComponent from '../../components/PageComponents/NewsPage/NewsComponent';
import { FaSistrix } from "react-icons/fa";
export default function Index() {
 
    const [Post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);


    const searchBlog = () =>{
      alert('Pending')
    }
   //  post data call
   useEffect(()=>{
    axios.get('./json/news.json')
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
        <title>TextFM News</title>
        <meta name="description" content="Text News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
     
          {/* post section */}
          <Header/>
          
          {loading ? (
            
            <div className="s-mt flex justify-center">
                    <Rings height="100" width="100" color="grey" ariaLabel="loading" />
              </div>

            ):(
              
            <div className="s-mt pt-2 pb-16 bg-gray-100  lg:px-40 md:px-5 px-3">
                <div className="blogs py-8 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                    <NewsComponent news={Post}/>
                </div>
            </div>

          )}

    </div>
   
   <Footer/>
    
  </div>

  )
}
