import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <div>
            <div className="bg-blue">
                <div className="section__padding">
                    <div className="py-12">
                      <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-7 text-white'>
                          <div>
                              <h3 className='text-white'>About TextFm</h3>
                              <p className="text-sm footer__menu_li">
                              Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
                              </p>
                          </div>
                          <div className='lg:ml-20  lg:block md:block hidden '>
                              <h3 className='text-white'>Quick Links</h3>
                              <ul className="footer__menu_li">
                                  <li><Link href="/news" ><a>Go - News Page</a></Link></li>
                                  <li><Link href="/posts" ><a>Go - Posts Page </a></Link></li>
                              </ul>
                          </div>
                          <div>
                              <h3 className='text-white'>Contact Info TextFm</h3>
                              <ul className="footer__menu_li">
                                  <li>Gmail : info@textfm.com</li>
                                  <li>Phone : +8801622661199</li>
                              </ul>
                          </div>
                      </div>

                        <div className='border-t border-b py-3 mt-9 text-white border-gray-200 items-center flex justify-between'>
                            <div className='flex gap-2 items-center '>
                                <p className='footer__text'>Follow Us</p>
                                <a href='#'><i className="lab la-facebook-f social__icon "></i></a>
                                <a href='#'><i className="lab la-instagram social__icon "></i></a>
                                <a href='#'><i className="lab la-youtube social__icon "></i></a>
                            </div>
                            
                            <div className='flex gap-2 items-center '>
                              <p className='footer__text'>Mobile app</p>
                              <a href='#'><i className="lab la-apple social__icon "></i></a>
                              <a href='#'><i className="lab la-android social__icon "></i></a>
                            </div>
                        </div>

                        <div className='mt-5 flex flex-wrap lg:flex-nowrap  gap-8'>
                        
                          <p className='footer__text border-r border-white pr-4 '>© 2021 - 2022 TextFM All Rights Reserved.</p>
                          
                           <ul className='flex flex-wrap lg:flex-nowrap gap-8'>
                            <li className='footer__text'><Link href="/terms-of-use" ><a>Terms of Service </a></Link></li>
                            <li className='footer__text'><Link href="/privacy-policy" ><a>Privacy Policy </a></Link></li>
                            <li className='footer__text'><Link href="/contact" ><a>Contact Us</a></Link></li>
                           </ul>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Footer;