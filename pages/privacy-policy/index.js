import React, { useEffect, useState } from 'react';
const axios = require('axios');
import localUrl from '../../utility/localUrl';
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/footer/footer';
const Index = () => {

    const [data, setdata] = useState('');

    useEffect(() =>{

        axios.get(localUrl()+ '/json/privacy_policy.json').then(res =>{
           
            setdata(res.data);
            

        })

    }, [data])

    return (
        <div>
            <Header/>
                <div className='page-py section-px' style={{'line-height': '35px'}} >
                  <p className='' dangerouslySetInnerHTML={{__html: data}}/>
                </div>
            <Footer/>
        </div>
    );
};

export default Index;