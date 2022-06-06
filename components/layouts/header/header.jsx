import Link from "next/link";
import React, { useEffect, useState } from "react";
import localUrl from "../../../utility/localUrl";
import style from "./header.module.css";
const axios = require("axios");
import { MdOutlineDarkMode } from "react-icons/md";
import SearchBox from './HeaderComponents/SearchBox.js';
import { useDispatch, useSelector } from "react-redux";
import { SET_SUBSCRIBE_FORM } from "../../../redux/actions/SubscribeFormAction";
import { FaSistrix } from "react-icons/fa";

const Header = () => {

  const [primaryMenu, setPrimaryMenu] = useState([]);
  const [phoneMenu, setPhoneMenu] = useState(false);
  var id = ''

  const dispatch = useDispatch();
  const form = useSelector((state) => state.SubscribeFormReducer);

  const [mode, setMode] = useState("light");
  let storedMode = '';

  const changeMode = () => {

    id.classList.add('dark');

    if (storedMode == "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("Light");
    }
  };

  const sortingData = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  useEffect(() => {
    const getMenuList = () => {
      axios
        .get(localUrl() + "/json/primary_menu.json")
        .then((response) => {
          const menuList = response.data;
          menuList.sort(sortingData("menu_position"));
          console.log("menuList", menuList);
          setPrimaryMenu(menuList);
        })
        .catch((err) => console.error(err))
        .then(() => {
          console.log("final done");
        });
    };

    getMenuList();

    // id = document.getElementsByClassName('body');
    // let t = document.body.classList;
    // console.log('body is', t)
    // document.body.classList.add("dark");

    if( localStorage.getItem("mode")){
      localStorage.getItem("mode")
    }

  }, []);


  const toglePhoneMenu = () =>{

    setPhoneMenu(!phoneMenu)
     
  }

  const user = 'a';


  return (

    <>
    <div>

         {form && 
              
              <div className="popup__background">
                <div className='lg:w-5/12 md:w-5/12 w-full form__center'>
                  <SearchBox/>
                </div>
              </div>
              }

    </div>
      <div className="fixed top-0 w-full block z-50">
        <div className="border-t-2 lg:px-48 bg-white text-black px-6 shadow-lg w-full block md:py-5 py-2.5 border-gray-300 bg-top-bar relative ">

          <div className="lg:block md:block hidden ">
            <div className="flex justify-between items-center gap-5">
            <div className="flex gap-16 items-center w-4/12 ">
              <div className="text-3xl text-black ">
                <Link href="/">
                  TextFm
                </Link>
              </div>
          
              <div className={style.menu_ul__li}>
                <ul className={`${style.menu__item} flex -ml-4  gap-10`}>
                  {primaryMenu.map((item, index) => {
                    return (
                      <Link key={index} href={item.menu_link}>
                        <a className={style.menu__item}>{item.menu_title}</a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            </div>
          </div>


         

           {/* phone left side menu */}

        {phoneMenu && 
            <div className={`z-50 t-popup__background phone__header ${phoneMenu ? '': ''}`}>

              <div className={`border-t-2 border-gray-300 bg-white pb-4 lg:shadow shadow-xl fixed top-14 left-0  w-72 `}>
              
                <div className={`${style.phome__menu__div}`}>
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                    
                     <div  className="px-6 flex gap-4 py-3">
                      <i className="phone_menu_icon las la-globe-africa"></i>
                      <Link href='/news'>
                        <a className={`${style.phone__menu__item}`}>
                           Top stories
                          </a>
                      </Link>
                      </div>

                     <div  className="phone_menu_icon px-6 flex items-center gap-4 py-3">
                     <i className="lar la-hand-point-right"></i>
                      <Link href='/news'>
                        <a className={`${style.phone__menu__item}`}>
                           For you
                          </a>
                      </Link>
                      </div>

                     <div  className="phone_menu_icon items-center px-6 flex gap-4 py-3">
                     <i className="las la-search"></i>
                      <Link href='/news'>
                        <a className={`${style.phone__menu__item}`}>
                         Saved searches
                          </a>
                      </Link>
                      </div>


                     <div  className="px-6 flex items-center gap-4 py-3">
                       <i className="phone_menu_icon las la-star-half-alt"></i>
                      <Link href='/news'>
                        <a className={`${style.phone__menu__item}`}>
                           Following
                          </a>
                      </Link>
                      </div>

                    </ul>

                   <div className="px-6">
                    <div className="py-5 my-4 phone_menu_icon border-y flex items-center gap-3">
                         <i className="las la-notes-medical"></i>
                        <a className={`${style.phone__menu__item}`}>CAVID-19</a>
                      </div>
                   </div>
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="phone_menu_icon px-6 flex gap-4 py-3">

                              {item.menu_title == 'World' &&  <i className="las la-globe-africa"></i>}

                              {item.menu_title == 'Science' && <i className="las la-flask"></i>}

                              {item.menu_title == 'Business' && <i className="las la-city"></i>}

                              {item.menu_title == 'Entertainment' && <i className="las la-city"></i>}
                              {item.menu_title == 'Technology' && <i className="las la-microchip"></i>}

                              {item.menu_title == 'Your local news' && <i className="las la-map-marker"></i>}

                            <Link href={item.menu_link}>
                              <a className={`${style.phone__menu__item}`}>
                                {item.menu_title}</a>
                            </Link>

                          </div>
                        );
                      })}
                    </ul>
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="phone_menu_icon px-6 flex gap-4 py-3">

                              {item.menu_title == 'Business' ? <i className="las la-city"></i> : 

                                  <i className="phone_menu_icon las la-globe-africa"></i>
                              }

                            <Link href={item.menu_link}>
                              <a className={`${style.phone__menu__item}`}>
                                {item.menu_title}</a>
                            </Link>

                          </div>
                        );
                      })}
                    </ul>
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-4 py-3">

                            <span className="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className="hGhvff NMm5M"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path></svg>
                                                        
                            </span>

                            <Link href={item.menu_link}>
                              <a className={`${style.phone__menu__item}`}>
                                {item.menu_title}</a>
                            </Link>

                          </div>
                        );
                      })}
                    </ul>
                    
                  </div>

              </div>

            </div>
        }

          </div>
      </div>

         {/* phone header */}
       <div className="border-t border-gray-400 lg:hidden md:hidden block z-50 bg-white shadow-lg w-full py-3 fixed top-0 px-4">
         <div className="flex items-center justify-between gap-20">

           <div className="text-lg text-black">
             <i onClick={toglePhoneMenu} className=" cursor-pointer text-3xl las la-bars"></i>
             </div>

           <div className="text-lg text-black">
                 <span className="text-black font-bold text-2xl">
                    <Link href="/">
                      TextFM
                    </Link>
                  </span>
           </div>
            <div className="text-lg text-black"><span className="text-black font-bold text-2xl">
                    <FaSistrix/>
                  </span></div>
         </div>
       </div>
       
    </>
    
  );
};

export default Header;
