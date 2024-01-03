import React from 'react';
import News from './News.js';
import './LeftSection.css';

function RightSection() {
  return (
    <div className='flex flex-col flex-[0.3] ml-[20px]'>
      {/* Top Section */}
      <div className='bg-white mb-[10px] p-[10px] rounded-[10px] '>
        <h3 className='text-gray-700 font-semibold mb-[10px]'>Linkedin News</h3>
         <div>
            <News title="Music tourism set to boom" time="2" readers="3425"/>
            <News title="The global UPI era is here" time="3" readers="10245"/>
            <News title="The sleep economy wakes up" time="1" readers="12325"/>
            <News title="How to ace content marketing" time="10" readers="5224"/>
            <News title="Flying through bumpier skies" time="7" readers="320"/>
         </div>
      </div>
      {/* Bottom Section */}
      <div className='flex flex-col items-center'>
        <div className='linktab w-[200px] flex justify-evenly flex-wrap text-[12px] text-gray-500 leading-[25px]'>
            <div>About</div>
            <div>Accessibility</div>
            <div>Help Center</div>
            <div>Privacy & Terms </div>
            <div>Ad Choices</div>
            <div>Advertising</div>
            <div>Business Services </div>
            <div>Get the LinkedIn app</div>
            <div>More</div>
        </div>
        <div className='mt-[10px] flex'>
          <img className='h-[20px] w-[50px] object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="Linkedin"/>
          <div className='ml-[2px] text-gray-500 text-[12px]'>LinkedIn Corporation © 2023</div>
        </div>
      </div>
    </div>
  )
}

export default RightSection
