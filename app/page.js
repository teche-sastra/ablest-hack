'use client';

import { useState } from 'react';
import Image from 'next/image';

import ham from './images/ham.png';
import sa from './images/sa.jpg';
import arrow from './images/arrow.png';
import star from './images/star.png';
import tbi from './images/tbi.png';
import idea from './images/idea.png';
import el from './images/el.png';
import dl from './images/dl.png';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import agritech from './images/agritech.jpg';

export default function Home() {
  const [open, setopen] = useState(true);
  return (
    <>
      <div className='flex flex-col'>
        <div className='h-screen w-auto bg-black'>
          <Image className='mt-50 h-screen w-auto opacity-70 object-cover select-none absolute top-0 left-0 z-0' src={agritech} />

          <nav className="bg-white shadow-md p-4 s md:flex flex-row justify-between items-center z-10 sm:[20vh] sticky">
            <div className="flex flex-row justify-between">
              <Image className='h-16 w-auto' src={tbi} />
              <span className="md:hidden block cursor-pointer"><button onClick={() => setopen(!open)}  ><Image className="w-8" src={ham} /></button></span>
            </div>

            <ul className={` transition-all mt-4 ease-in font-bold border-x-2 border-b-2 md:border-none border-green-400 duration-300 ${open ? 'opacity-0 md:opacity-100' : ''} md:py-0 pt-4 pl-2 md:pl-0 w-full md:w-auto left-0 md:flex flex-row md:items-center  z-[-1] md:z-auto md:static absolute md:bg-transparent`}>
              <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#about'>About</a></li>
              <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-green-400 cursor-pointer hover:text-green-600"><a href='#details'>Details</a></li>
              <li className="mx-4 md:my-0 my-6 pb-2 border-b-2 md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#guidelines'>Guidelines</a></li>
              <li className="mx-4 md:my-0 my-6 pb-2 md:border-none border-green-300 cursor-pointer hover:text-green-600"><a href='#themes'>Themes</a></li>
              <li className="mx-4 md:my-0 my-2 pb-2  md:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#faq'>FAQs</a></li>
            </ul>
          </nav>

          <div className={`flex justify-center item-center flex-col sm:px-4 md:pt-8 md:px-12 pt-52 z-10 h-[80vh] md:h-[84vh] relative`}>
            <div className='flex md:flex-row flex-col justify-center items-center '>
              <div className='md:w-3/4 flex flex-col space-y-4 md:space-y-2 '>
                <div className='md:text-6xl md:text-left text-center lg:text-6xl text-3xl md:ml-0 ml-4 font-bold text-white mt-12'>Agri-Tech Hackathon 2024</div>
                <div className='md:text-3xl text-white text-xl text-center md:text-left md:ml-0 ml-4'>Uniting innovative thinkers nationwide to create groundbreaking solutions for the critical challenges in today's agricultural landscape.</div>
                <div className='md:py-4 py-4 md:ml-0 ml- flex md:justify-start justify-center'>
                  <a id='details' className='px-4 mb-20 md:px-6 lg:px-8 p-2 rounded-xl flex text-xl md:text-xl flex-row justify-center items-center space-x-2 hover:bg-green-300 bg-green-500' href='https://forms.gle/iwyFnfhB3PasWdqD6'><span>Register</span> <Image className='w-4' src={arrow} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className='py-10 px-16 lg:px-48 text-xl'>
          <h2 className='text-3xl font-bold pb-10'>About</h2>
          The agriculture sector is at a crucial juncture, needing to adopt cutting-edge technology to address the challenges posed by a growing global population, climate change, and sustainability. An agri-tech hackathon is a vital event that brings together innovators—technologists, farmers, researchers, and entrepreneurs—to drive advancements in agriculture. By fostering collaboration, this hackathon aims to develop smart farming solutions and build resilient systems that improve food security, resource management, and environmental sustainability. Now is the time for the brightest minds to innovate and shape a more sustainable future for agriculture.
        </div>

        {/* details */}
        <div className='py-5'>
          <div className='cardcontain flex lg:flex-row flex-col justify-center items-center gap-24 lg:gap-6'>
            <div id="details" className='card pt-6 pl-4 pr-6 pb-2 relative bg-slate-200 transition-transform rounded-md hover:scale-105 hover:shadow-2xl h-auto lg:h-[65vh] md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={el} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading font-bold space text-3xl mb-6 text-center'>Eligibility</div>
              <div className='content text-xl'>
                <ul className='list-disc pl-6'>
                  <li>👨 Students and professionals from all backgrounds (technology, agriculture, business, etc.)</li>
                  <li>👨‍💼 Startups</li>
                  <li>👨‍🎓 Researchers and academics</li>
                  <li>🛠 Anyone with a passion for Agri-tech innovation</li>
                </ul>
              </div>
            </div>
            <div className='card text-center pt-6 pl-4 pr-6 pb-2 bg-slate-200 transition-transform rounded-md hover:scale-105 overflow-y-auto  lg:h-[65vh] hover:shadow-2xl h-auto md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={dl} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading font-bold space text-3xl mb-6 text-center'>Why participate?</div>
              <div className='content text-xl'>
                <ul className=' list-disc text-left pl-6'>
                  <li><strong>Innovate:</strong> Develop and showcase your innovative solutions to real-world agricultural problems.
                  </li>
                  <li>
                    <strong>Collaborate:</strong> Work with like-minded
                    individuals and mentors
                  </li>
                  <li>
                    <strong>Transform:</strong> Make a tangible impact on the agricultural sector and help shape the future of farming
                  </li>
                </ul>
              </div>
            </div>
            <div id="awa" className='card text-center pt-6 pl-4 pr-6 pb-2 bg-slate-200 transition-transform rounded-md hover:scale-105 lg:h-[65vh] hover:shadow-2xl h-auto md:h-[55vh] w-[80vw] lg:w-[25vw] mb-12'>
              <div className="image mb-4 h-[20vh] w-full grid place-items-center">
                <Image src={star} className='h-[20vh] w-[25vh]' />
              </div>
              <div className='heading  font-bold space text-3xl mb-6 text-center'>Prizes</div>
              <div className='content text-center text-xl'>
              <div className='content text-xl'>
                <ul className=' list-disc text-left pl-6'>
                  <li>💰Cash Prizes
                    <ul>
                      <li>1<sup>st</sup> prize: ₹5,000</li>
                      <li>2<sup>nd</sup> prize: ₹3,000</li>
                      <li>3<sup>rd</sup> prize: ₹2,000</li>
                    </ul>
                  </li>
                  <li>Incubation Support for next 18 months with Networking Opportunities</li>
                  <li>Seed funding facility for startups with viable solutions</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div id="guidelines" className="py-5 px-16 lg:px-48 text-xl">
          <h2 className='text-3xl font-bold pb-10'>Guidelines</h2>
          <ul className='list-disc text-left pl-6'>
            <li>📜 Registration is <strong>mandatory.</strong></li>
            <li>🧑‍🤝‍🧑 Each team can have up to <strong>4 members</strong>, including the team leader.</li>
            <li>🤝 Members from different branches of the same college/institute are encouraged to form a team.</li>
            <li>📆Presentation submission Deadline - <strong>August 17, 2024</strong><br/>This PPT will be <strong>reviewed</strong> by the Preliminary Screening and Evaluation Committee.</li>
            <li><span className='font-bold text-2xl'>Requirements</span><br />
              <ul>
                <li>Your solution should address at least one of the challenges announced during the launch of the Agri-Tech Hackathon, focusing on innovation, practicality, and technology.</li>
                <li>You are requested to submit your solution details in the <a href='https://forms.gle/iwyFnfhB3PasWdqD6' className='font-bold'>form</a> with a maximum of 15 slides.</li>
                <li>
                  <b>File format:</b> .ppt/.pptx only<br />
                  <b>Size:</b> Maximum 9 MB<br />
                  <b>Duration:</b> Maximum 7 minutes<br />
                </li>
              </ul>
            </li>
            <li><span className='font-bold text-2xl'>Post-registration details</span><br />
              <ul>
                <li>The shortlisted teams will be announced after reviewing the PPT.</li>
                <li>All communications will be sent through registered email id only.</li>
                <li>Decisions of the organizing committee/jury will be the final in all rounds.</li>
                <li>No argument or appeal will be entertained.</li>
                <li>Participation certificates will be given only to candidates, who qualify in Level-2 Round.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="themes" className='py-5 px-16 lg:px-48 text-xl'>
          <h2 className='text-3xl font-bold pb-10'>Challenges Themes</h2>
          <ol className='list-decimal'>
            <li>Sodic Soil and Saline Water Management</li>
            <li>Value Additions in Food Products (specific to processing techniques)</li>
            <li>Farm Mechanization</li>
            <li>Issues to Resolve Challenges Faced by Differently Abled</li>
            <li>Climate Smart Agriculture</li>
            <li>Other Areas Related to Agriculture (if any)</li>
          </ol>
        </div>

        <div id="faq" className='py-5 px-16 lg:px-48'>
          <h2 className='text-3xl font-bold pb-10'>FAQ</h2>
          <ol className='list-decimal text-xl'>
            <li>
              <strong>How does it work?</strong><br />
              During the Agritech Hackathon 2024 launch on August 2, 2024, specific problem statements will be provided. Teams or individuals of up to 4 people can apply. Once the problem statements are given, teams will have 15 days to submit their proposed solutions, which should include a proof of concept or prototype.<br />
              Selected participants will be invited to SASTRA Deemed University in Thanjavur for the boot camp (Level-2) event, tentatively planned for September 2024.
            </li>
            <li>
              <strong>What is the deadline to register and submit solutions?</strong><br />
              You need to register and submit solutions by August 17, 2024.
            </li>
            <li>
              <strong>What is the participation fee?</strong><br />
              There is no fee for students, research scholars, startups, or innovators.
            </li>
            <li>
              <strong>Who can participate in this hackathon?</strong><br />
              Undergraduate and postgraduate students, research scholars, startups, and innovators enrolled in affiliated institutes across India can participate. Please note that we will not reimburse any expenses.
            </li>
            <li>
              <strong>What is the required team size?</strong><br />
              Teams can have a maximum of 4 members.
            </li>
            <li>
              <strong>What should I have?</strong><br />
              All shortlisted participants need to bring their own laptops for the boot camp (Level-2 Round), which is tentatively planned for September 2024.
            </li>
            <li>
              <strong>How do I contact the organizers for any queries?</strong><br />
              For any queries, feel free to reach out to us at <a href="mailto:ablest@sastra.ac.in" className='font-bold'>ablest@sastra.ac.in</a>.
            </li>
          </ol>
        </div>

        {/* footer */}
        <div className="pb-16 pt-8 ">
          <div className='text-2xl m-4 text-center text-gray-400'>Our Partners</div>
          <div className='flex md:flex-row flex-col flex-wrap justify-evenly items-center space-y-4 p-4'>
           <Image className='w-4/5 md:w-1/4 h-auto' src={sa} />
           <Image className='w-2/4 md:w-1/5 h-auto' src={f1} />
           <Image className='w-4/5 md:w-1/4 h-auto' src={f2} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-gray-400 p-8 md:pl-40 md:pr-40">
          Made by Tech-E
          <a href='https://ecellsastra.org' className='font-bold hover:text-grey-700' target='_blank'>&copy; E-Cell SASTRA.</a>All Rights Reserved 2024
        </div>
      </div>
    </>
  )
}
