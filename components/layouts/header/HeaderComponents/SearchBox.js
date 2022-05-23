
import { SET_SUBSCRIBE_FORM } from "../../../../redux/actions/SubscribeFormAction";
import { useDispatch, useSelector } from "react-redux";

const SubscribeForm = () => {

    const dispatch = useDispatch();


    return (

        <div className='bg-white shadow-lg rounded-2xl border border-red-600 px-10 py-8'>

            <div className='flex items-center justify-between '>

                  <p  className='text-2xl font-semibold'>Search Box</p>
                 <p title="Close Popup" onClick={() => dispatch(SET_SUBSCRIBE_FORM())} className=' cursor-pointer text-2xl text-right'>X</p>


            </div>

             <form className='mt-4'>

                     <div className="mb-6">
                                  
                                  <input type="text" className="text-sm border-2 border-gray-400 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search ..." required />

                              </div>

                            <button type="submit" className="rounded-full  text-white bg-black text-1xl hover:bg-gray-800 w-full sm:w-auto font-extrabold px-14 py-3 text-center ">FIND NOW</button>
               </form>
        </div>
    );
};

export default SubscribeForm;