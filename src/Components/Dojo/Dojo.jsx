import React from 'react'
import { useGetAllDojoQuery } from '../../features/api/userapi';
import { FaLocationDot } from "react-icons/fa6";
function Dojo() {

  const {data: getdojodata} = useGetAllDojoQuery();

  console.log(getdojodata, 'this is getdojodata')

  

  return (
    <div className='mt-28 '>
      <div className='h2 text-center py-5'>Join with our Community</div>
      <div className='h3 text-log_letter_gray text-center'> Elevate your well-being with classes that focus on both physical and mental health.</div>
{
  getdojodata?.map((data)=>(

    <div className=''>
    <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-10 w-[90%] mx-auto'>


      <div className='shadow-lg rounded-md bg-background'>
        <div className='flex justify-center relative group'>

          <img className=' rounded-t-md' src={data?.imageurl} alt="" />


          <div className=" absolute group-hover:bg-primary  duration-1000 group-hover:bg-logo_yellow h-0 bottom-0 group-hover:h-full w-full ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="h2 opacity-0 group-hover:opacity-100  duration-500">
          {data?.dojoName}
        </div>
        <div className="h4 w-[90%] py-2 opacity-0 group-hover:opacity-100 duration-500 text-center">
          {data?.aboutdojo}
        </div>
    
      </div>
    </div>

        </div>
        <div className='p-1 pb-3 relative'>
        <div className='absolute top-5 right-5'>
          <a href={data.location_link} target='_blank'>
          <FaLocationDot size={30} />
          </a>
          </div>

          <div className='text-center h4 my-2'>
          {data?.dojoName} 
          </div>
        
          <div className='flex justify-center'>
            <div className='text-center h5 rounded-md '>
              Master: {data?.incharge}
            </div>
          
          </div>
        </div>
      </div>


    </div>
  </div>
    
  ))
}
   




    </div>
  )
}

export default Dojo