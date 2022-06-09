import React from 'react';
const Footer = () => {
    return (
        <div>
            <div className="bg-blue">
                <div className="section__padding">
                    <div className="py-12">
                      <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 text-white'>
                          <div>
                              <h3 className='text-white'>About TextFm</h3>
                              <p className="text-sm footer__menu_li">
                              Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
                              </p>
                          </div>
                          <div className='lg:ml-20'>
                              <h3 className='text-white'>Quick Links</h3>
                              <ul className="footer__menu_li">
                                  <li>How to Hire</li>
                                  <li> Text-FM</li>
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
                        
                          <p className='footer__text border-r border-white pr-4 '>© 2015 - 2022 Upwork® Global Inc.</p>
                          
                           <ul className='flex flex-wrap lg:flex-nowrap gap-8'>
                            <li className='footer__text'>Terms of Service</li>
                            <li className='footer__text'>Privacy Policy </li>
                            <li className='footer__text'> CA Notice at Collection</li>
                            <li className='footer__text'>Cookie Settings </li>
                            <li className='footer__text'>Accessibility</li>
                           </ul>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Footer;