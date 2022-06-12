import React, { useEffect, useState } from 'react';
const axios = require('axios');
import localUrl from '../../utility/localUrl';
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/footer/footer';
import Head from 'next/head'
const Index = () => {

    const [data, setdata] = useState('');

    useEffect(() =>{

        axios.get(localUrl()+ '/json/terms_of_use.json').then(res =>{
           
            setdata(res.data);
            

        })

    }, [data])

    return (
        <div>
            <Head>
                <title>Terms of Service</title>
            </Head>
            <Header/>
                <div className='page-py section-px' style={{'line-height': '35px'}} >
                  <p className='' dangerouslySetInnerHTML={{__html: data}}/>
                </div>
            <Footer/>
        </div>
    );
};

export default Index;