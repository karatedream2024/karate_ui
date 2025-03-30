import React, {useEffect} from 'react'
import meditate from '../../assets/meditate.jpg'
import first from '../../assets/first.jpg'
import longice from '../../assets/longice.jpg'
import reco from '../../assets/reco.jpg'
import icepunch from '../../assets/icepunch.jpg'
import groupmaster from '../../assets/groupmaster.jpg'
import india from '../../assets/india.jpg'
import forindia from '../../assets/forindia.jpg'

import AOS from "aos";
import "aos/dist/aos.css";
 
function MaterDetails() {


  
  
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        // once: true,     // Whether animation should happen only once
      });
    }, []);
  
  return (
    <div className='text-center w-[90%] mx-auto md:w-auto '> 
    <div className='bg-background'>
    <div data-aos="fade-in"  className='h1 pt-10 text-logo_blue '>
      Mastering the Art of Teaching
      </div>
      <div className='flex justify-center' >
      <div data-aos="fade-in"  className='h5 mt-10 mb-5  sm:w-[90%] lg:w-[80%] flex justify-center '>
      "With over 16 years of experience, Chinnusamy Master is not just a seasoned practitioner but also an exceptional teacher. His methodical approach and in-depth knowledge have shaped many successful karatekas under his guidance." Photo Suggestion: A photo of Chinnusamy Master teaching a class, possibly demonstrating a technique or providing individual feedback to students.
      </div>
      </div>

      <div className='w-[100%] lg:w-[1024px] mx-auto'>


<img data-aos="fade-up"  className='lg:w-[80%] mx-auto pb-10  rounded-md' src={meditate} alt="" />
</div>

    </div>

      
    
    <div className='w-[100%] lg:w-[1024px] mx-auto'>

    <div data-aos="fade-in" className='h2  mt-10 text-logo_blue'>
      Journey of  Chinnusamy Master
    </div>
    <div className='flex justify-center items-center'> 
      <div className=' lg:grid grid-cols-1 lg:grid-cols-2 '>
      
        <div data-aos="fade-right" className='flex flex-col justify-center items-center px-5 py-5 md:py-10 mx-1 md:mx-5 lg:py-0  lg:p-10 lg:m-10 shadow-xl rounded-lg'>
          <div className='h3 text-logo_red my-2'>
          First Winning Match at the National Level
          </div>
          <div className='h5 text-justify  '>
          "Chinnusamy Master’s journey to excellence began with a significant milestone—his first major victory at the national level in India. This achievement was a testament to his early dedication and exceptional skill in karate, setting the stage for his illustrious career." Photo Suggestion: A dynamic action shot from the match or a photo of Chinnusamy Master receiving his award/medal on the podium.
          </div>
          
          
        </div>
        <div data-aos="fade-left" className='m-2 md:m-5 lg:m-10 flex justify-center items-center rounded-lg'>
          <img src={first} alt="" className='shadow-xl rounded-xl' />
        </div>

     

        <div data-aos="fade-right" className='hidden lg:flex m-2 md:m-5 lg:m-10 justify-center items-center rounded-lg'>
          <img src={reco} alt="" className='shadow-xl rounded-xl' />
        </div>

        <div data-aos="fade-left" className='flex flex-col justify-center items-center px-5 py-10 md:py-10 mx-1 md:mx-5 lg:py-0  lg:p-10 lg:m-10 shadow-xl rounded-lg'>
          <div className='h3 text-logo_red  my-2'>
          Recognition at the World Level Masters Event
          </div>
          <div className='h5 text-justify  '>
          "Chinnusamy Master’s expertise and reputation extend beyond national boundaries. His recognition at a World Level Masters event underscore his status as a leading figure in martial arts, showcasing his exceptional skills on a global stage." Photo Suggestion: A formal photo of Chinnusamy Master at the World Level Masters event, possibly with other renowned masters or in front of an international backdrop.


           </div>
          

        </div>

        {/* <div className=' lg:hidden m-2 md:m-5 lg:m-10 flex justify-center items-center rounded-lg'>
          <img src={reco} alt="" className='shadow-xl rounded-xl' />
        </div>
         */}


        




   
      <div  className='col-span-2 shadow-xl '>
        <div className='flex flex-col justify-center items-center px-5 py-10 md:py-10 mx-1 md:mx-5 lg:py-0  lg:p-10 lg:m-10  rounded-lg'>
          <div data-aos="fade-in" className='h3 text-logo_red my-5'>
          Ice-Breaking Leadership Moments
          </div>
          <div data-aos="fade-in" className='h5 text-justify  '>
          "As the founder of our karate school, Chinnusamy Master’s ice-breaking leadership style helped foster a welcoming and motivating environment for students. His ability to connect with each student personally is a cornerstone of his teaching philosophy." Photo Suggestion: A candid shot of Chinnusamy Master interacting with students, possibly during a class or a group activity that highlights his approachable nature.   </div>
          

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2   '>

        <div data-aos="fade-right" className='m-2 md:m-5 lg:m-10 flex justify-center items-center rounded-lg'>
          <img src={longice} alt="" className='shadow-xl rounded-xl' />
        </div>

                
        <div data-aos="fade-left" className='m-2 md:m-5 lg:m-10 flex justify-center items-center rounded-lg'>
          <img src={icepunch} alt="" className='shadow-xl rounded-xl' />
        </div>
        </div>
        </div>

        
    

    
        </div>


        

      </div>
      <div data-aos="fade-in"  className='h2 mt-10 text-logo_blue'>
      Promoting National Unity through Karate
      </div>

      <div data-aos="fade-in"   className='h3 !text-left my-5 lg:my-10 text-logo_red'>
        

      Building International Bridges through Martial Arts
      </div>
      
      <div className='flex m-2 md:m-5 lg:m-10 justify-center items-center rounded-lg'>
        <img data-aos="fade-up"   className='rounded-md' src={groupmaster} alt="" />
      </div>
      <div  data-aos="fade-in"   className='h3 !text-left my-5 lg:my-10 text-logo_red'>
        

      Fostering Peace through Asian Karate Championships
        </div>
        
        <div className='grid grid-cols-1 mx-2  md:grid-cols-2 gap-5'>
        <div className=' flex m-2 md:m-5 lg:m-10 justify-center items-center rounded-lg'>
          <img  data-aos="fade-right"  src={india} alt="" className='shadow-xl rounded-xl ' />
        </div>

        <div className=' flex m-2 md:m-5 lg:m-10 justify-center items-center rounded-lg'>
          <img  data-aos="fade-left"  src={forindia} alt="" className='shadow-xl rounded-xl h-full w-full' />
        </div>

        </div>
    </div>
    </div>
  )
}

export default MaterDetails