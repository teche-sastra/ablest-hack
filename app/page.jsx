'use client';

import { useState } from 'react';
import Image from 'next/image';
import ablest from '../images/ablest.png';
import hamburger from '../images/hamburger.png';
import agritech from '../images/agritech.jpg';
import arrow from '../images/arrow.png';
import eligible from '../images/eligible.png';
import work from '../images/work.png';
import prize from '../images/prize.png';
import sastra from '../images/sastra.jpg';
import tnau from '../images/tnau.jpg';
import tabif from '../images/tabif.jpg'; 
import flyer from '../images/flyer.jpg' 
import ReactPlayer from 'react-player';

const sections = [
  {
    title: "Sodic Soil and Saline Water Management",
    items: [
      "Sodic and Saline soil reclamation solution - Phyto-assisted technologies / better Gypsum dissolution technology/ any other methodology",
      "A cost-effective intervention for saline water usage for crop production in Tamil Nadu, optimal mixing of saline and fresh water to reduce EC and ESP in drip and fertigation system",
      "A portable, user-friendly tool for rapid field-level diagnosis of soil sodicity and salinity using existing ion-selective membrane electrode / any other methodology to measure Exchangeable Sodium Percentage (ESP) levels",
      "The life enhancement of the building construction under sodic soil",
      "Salt extraction from Salicornia species abundantly available in the coastal ecosystem and to meet Indian consumer preference"
    ]
  },
  {
    title: "Food Industry (Value added products/ Improvement in processing)",
    items: [
      "Develop a cost-effective Vinca rosea-based products (nano-emulsions, natural dyes, antimicrobial wound dressings, and anti-helminthic formulations)",
      "Increase shelf life/ Value added products/edibles (Shallot onions/ Betel Vine/ Small millet flours/ Sugar cane juice/ Idly batter without refrigeration / Palmyra)",
      "Millet based Parotta mix without adding additives/chemicals",
      "Develop an automated plate grinder/pulveriser system that minimizes temperature increase and optimizes grinding efficiency through dynamic plate gap adjustment, ensuring high-quality small millet flour production",
      "Cost effective cleaning/grading machines for Sesame",
      "Rice based resistant starch products for mass consumption",
      "Increase the stability and recovery rate of natural dyes for textile and food industry from fruit waste/ Forest litters/ TNEB pruning / monsoon tree breaks/ any specific crops"
    ]
  },
  {
    title: "Farm Mechanization",
    items: [
      "Cost-effective farm level tools/Mimics to overcome Birds/Animal damages in the field",
      "Robotic harvest for Tree crops (Coconut/ Palm)",
      "Minimize tannin content while extracting coconut water from tender coconut upon opening to prevent astringency and preserve its natural taste and quality",
      "Commercial farm level tools for harvesting flower in flower crops like Jasmine, Arali",
      "Devices for easing emasculation and pollination in pulses, groundnut, small millets",
      "Customized controls of Automated Hydroponics / Soil less media in Green houses",
      "Hydrogen synthesis from biological wastes"
    ]
  },
  {
    title: "Export industry related problems",
    items: [
      "Detection methods for pesticide, mycotoxins, metabolites in food (Eg., curcumin in Turmeric), to minimize contamination and ensure the safety of food processing units and marketing",
      "Infestation control in all packed flour (non-chemical based)",
      "Plant based fumigants / alternate to chemical fumigants (Aluminium phosphate, Methyl bromide) for pest management in warehouses",
      "Quick detection system/ nano-stickers/ nano-sensors for pesticide residue/ product expiry/ for any specific consumers product selection in fruits and vegetables",
      "Commercial IoT enabled system for real time monitoring and management of, Weevil in mango export and rodent management in godown warehouses"
    ]
  },
  {
    title: "Issues to Resolve Challenges Faced by Differently Abled",
    items: [
      "Efficient and cost-effective scribe for organizing exams for vision/ partial vision students",
      "Develop affordable, wearable assistive technologies, including FM systems and sound-detecting wearables, to enhance inclusivity and independence for individuals with hearing impairments",
      "Design and develop adaptive farm tools and systems for farm and post-harvest operations to assist mobility-impaired individuals",
      "Design and develop a cost-effective, customizable, and user-friendly system to assist individuals with mobility impairments in climbing stairs, adaptable for varying numbers of floors"
    ]
  },
  {
    title: "Other Issues",
    items: [
      "Development of Credit rating score for Farmers Like CIBIL Score for PAN Card holders to get credit from commercial banks",
      "Detection of availability of live cells from age-old trees to propagate and preserve Sthalaviruksha’s in temples",
      "DNA extraction method/system from dried plant specimen",
      "High throughput phenotyping using drones/AI technology"
    ]
  }
];

export default function Home() {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className='bg-[#F5FFF7] flex flex-col overflow-x-hidden'>
        <nav className="bg-white shadow-md p-4 s lg:flex flex-row justify-between items-center z-40 sm:[20vh] sticky top-0 left-0">
          <div className="flex flex-row justify-between">
            <Image className='h-8 md:h-16 w-auto' src={ablest} />
            <span className="lg:hidden block cursor-pointer">
              <button onClick={() => setopen(!open)} >
                <Image className="w-8" src={hamburger} />
              </button>
            </span>
          </div>

          <ul className={`font-medium border-x-2 border-b-2 lg:border-none border-orange-400 ${open ? 'block' : 'hidden'} px-4 lg:p-0 w-full lg:w-auto left-0 lg:flex flex-row lg:items-center lg:static absolute bg-white lg:bg-transparent`}>
            <li className='mx-4 lg:my-0 my-2 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600'><a href="https://ablest.sastra.edu">Home</a></li>
            <li className="mx-4 lg:my-0 my-6 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#about'>About</a></li>
            <li className="mx-4 lg:my-0 my-6 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#details'>Details</a></li>
            <li className="mx-4 lg:my-0 my-6 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#guidelines'>Guidelines</a></li>
            <li className="mx-4 lg:my-0 my-6 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#themes'>Themes</a></li>
            <li className="mx-4 lg:my-0 my-6 lg:p-0 pb-2 border-b-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600"><a href='#faq'>FAQs</a></li>
            <li className='mx-4 lg:my-0 my-6 lg:p-0 pb-2 lg:border-none border-orange-300 cursor-pointer hover:text-orange-600'><a href="https://ablest.sastra.edu/contact.php">Contact Us</a></li>
          </ul>
        </nav>

        <div className='absolute top-0 left-0 h-screen w-auto bg-black'>
          <Image className='mt-50 h-screen w-auto opacity-70 object-cover select-none absolute' src={agritech} />

          <div className={`flex justify-center item-center flex-col sm:px-4 md:pt-8 md:px-12 pt-52 z-10 h-screen relative`}>
            <div className='flex md:flex-row flex-col justify-center items-center '>
              <div className='md:w-3/4 flex flex-col space-y-4 md:space-y-2 '>
                <div className='md:text-6xl md:text-left text-center lg:text-6xl text-3xl md:mx-0 mx-4 font-medium text-white mt-12'>Agri-Tech Hackathon 2024</div>
                <div className='md:text-3xl text-white text-xl text-center md:text-left md:mx-0 mx-4 font-light'>Uniting innovative thinkers nationwide to create groundbreaking solutions for the critical challenges in today's agricultural landscape.</div>
                <div className='md:py-4 py-4 md:ml-0 ml- flex md:justify-start justify-center'>
                  <a className='px-4 mb-20 md:px-6 ltg:px-8 p-2 rounded-xl flex text-xl md:text-xl flex-row justify-center items-center space-x-2 font-medium hover:bg-green-300 bg-green-500' href='https://forms.gle/iwyFnfhB3PasWdqD6'><span>Register</span> <Image className='w-4' src={arrow} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className='mt-[85vh] pt-24 px-16 flex flex-col md:flex-row justify-center items-center lg:px-48 text-xl font-light'>
          <div className='md:w-3/4'>
          <h2 className='text-3xl font-medium pb-10'>About</h2>
          The agriculture sector is at a crucial juncture, needing to adopt cutting-edge technology to address the challenges posed by a growing global population, climate change, and sustainability. An agri-tech hackathon is a vital event that brings together innovators—technologists, farmers, researchers, and entrepreneurs—to drive advancements in agriculture. By fostering collaboration, this hackathon aims to develop smart farming solutions and build resilient systems that improve food security, resource management, and environmental sustainability. Now is the time for the brightest minds to innovate and shape a more sustainable future for agriculture.
          </div>
          <div className='md:w-1/4'>
            <ReactPlayer controls={true} url='agri4.mp4' width={375} height={250}/>
          </div>
        </div>

        <div className='w-full my-12 md:my-24 px-1 flex flex-col gap-4 justify-center items-center'>
            <Image className="md:w-1/2" src={flyer} />
        </div>

        <div className="pt-24 px-16 text-xl font-light">
          <h2 className='lg:px-32 text-3xl font-medium pb-10'>Timelines</h2>
          <ul className='timeline timeline-vertical xl:timeline-horizontal justify-center'>
            <li className=''>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>August 2<sup>nd</sup></div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Registration<br></br> opens</div>
              <hr className='bg-orange-300' />
            </li>
            <li>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>August 30<sup>th</sup></div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Registration<br></br> closes</div>
              <hr className='bg-orange-300' />
            </li>
            <li>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>September 9<sup>th</sup></div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Preliminary results<br />announcement</div>
              <hr className='bg-orange-300' />
            </li>
            <li>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>October 1<sup>st</sup> & 3<sup>rd</sup></div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Level 1: Virtual<br></br> Hackathon</div>
              <hr className='bg-orange-300' />
            </li>
            <li>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>October 12th<sup>th</sup></div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Level 1: results<br />announcement</div>
              <hr className='bg-orange-300' />
            </li>
            <li>
              <hr className='bg-orange-300' />
              <div className='timeline-start text-lg font-medium text-right xl:text-center'>October 3<sup>rd</sup> week<br></br> (tentative)</div>
              <div className='timeline-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6'><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" className='fill-orange-300' /></svg>
              </div>
              <div className='timeline-end text-lg xl:text-center py-2 md:px-4'>Level 2: Advanced<br></br> hackathon,final <br></br>judging & results</div>
              <hr className='bg-orange-300' />
            </li>
          </ul>
        </div>

        <div id="details" className='pt-24 px-16 lg:px-48 text-xl font-light'>
          <h2 className='text-3xl font-medium pb-10'>Details</h2>
          <div className='flex flex-col justify-center items-center gap-6'>
            <div className='flex flex-col md:flex-row items-center justify-center bg-[#B5DADC] transition-transform rounded-md w-[75vw] p-4 mb-12'>
              <div className='md:pr-8 md:w-1/3 flex flex-col items-center'>
                <Image src={eligible} className='mb-4 w-full h-full object-cover' />
                <div className='font-semibold space text-3xl mb-6 text-center'>Eligibility</div>
              </div>
              <ul className='list-disc pl-6 text-xl md:w-2/3'>
                <li>Students and professionals from all backgrounds (technology, agriculture, business, etc.)</li>
                <li>Startups</li>
                <li>Researchers and academics</li>
                <li>Anyone with a passion for Agri-tech innovation</li>
              </ul>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center bg-[#B5DADC] transition-transform rounded-md mb-12 p-4 w-[75vw]'>
              <div className='md:pr-8 md:w-1/3 flex flex-col items-center'>
                <Image src={work} className='mb-4 w-full h-full object-cover' />
                <div className='font-semibold space text-3xl mb-6 text-center'>Why participate?</div>
              </div>
              <ul className='text-xl list-disc pl-6 md:w-2/3'>
                <li>
                  <strong className='font-medium'>Innovate:</strong> Develop and showcase your innovative solutions to real-world agricultural problems.
                </li>
                <li>
                  <strong className='font-medium'>Collaborate:</strong> Work with like-minded
                  individuals and mentors
                </li>
                <li>
                  <strong className='font-medium'>Transform:</strong> Make a tangible impact on the agricultural sector and help shape the future of farming
                </li>
              </ul>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center bg-[#B5DADC] transition-transform rounded-md w-[75vw] p-4 mb-12'>
              <div className='md:pr-8 md:w-1/3 flex flex-col items-center'>
                <Image src={prize} className='mb-4 w-full h-full object-cover' />
                <div className='font-semibold space text-3xl mb-6 text-center'>Prizes</div>
              </div>
              <ul className='text-xl list-disc pl-6 md:w-2/3'>
                <li><strong className='font-medium'>Cash Prizes</strong>
                  <ul>
                    <li>1<sup>st</sup> prize: ₹10,000</li>
                    <li>2<sup>nd</sup> prize: ₹6,000</li>
                    <li>3<sup>rd</sup> prize: ₹4,000</li>
                  </ul>
                </li>
                <li>Incubation Support for next <strong>18 months</strong> with Networking Opportunities.</li>
                <li><strong>Seed funding</strong> facility for startups with viable solutions.</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="guidelines" className="pt-24 px-16 lg:px-48 text-xl font-light">
          <h2 className='text-3xl font-medium pb-10'>Guidelines</h2>
          <ul className='list-disc pl-6'>
            <li>Registration is <strong>mandatory.</strong></li>
            <li>Each team can have up to <strong>4 members</strong>, including the team leader.</li>
            <li>Members from different branches of the same college/institute are encouraged to form a team.</li>
            <li>The submission deadline for the video voice-over of your challenge solution and the PowerPoint presentation is <strong>August 17, 2024</strong>.
            </li>
            <li>The video voice-over and PPT will be reviewed by the Preliminary Screening and Evaluation Committee.
            </li>
          </ul>
        </div>

        <div className='pt-24 px-16 lg:px-48 text-xl font-light'>
          <h2 className='text-3xl font-medium pb-10'>Abstract submission details</h2>
          <ul className='list-disc pl-6'>
            <li>Your solution should address at least one of the challenges announced during the launch of the Agri-Tech Hackathon, focusing on innovation, practicality, and technology.</li>
            <li>Submit your solution details in the form of a video voice-over and a PPT presentation with a maximum of 15 slides.</li>
            <li>
              <b>File format:</b> .ppt/.pptx only<br />
              <b>Size:</b> Maximum 9 MB<br />
              <b>Duration of Video Voice-Over:</b> Maximum 5 minutes<br />
            </li>
          </ul>
        </div>

        <div className='pt-24 px-16 lg:px-48 text-xl font-light'>
          <h2 className='text-3xl font-medium pb-10'>Additional Infromation</h2>
          <ul className='list-disc pl-6'>
            <li>The shortlisted teams will be announced after the review of the video voice-over and PPT.
            </li>
            <li>All communications will be sent through registered email id only.</li>
            <li>Decisions of the organizing committee/jury will be the final in all rounds.</li>
            <li>No argument or appeal will be entertained.</li>
            <li>Participation certificates will be given only to candidates, who qualify in Level-2 Round.</li>
          </ul>
        </div>

        <div id="themes" className='pt-24 px-16 lg:px-48 text-xl font-light'>
          <h2 className='text-3xl font-medium pb-10'>Challenges Themes</h2>
          <div className="container mx-auto p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{index+1}-{section.title}</h2>
          <ul className="list-disc list-inside">
            {section.items.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
        </div>

        <div id="faq" className='pt-24 px-16 lg:px-48 text-xl font-light'>
          <h2 className='text-3xl font-medium pb-10'>FAQ</h2>
          <ol className='list-decimal pl-6'>
            <li>
              <strong className='font-medium'>How does it work?</strong><br />
              During the Agritech Hackathon 2024 launch on August 2, 2024, specific problem statements will be provided. Teams or individuals of up to 4 people can apply. Once the problem statements are given, teams will have 15 days to submit their proposed solutions, which should include a proof of concept or prototype.<br />
              Selected participants will be invited to SASTRA Deemed University in Thanjavur for the boot camp (Level-2) event, tentatively planned for September 2024.
            </li>
            <li>
              <strong className='font-medium'>What is the deadline to register and submit solutions?</strong><br />
              You need to register and submit solutions by August 17, 2024.
            </li>
            <li>
              <strong className='font-medium'>What is the participation fee?</strong><br />
              There is no fee for students, research scholars, startups, or innovators.
            </li>
            <li>
              <strong className='font-medium'>Who can participate in this hackathon?</strong><br />
              Undergraduate and postgraduate students, research scholars, startups, and innovators enrolled in affiliated institutes across India can participate. Please note that we will not reimburse any expenses.
            </li>
            <li>
              <strong className='font-medium'>What is the required team size?</strong><br />
              Teams can have a maximum of 4 members.
            </li>
            <li>
              <strong className='font-medium'>What should I have?</strong><br />
              All shortlisted participants need to bring their own laptops for the boot camp (Level-2 Round), which is tentatively planned for September 2024.
            </li>
            <li>
              <strong className='font-medium'>How do I contact the organizers for any queries?</strong><br />
              For any queries, feel free to reach out to us at <a href="mailto:ablest@sastra.ac.in" className='font-semibold'>ablest@sastra.ac.in</a>.
            </li>
          </ol>
        </div>

        <div className="pb-16 pt-8 ">
          <div className='text-2xl m-4 text-center font-medium'>Our Partners</div>
          <div className='flex md:flex-row flex-col flex-wrap justify-evenly items-center space-y-4 p-4'>
            <Image className='w-4/5 md:w-1/4 h-auto' src={sastra} />
            <Image className='w-2/4 md:w-1/5 h-auto' src={tnau} />
            <Image className='w-4/5 md:w-1/4 h-auto' src={tabif} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-gray-400 p-8 md:pl-40 md:pr-40 font-light">
          <div className='flex flex-row justify-center items-center gap-6 pb-4'>
            {/*<!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->*/}
            <a href="https://www.facebook.com/profile.php?id=100070585393184" target='_blank'><svg viewBox="0 0 320 512" className='h-6 w-6' pointerEvents='bounding-box'><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" className='fill-gray-400 hover:fill-black' /></svg>
            </a>
            <a href="https://twitter.com/ablest_sastra" target='_blank'><svg viewBox="0 0 512 512" className='h-6 w-6' pointerEvents='bounding-box'>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" className='fill-gray-400 hover:fill-black' /></svg>
            </a>
            <a href="https://www.linkedin.com/in/ablest/" target='_blank'><svg viewBox="0 0 448 512" className='h-6 w-6' pointerEvents='bounding-box'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" className='fill-gray-400 hover:fill-black' /></svg>
            </a>
            <a href="https://instagram.com/ablest_sastra" target='_blank'><svg viewBox="0 0 448 512" className='h-6 w-6' pointerEvents='bounding-box'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" className='fill-gray-400 hover:fill-black' /></svg></a>
          </div>
          <span>Made by <a href='https://ecellsastra.org' className='font-medium hover:text-grey-700' target='_blank'>Tech-E, E-Cell SASTRA</a>. || &copy; All Rights Reserved 2024</span>
        </div>
      </div>
    </>
  )
}
