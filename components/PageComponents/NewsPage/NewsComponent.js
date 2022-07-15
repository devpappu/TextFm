import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import style from './blog.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const NewsComponent = ({news}) => {

  const audioPlayer = useRef();

  // const [audio] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  // const [audio] = useState(new Audio(url));

  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [duration, setDuration] = useState(0);

  const [voice, setVoice] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  const [audio] = useState(new Audio(voice));
  const [playing, setPlaying] = useState(false);
  const [currentVoice, setCurrentVoice] = useState({});

    
    const handleVoice = (voice) =>{
      setCurrentVoice(voice);
      //  setAudio(new Audio(voice));
      let d = audio.duration
       setDuration(d);

       setPlaying(!playing);
    }

    const onPlaying = () => {
      setCurrentTime(audioPlayer.current.currentTime);
      setSeekValue(
        (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
      );
    };

    useEffect(() => {
      playing ? audio.play() : audio.pause();
      // let d = audio.duration
      // setDuration(d);
    },
    [playing]
  );

    return (
        <>

          {/* d: {duration} */}

          {news.map((item, index) =>{
                return(
                <div key={index} className="mb-6 bg-white rounded-lg shadow-lg px-5 pt-4 pb-2 box__shadow border border-gray-200  ">
                    <div className='mt-2 lg:flex md:flex justify-center items-center gap-5'>

                          <div className='lg:w-4/12 md:w-5/12 w-full'>
                              <Image  width="500px" height="280px" src="/images/gig3.jpg" 
                                  className={`${style.blog__image} blog__image rounded-lg`}  alt={item.post_title}  />
                          </div>

                          <div className='lg:w-8/12 md:w-7/12'>
                          
                              <p className="mt-3 lg:text-2xl text-lg">{item.post_title}</p>
                          
                              <p className='mt-3' >{item.des}</p>

                              <div className='mt-5 flex gap-2 justfy-between items-center '>

                                 <p className='text-gray-700 text-sm'>12-07-2022 05:13 PM</p>
                                 
                                 <div onClick={() => handleVoice(item)} className=" cursor-pointer flex gap-1 items-center hover:bg-gray-100  py-0.5 px-4 rounded ">
                                    <button  className='text-4xl text-gray-500 '>
                                      
                                      {playing ? (
                                              <>
                                                  {currentVoice.id == item.id ? <i className="las la-stop-circle"></i>
                                                  : <i className="las la-play-circle"></i>}
                                              </>
                                        ):(
                                          <i className="las la-play-circle"></i>
                                        )}
                                      </button>

                                    <span className='text-gray-500 text-sm '>Voice</span>
                                 </div>

                              </div>

                            <div>

                                <button className='mt-2 text-left text-black py-3'>Read more at 
                                  <span className='ml-2  font-medium border-b border-black pb-1 '>
                                    Time Now
                                  </span>
                                </button>
                            </div>

                          </div>
                    </div>
                </div>
                )
            })
        }

        </>
    );
};

export default NewsComponent;