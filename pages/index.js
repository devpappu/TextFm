import React, { useEffect, useState } from 'react';
import Footer from '../components/layouts/footer/footer';
import Header from '../components/layouts/header/header';
import Homepage from '../components/PageComponents/Homepage/Homepage';
const axios = require('axios');

export default function Home() {


  const [Category, setCategory] = useState([]);

  const [Post, setPost] = useState([]);



  //  category call
  useEffect(() => {
    axios.get('./json/category.json')
      .then(response => {
        const category = response.data;
        setCategory(category);

      })
      .catch(err => console.error(err))
      .then(() => { console.log("final done category") })
  }, [])


  //  post data call
  useEffect(() => {
    axios.get('./json/blog.json')
      .then(response => {
        const post = response.data;
        setPost(post);

      })
      .catch(err => console.error(err))
      .then(() => { console.log("final done post") })
  }, [])

  return (
    <div>
      <Header/>
        <Homepage/>
      <Footer/>
    </div>

  )
}
