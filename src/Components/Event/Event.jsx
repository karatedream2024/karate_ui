import React from 'react'
import { useGetAllEventQuery } from '../../features/api/userapi';

function Event() {

  const {data: geteventdata} = useGetAllEventQuery();

  console.log(geteventdata, 'this is geteventdata')

  return (
    <div className='grid grid-cols-1  grid_cols-1 lg:w-[1024px]  gap-5 lg:p-10 mx-auto w-[100%] mt-10'>
      {
        geteventdata?.map((data)=>(
          <div

          // backgroundImage:`radial-gradient(circle, #ffffff, #fffbff, #fff7f8, #fff4eb, #fff5e0, #fff5e0, #fff5e0, #fff5e0, #fff4eb, #fff7f8, #fffbff, #ffffff)`
          // backgroundImage: `radial-gradient(circle, #ffffff, #fbfcff, #f4fbff, #ecf9fd, #e5f8f7, #e5f8f7, #e5f8f7, #e5f8f7, #ecf9fd, #f4fbff, #fbfcff, #ffffff)`
    
          // backgroundImage: 'radial-gradient(circle, #ffffff, #fbfafc, #f9f4f9, #f7eff5, #f6e9ef, #f6e9ef, #f6e9ef, #f6e9ef, #f7eff5, #f9f4f9, #fbfafc, #ffffff)'
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff, #fbfbfd, #f6f6fb, #f1f2f9, #ebeef7, #ebeef7, #ebeef7, #ebeef7, #f1f2f9, #f6f6fb, #fbfbfd, #ffffff)`
          }}
          className="shadow-lg p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2   mx-auto  gap-5">
    
          <div className="flex flex-col justify-beteween">
            <div>
              <div className="h2">
                {data.title}
              </div>
              <div className="h5">
              </div>
              <div className="flex py-2">
                <span className="h4">Date: <span className="h5"> {data.startdate} - {data.enddate}</span></span>
              </div>
    
              <div>
                <img className="rounded-lg w-[100%] h-96" src={data.imageUrl} alt="" />
              </div>
    
            </div>
    
    
    
          </div>
    
          <div className="flex flex-col justify-between">
            <div>
              <div className="h3">
                Leader Ship by "{data.leader}"
              </div>
              <div className="mt-5 p ">
                {data.description} I want to like to share it thank for you
              </div>
    
    
              <div className="h3 pt-3">
                Prizes won by
              </div>
    
    
              <div className="w-[100%] flex flex-col sm:flex-row justify-around mt-5 gap-5">
                <div className="border p-5 rounded-lg border-logo_yellow w-[100%]">
                  <div className="h3 text-center  "> Second </div>
                  <div className="text-center">
                    {data.prizes.first_winner}
                  </div>
                </div>
    
                <div className="border p-5 rounded-lg border-logo_red w-[100%]">
                  <div className="flex justify-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 10a3.04 3.04 0 0 1 3-3a3.04 3.04 0 0 1 3 3a3.04 3.04 0 0 1-3 3a3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8 8 0 0 1-.57 2.8A7.8 7.8 0 0 1 18 15.28V23l-6-2l-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10"></path></svg> */}
                  </div>
                  <div className="h3 text-center  "> First </div>
                  <div className="text-center">
                  {data.prizes.second_winner}
                  </div>
                </div>
    
    
                <div className="border p-5 rounded-lg border-logo_blue w-[100%]">
                  <div className="h3 text-center  "> Third </div>
                  <div className="text-center">
                  {data.prizes.third_winner}
                  </div>
                </div>
    
    
              </div>
    
    
              <div className="text-center mt-10 text-logo_yellow">
              "{data.quote}"
              </div>
    
    
            </div>
            <div className="flex justify-between items-center text-center">
              <div className='hidden md:block  xl:hidden'>
                View and Download images through google drink
              </div>
              <button type="button" class="text-white  mt-5 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                Google Drive Link
              </button>
            
            </div>
          </div>
        </div>

        ) )
      }









  </div>
  )
}

export default Event