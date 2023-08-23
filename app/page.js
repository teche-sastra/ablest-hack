'use client'
import Image from 'next/image'
import ham from '../images/ham.png'
import dd from '../images/dd.jpeg'
import sas from '../images/sas.png'
import arrow from '../images/arrow.png'
import fruits from '../images/fruits.png'
import date from '../images/date.png'
import star from '../images/star.png'
import eli from '../images/eli.png'
import tbi from '../images/tbi.png'
import jana from '../images/jana.png'
import idea from '../images/idea.png'
import abt from '../images/abt.png'
import el from '../images/el.png'
import dl from '../images/dl.png'
import about from '../images/about.png'
import { useState } from 'react'
import "./style.css"
export default function Home() {
  const [open, setopen] = useState(true)
  return (
    <>
      <div className='font-sans scroll-smooth'>
        <nav className="bg-white shadow-md p-4 s md:flex flex-row justify-between items-center relative z-0 sm:[20vh] md:h-[16vh]">
          <div className="flex flex-row justify-between">
            <div className='images grid w-60 md:flex lg:w-80 md:w-60'>
              <Image className='md:w-36' src={sas} />
              <Image className='' src={tbi} />
            </div>
            <span className="md:hidden block cursor-pointer"><button onClick={() => setopen(!open)}  ><Image className="w-8" src={ham} /></button></span>
          </div>



          <ul className={`top-[20vh] transition-all ease-in font-bold border-x-2 border-b-2 md:border-none border-orange-300 duration-300 ${open ? 'opacity-0 md:opacity-100' : ''} bg-orange-100   md:py-0 pt-4 pl-2 md:pl-0 w-full md:w-auto left-0 md:flex flex-row md:items-center  z-[-1] md:z-auto md:static absolute md:bg-transparent`}>
            {/* <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#about'>About</a></li> */}
            {/* <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#eligible'>Eligibility</a></li> */}
            <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#details'>Details</a></li>
            <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#idea'>Idea/Themes</a></li>
            {/* <li className="mx-4 md:my-0 my-2 pb-2  md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#awa'>Date/Awards</a></li> */}



          </ul>
        </nav>


        {/* hero */}

        <div className=' abi_bhu flex justify-center item-center flex-col sm:px-4 md:pt-8 md:px-12 pt-6 bg-gradient-to-tr from-orange-200 h-[80vh] md:h-[84vh]'>
          <div className='flex md:flex-row flex-col justify-center items-center '>
            <div className='md:w-1/3 flex flex-col space-y-4 md:space-y-6 '>
              <div className='md:text-4xl md:text-left text-center lg:text-3xl 2xl:text-7xl xl:text-5xl text-4xl md:ml-0 ml-4 font-bold '>Nutrition Hackathon <br></br> 2023</div>
              <div className='md:text-xl  lg:text-2xl 2xl:text-4xl text-2xl text-center md:text-left md:ml-0 ml-4'>Seeking creative theme-oriented ideas from creators throughout India</div>
              <div className='md:py-4  py-4 md:ml-0 ml- flex md:justify-start justify-center'>
                <button className='px-4 md:px-6 lg:px-8 p-2 rounded-3xl flex text-xl md:text-xl flex-row justify-center items-center space-x-2 hover:bg-orange-300 bg-orange-400'><span><a id='details' href='https://docs.google.com/forms/d/e/1FAIpQLSeVsVsw2P336oIxawTvst0Gkazk0q82MBergJymdz9_8qZOZA/viewform' target='_main'>Register</a></span> <Image className='w-4' src={arrow} /></button>
              </div>
            </div>
            <div className='md:block'>
              <Image className='h-[30vh] w-[30vh] md:h-[50vh] md:w-[50vh]' src={fruits} />
            </div>
          </div>

        </div>


        {/* about */}


        {/* <div id='about' className='flex flex-col bg-gradient-to-br from-orange-200 space-y-4 pb-8 justify-center items-center pt-8 p-4'>
          <div className='lg:text-4xl font-bold text-3xl md:text-3xl'>About</div>
          <Image className='w-72' src={about} />
          <div className='md:w-3/5 text-center font-semibold text-xl md:text-2xl'>We are welcoming submissions for theme-based concepts in the "Nutrition Hackathon 2023," calling upon Students, Research Scholars, Faculty, and Innovators from across India to participate.
            This Nutrition Innovation Event is brought to you by
            SASTRA - ABLEST & JANANOM NATURAL NUTRITION.

          </div>


        </div>
        <div id='eligible' className='flex flex-col pt-8 space-y-0 bg-gradient-to-tl from-rose-200  justify-center items-center p-4'>
          <div className='lg:text-4xl font-bold text-3xl md:text-3xl'>Eligibility</div>
          <Image className='w-72' src={el} />
          <div className='md:w-3/5 text-xl font-semibold text-center md:text-2xl'>Students, Research Scholars, Faculties & Innovators</div>
          
          
          


        </div> */}
        
        {/* details */}
        <div className='  abi_bhu details h-[180vh] lg:h-[60vh] relative'>
          <div className='cardcontain flex lg:flex-row flex-col justify-center items-center gap-24 lg:gap-6'>
            <div className='card -mt-[10vh] pt-6 pl-4 pr-6 relative bg-slate-200/90 transition-transform rounded-xl hover:scale-105 hover:shadow-2xl  h-[55vh] w-[80vw] lg:w-[25vw]'>
                {/* <div className="blur w-full h-full absolute top-0 bg-white"></div> */}
                <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={el} className='h-[20vh] w-[25vh]'/>
                </div>
                <div className='heading  font-bold space text-3xl mb-6 text-center'>Eligibility</div>
                <div className='content text-xl'>
                  <ul className='list-disc pl-6'>
                    <li>Students</li>
                    <li>Research Scholars</li>
                    <li>Faculties</li>
                    <li>Innovators</li>
                  </ul>
                  </div>
            </div>
            <div className='card text-center -mt-[10vh] pt-6 pl-4 pr-6 bg-gray-200/90  transition-transform rounded-xl hover:scale-105 hover:shadow-2xl h-[55vh] w-[80vw] lg:w-[25vw]'>
                <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={dl} className='h-[20vh] w-[25vh]'/>
                </div>
                <div className='heading  font-bold space text-3xl mb-6 text-center'>Dates</div>
                <div className='content text-xl'>Send a short video <b>3mins (max)</b> to <b>ablest@sastra.ac.in</b> by <b>20th sep 2023</b></div>
            </div>
            <div className='card text-center -mt-[10vh] pt-6 pl-4 pr-6 bg-gray-200/90  transition-transform rounded-xl hover:scale-105 hover:shadow-2xl h-[55vh] w-[80vw] lg:w-[25vw]'>
                <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={star} className='h-[20vh] w-[25vh]'/>
                </div>
                <div className='heading  font-bold space text-3xl mb-6 text-center'>Awards</div>
                <div className='content text-xl'>2 ideas will be awarded <b>Rs. 25000</b> each by <b>Janonam Natural Nutrition</b></div>
            </div>
          </div>
          <div className="bg-orange-400 h-[180vh] lg:h-[60vh] w-full absolute -z-10 bottom-0 left-0 pb-82"></div>
        </div>


        {/* ideas */}
        <div id='idea' className='abi_bhu pt-8 bg-gradient-to-bl from-rose-200 flex space-y-4 flex-col justify-center items-center md:pb-12 pb-8  px-2'>
          <div className='text-4xl font-bold flex flex-row'><span>Ideas</span> <Image className='w-16' src={idea} /></div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-violet-500 text-white'>
            <div className='text-2xl font-bold'> 1.“30 different plants a week” challenge :</div>
            <div className='md:w-4/5 text-xl'>
              Balancing millets:<br></br> a. Design an ideal meal (with no anti-nutrients) with at least 30 different plants (plant parts) & millets (compulsorily at least 3) to meet 50% of recommended RDA (Recommended Daily Allowances of nutrients) for Indian adults.<br></br> b. Offer convenience in consumption that should be ready to eat or ready to drink – straight out of the box / can – without any cooking/ heating etc.<br></br> c. Enable versatile culinary profile to prepare a wide range of dishes and snacks. Embracing millets in modern diets that appeal to modern tastes and dietary preferences.</div>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-green-500 text-white'>
            <div className='text-2xl font-bold'> 2. Design Food-Ink cartridge & food printer for Jananom’s vegan Nutrimix :</div>
            <div className='md:w-4/5 text-xl'>
              a. Formulate it suitably for flowing characteristics & rheology for printing.<br></br> b. Able to customize food design on the printer – from a mobile app / website.<br></br> c. Total printing time not to exceed 180 minutes per dish.</div>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 md:w-3/4 rounded-lg shadow-md p-8 bg-orange-400 text-white'>
            <div className='text-2xl font-bold'>3. Gut-brain hack for yogic meal :</div>
            <div className='md:w-4/5 text-xl'>
              a. As per Indian traditional system, there are certain recommended diets that support gut-brain axis for those who want to do meditation and do tasks that involve mental focus. Design such a diet.<br></br> b. Should meet atleast 20% of RDA<br></br> c. Should involve minimal cooking.</div>
          </div>
        </div>


        {/* dates awards */}


        {/* <div id='awa' className='flex flex-col justify-center items-center space-y-12 pb-12  md:m-0 bg-gradient-to-tl from-amber-300'>
          <div className='text-center text-4xl mt-12 font-bold'>Dates And Awards</div>
          <div className=' flex flex-col-reverse md:flex-row p-2 md:px-12 justify-center items-center md:w-3/5 '>
            <div className='shadow-lg  flex flex-col bg-violet-500 p-6 rounded-xl text-white'>
              <div className='text-3xl'>Dates</div>
              <div className='text-xl w-3/4'>Dead Line for submitting the short video of maximum of 3 minutes at ablest@sastra.ac.in , is
                <span className='font-bold'> 20th Sep 2023</span></div>
            </div>
            <div className='md:w-1/4 relative top-8'>
              <Image className='w-48 md:64' src={dl} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:px-12 p-2 justify-center items-center  '>
            <div className='md:w-1/4 relative top-8 md:left-12'>
              <Image className='w-56' src={star} />
            </div>
            <div className='shadow-lg md:w-3/5 flex flex-col bg-amber-400 p-6 rounded-xl text-white'>
              <div className='text-3xl'>Awards</div>
              <div className='text-xl w-3/4'>The two most outstanding team ideas will be awarded a cash prize of <span className='font-bold'>Rs. 25,000</span> each by Janonam Natural Nutrition.</div>
            </div>

          </div>
        </div> */}



        {/* footer */}
        <div className="abi_bhu pb-16  bg-gray-800 pt-8 ">
          <div className='text-2xl m-4 text-center text-gray-400'>Our Sponsors</div>
          <div className='flex md:flex-row flex-col flex-wrap justify-evenly items-center space-y-4 p-4'>
            <Image className='h-24' src={jana} />
          </div>


        </div>

        <div className="h-1 bg-gray-700"></div>
        <div className="flex flex-col justify-center items-center bg-gray-800 text-gray-400 p-8 md:pl-40 md:pr-40">
          <div>MADE BY <a href='https://ecellsastra.org' className='font-bold' target='_main'>TECH-E</a></div>
          <div className='text-center'><a href='https://ecellsastra.org' className='font-bold' target='_main'>&copy; E-Cell SASTRA</a>.All Rights Reserved 2023 </div>

        </div>




      </div>


    </>
  )
}
