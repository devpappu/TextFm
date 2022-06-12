import React, { useEffect, useState } from 'react';
const axios = require('axios');
import localUrl from '../../utility/localUrl';
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/footer/footer';
import Head from 'next/head'
import style from './contact.module.css';
import apiurl from '../../utility/baseUrl';
import { Rings } from "react-loader-spinner";
import Swal from 'sweetalert2';
const Index = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        errors: [],
    });

    const resetForm = () =>{
        setForm({
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
        })
    }

    const [loading, setLoading] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const sendMail = e =>{

        e.preventDefault();

        setLoading(true);

        axios.post(apiurl() +'send-contact-mail',form)
       .then(response => {

        if (response.status >= 200 && response.status < 300) {
           
            setLoading(false);
            resetForm();
             Toast.fire({
                icon: 'success',
                title: response.data.msg
             });

        }
        
      })
      .catch(err => console.error(err))
      .then(() => {
        setLoading(false);
      });
        
    }

    return (
        <div>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header/>
                <div>
                <div className={style.contact__section}>
                     <div className='g:px-28 md:px-28 px-6'>
                         
                         <div className={style.contact}>

                             <div className={`${style.contact__div} lg:py-20 md:py-20 py-8 px-6 lg:px-20 md:px-16 flex flex-col justify-center shadow rounded  `}>
                                 <h1 className='text-2xl text-center font-josefink font-bold '>Ask Anything! Contact Us </h1>
                                 <p className='lg:px-64  text-lg text-gray-600 text-center mt-9'>We aim to provide great customer service. For inquiries, technical support and price quotation, here are all the ways you can contact us. </p>
                                 
                                 <div>
                                 <form onSubmit={sendMail} className='mt-8'>
                              <div>
                                
                                    <div className="mb-4">
                                        <input type="text" className="contact-field" placeholder="Name *" 
                                        value={form.name} 
                                           name='name' 
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <input type="email" className="contact-field" placeholder="Email *" 
                                            value={form.email} name='email' 
                                            onChange={handleChange}
                                            required  
                                        />

                                    </div>

                                    <div className="mb-4">

                                        <input type="phone" className="contact-field" placeholder="Phone *" 
                                            value={form.phone} 
                                            name='phone' 
                                            onChange={handleChange}
                                            required  
                                          />
                                    </div>

                                    <div>

                                         <textarea  rows="6" cols="50" className='contact-field' placeholder='Message*' name='message'
                                        value={form.message}
                                        onChange={handleChange} 
                                        required
                                         />
                                        
                                    </div>
                                   
                                   <p className=''>
                                   
                                   {loading ? (
                                       
                                       <div>
                                            <Rings height="100" width="100" color="grey" ariaLabel="loading" />
                                        </div>
                                    ): (

                                         <button type="submit" className="text-white mt-8 bg-black text-1xl  rounded-sm w-full sm:w-auto font-extrabold px-14 py-3 text-center ">Submit</button>
                                    )}
                                   </p>
                                </div>
                            </form>
                                 </div>
                             </div>

                         </div>

                     </div>
                    
                </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Index;