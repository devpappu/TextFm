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


          {/* phone header */}
          
          <div className="lg:hidden md:hidden">

            <div className="flex items-center justify-between gap-20">

            <div className="flex items-center  gap-8 text-black">
                    {/* <div onClick={() => dispatch(SET_SUBSCRIBE_FORM())} className=" cursor-pointer text-3xl "><FaSistrix/></div> */}
                    {/* <div onClick={changeMode} className=" cursor-pointer text-3xl "><MdOutlineDarkMode/></div> */}
                  <i onClick={toglePhoneMenu} className=" cursor-pointer text-3xl las la-bars"></i>
              </div>

            <div>
              <span className="text-black font-bold text-2xl">
                <Link href="/">
                  {/* <a> <Image src="/images/upwork.png" width="130px" height="30px" className='logo site__logo' alt="website logo" /></a> */}
                  TextFM
                </Link>
              </span>
            </div>

            <div>
              <span className="text-black font-bold text-2xl">
                <FaSistrix/>
              </span>
            </div>

            
            </div>
          </div>

           {/* phone left side menu */}

        {phoneMenu && 
            <div className={`t-popup__background phone__header ${phoneMenu ? '': ''}`}>

              <div className={`border-t-2 border-gray-300 bg-white pb-4 lg:shadow shadow-xl fixed top-14 left-0  w-72 `}>
              
                <div className={`${style.phome__menu__div}`}>
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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
                    <ul className={`${style.menu__item} mt-4   text-black`}>
                      {primaryMenu.map((item, index) => {
                        return (
                          <div  key={index} className="px-6 flex gap-3 py-3">

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


       
    </>
    
  );
};

export default Header;
