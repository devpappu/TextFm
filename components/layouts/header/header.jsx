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
      <div className=" fixed top-0 z-50 w-full block ">
        <div className="lg:px-48 bg-white text-black px-6 shadow-md border-b w-full block md:py-5 py-2 border-gray-100 bg-top-bar relative ">

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


            <div className="flex flex-wrap items-center gap-5">
                <div>
                    {
                      user.email? <Link
                      href="/dashboard"
                      className={` ${style.sign__btn} text-white primary__bg__color py-2 rounded-full px-8`}
                    >
                      Dashboard
                    </Link> :  <div className="flex gap-8">
                    {/* <div onClick={() => dispatch(SET_SUBSCRIBE_FORM())} className=" cursor-pointer text-3xl "><FaSistrix/></div> */}
                    <div onClick={changeMode} className=" cursor-pointer text-3xl "><MdOutlineDarkMode/></div>
                    </div>
                    }
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
            
              <div className={`popup__background phone__header ${phoneMenu ? '': ''}`}>

                <div className={`h-screen bg-white pb-4  absolute top-0 left-0  w-4/6 `}>
                
                  <div className=''>
                  
                    <div className="bg-blue w-full py-2 px-6 flex justify-between items-center ">
                      <p className="text-black text-lg">Main Menu</p>

                      <button onClick={toglePhoneMenu} className="bg-white px-4 rounded-lg text-red-500 text-4xl">x</button>

                    </div>

                      <ul className={`${style.menu__item} mt-4   text-black`}>
                        {primaryMenu.map((item, index) => {
                          return (
                            <Link key={index} href={item.menu_link}>
                              <a className={`block border-b border-gray-200 px-6 py-3 `}>{item.menu_title}</a>
                            </Link>
                          );
                        })}
                      </ul>

                      <div className="px-6 mt-2 ">


                        {/* <p>Logout</p> */}
              {
                user.email? <Link
                href="/dashboard"
                className={` ${style.sign__btn} primary__bg__color py-2 rounded-full px-8 text-black `}
              >
                Dashboard a
              </Link> :  <>
              <Link
                href="/login"
                className={` ${style.sign__btn} text-black primary__bg__color py-2 rounded-full px-8`}
                style={{textTransform: 'uppercase'}}
              >
                <a className={`${style.phone_menu_item}`}> Login</a>
              </Link>
              <Link
                href="/signup"
                className={` ${style.sign__btn} text-black primary__bg__color py-2 rounded-full px-8`}
              >
                <a className={`${style.phone_menu_item}`}>Sign Up</a>
              </Link>

              </>
              }

                      </div>
                      
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
