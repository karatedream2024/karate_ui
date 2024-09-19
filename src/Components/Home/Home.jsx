import React from 'react';
import MultiCarousel from './MultiCarousel';
import master from '../../assets/master.png'
import long5 from '../../assets/long5.jpg'
import longmaster from '../../assets/longmaster.jpg'
import longice from '../../assets/longice.jpg'
import banner from '../../assets/banner.jpg'
import meditate from '../../assets/meditate.jpg'
import long25 from '../../assets/long25.jpg'
import { useNavigate } from 'react-router-dom';
import { useGetAllTournamentsQuery } from '../../features/api/userapi';




function Home() {


  const navigate = useNavigate()

  return (
    <div className=' '>
      <div>
        <div>
          <div className='   relative'>
            <img className='bg-cover h-[250px]  md:h-[550px]  w-[100%]   relative backdrop:blur-3xl ' src={meditate} alt="" />
            <div className='absolute top-0  h-[100%]  w-[100%] bg-background opacity-0 '>
            </div>
            <div className='absolute top-10 md:top-10  h-[100%]  w-[100%]  '>
              <div className='fl  ex justify-center items-center w-[100%]   '>
              </div>
              <div className='h5  text-white  '>
                {/* <div className='border-2 mt-14    border-logo_red text-logo_red px-2 py-1 inline-block rounded-md '>
                  WORLD SO KYOKSHION
                </div> */}
                <div className='h1 p-[5%] md:pl-[15%] md:mt-16 md:py-10 lg:py-10 text-logo_white  '>
                  Karate - Self Defence
                </div>
              </div>
              {/* <div className='h4  w-[95%] md:w-[60%] mx-auto  text-white text-center '>
                Karate, a Japanese martial art, blends powerful strikes and precise techniques to cultivate physical and mental discipline. Rooted in centuries-old 
             </div> */}
              <div className='pl-[10%] md:pl-[35%]'>
                <div className='flex mt-0 md:pl-10  lg:mt-10  '>
                  <div onClick={() => navigate('/contact')} className='h5 border cursor-pointer hover:bg-logo_green bg-logo_green/70 rounded-md text-white border-logo_green h-10 w-[120px] flex items-center justify-center'>
                    Contact us
                  </div>

                  <div className='flex justify-center items-center pl-[20px]'>

                    <div className='h5 border cursor-pointer hover:bg-logo_red bg-logo_red/70 rounded-md h-10 w-[120px] text-white border-logo_red flex items-center justify-center'>
                      <a href="tel:9585674087" className='text-white'>
                        Call Now
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border-2 mt-14 ml-[5%]   border-logo_red text-logo_red px-2 py-1 inline-block rounded-md '>
            WORLD SO KYOKSHION
          </div>

          <div className='h1 text-center mt-4 my-10 text-logo_blue'>
            Tamil Nadu Kyokshion Chinnu'S karate Association
          </div>
          <div className='h3 text-justify md:w-[80%] mx-auto px-2 md:px-0 my-10s'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis omnis. Saepe nulla neque obcaecati, deleniti culpa voluptas, voluptatum alias odio fugit sapiente impedit temporibus accusamus magnam repudiandae sint minus?

          </div>
        </div>
      </div>

      <div>
        <div className=' md:flex md:[99%] lg:w-[1024px] mx-auto  border-letter-black rounded-lg mt-10  shadow-2xl py-10 md:py-20   p-0 md:p-5'>
          <div className=''>
            <div className='flex justify-end h-96 w-[300px] sm:w-[330px] mx-auto '>
              <img className='h-96 ' src={longmaster} alt="" />
            </div>
          </div>
          <div className='pl-[5%]'>
            <div className='flex flex-col justify-between h-full'>
              <div className='h2   mt-5 md:mt-0 text-logo_blue'>
                MASTER CHINNASAMY
              </div>
              <div className='h4  mt-5 md:mt-0   text-letter-black  text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt totam blanditiis autem necessitatibus atque dolore, quisquam aperiam sed soluta facere dicta, cum ut. Qui aliquam possimus necessitatibus repellat laborum! Est deleniti velit esse asperiores obcaecati illo fugit repellendus, possimus commodi nesciunt rerum nihil quasi, saepe sapiente? Rerum repudiandae ratione sint ex in praesentium veniam nisi dolores, sunt aliquid! Blanditiis quibusdam error voluptatem fugit fugiat porro .
              </div>
              <div onClick={() => navigate('/founder')} className='h-12 w-28 mt-5 md:mt-0 bg-logo_blue flex justify-center items-center rounded-md text-white'>
                Read More
              </div>



            </div>

          </div>

        </div>
      </div>


      <div className='mt-32 relative'>
        <div className='absolute -top-24   clear-start   pl-[10%]' >
          <svg className='' >
            <path d="M 10 80 Q 130 50 150 90 " className="stroke-logo_red" fill="none" strokeWidth={4} />
          </svg>
          <div className='h2 !text-3xl absolute top-6 '>
            Why Karate
          </div>
        </div>
        <div className='w-[90%] md:w-[50%]  mx-auto space-y-5'>
          <div className='text-left h3 '>
            <div className='text-logo_yellow underline  underline-offset-4'>  Self-Defense: </div> One of the primary reasons people practice karate is to learn self-defense techniques.
          </div>
          <div className='text-left h3'>
            <div className='text-logo_yellow underline underline-offset-4'>  Physical Fitness: </div> Karate training involves rigorous physical activity, promoting overall fitness.
          </div>
          <div className='text-left h3'>
            <div className='text-logo_yellow underline underline-offset-4'> Discipline and Focus: </div> Karate places a strong emphasis on discipline, respect, and mental focus.
          </div>
          <div className='text-left h3'>
            <div className='text-logo_yellow underline underline-offset-4'> Cultural Exchange: </div> Karate places a strong emphasis on discipline, respect, and mental focus.
          </div>
          <div className='text-left h3'>
            <div className='text-logo_yellow underline underline-offset-4'> Adaptability: </div> Karate is versatile and can be adapted to suit different ages, fitness levels, and abilities.
          </div>
        </div>
      </div>


      <div>
        <div className='flex justify-between p-5'>
          <div>


          </div>

        </div>
      </div>



      <div>




      </div>

      <div className=''>
        <div className='mt-20 w-[100%] lg:w-[1024px] mx-auto bg-logo_blue  pb-24 rounded-lg '>
          <div className='text-center h2  pt-5 md:py-10 text-white  px-2'>Founder of World so Kyokshion</div>
          <div className='grid grid-cols-1 md:grid-cols-3 mx-auto w-[100%]'>


            <div className='flex flex-col justify-center items-center  mt-5 w-[90%] lg:w-[80%] mx-auto text-justify h5   text-white'>
              <div className='h3 text-logo_red'>
                About Master
              </div>
              <div className='mt-5 md:mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque quos at dolorum! Delectus quasi deleniti iure dolorem provident corporis ex expedita ullam exercitationem, molestiae eligendi voluptates hic facilis amet ducimus animi sunt, soluta eos quia nihil sint repellendus iste.
              </div>
            </div>
            <div>
              <img className='h-64 lg:w-[100%] mx-auto lg:py-0 py-5 w-[80%]' src="https://images.pexels.com/photos/7045521/pexels-photo-7045521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            <div className='flex flex-col justify-center items-center w-[80%] mx-auto text-justify h5   text-white'>
              <div className='h3 text-logo_red'>
                Our Sincire Thanks to
              </div>
              <div className='mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque quos at dolorum! Delectus quasi deleniti iure dolorem provident corporis ex expedita ullam exercitationem, molestiae eligendi voluptates hic facilis amet ducimus animi sunt, soluta eos quia nihil sint repellendus iste.
              </div>
            </div>


          </div>

        </div>

      </div>








      <div className='mt-10 md:mt-20'>

        <div className='h3 text-logo_red text-center mt-10 font-bold'>Best of us</div>
        <div className='h2 text-logo_blue text-center my-5'>Student Training</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto mt-10">

          <div>
            <img className='h-60 w-[100%]' src="https://media.istockphoto.com/id/1960871767/photo/young-karate-fighters-in-karate-school.webp?b=1&s=612x612&w=0&k=20&c=8E39oCq9POzAVdKDGNuUW5393zym4LmZtbRFt0zEc2Q=" alt="" />
            <div className='text-center py-2 h3'>Martial Arts</div>
            <div className='text-center h5 py-2'>Discover the discipline and focus of martial arts, where every movement is designed for precision and control. Embrace a journey of self-improvement and physical conditioning.</div>
          </div>
          <div>
            <img className='h-60 w-[100%]' src="https://media.istockphoto.com/id/1403476109/photo/martial-arts-fighters-training-together.webp?b=1&s=612x612&w=0&k=20&c=9_PGv3g-HylxgE1_Rgg8qdHYglWMblfB0fzom-zZs7I=" alt="" />
            <div className='text-center py-2 h3'>Self-Defense</div>
            <div className='text-center h5 py-2'>Learn essential techniques and strategies to protect yourself in various situations. Our self-defense training emphasizes practical skills and confidence-building.</div>
          </div>
          <div>
            <img className='h-60 w-[100%]' src="https://media.istockphoto.com/id/1756190078/photo/portrait-of-a-boy-in-a-judo-class-at-the-gym.webp?b=1&s=612x612&w=0&k=20&c=CSJeYHU5YB6J3LHTNVd8us_Jipo_123C1AEVFohWHhE=" alt="" />
            <div className='text-center py-2 h3'>Combat Training</div>
            <div className='text-center h5 py-2'>Engage in rigorous combat training to enhance your fighting skills and physical endurance. Perfect for those seeking to challenge themselves and achieve peak performance.</div>
          </div>
        </div>
      </div>

      <div className='mt-10 md:mt-20'>
        <MultiCarousel />

      </div>







    </div>
  );
}

export default Home;
