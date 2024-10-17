import Image from 'next/image';
import React from 'react';

const FeedbackCard = () => {
  return (
    <div className='bg-gradient-to-r from-violet-50 to-pink-50 hover:bg-slate-700 w-[350px] dark:bg-none dark:bg-slate-900 dark:border border-slate-600 h-[180px] text-black dark:text-white p-5 rounded-md font-[inter] cursor-pointer'>
      <div className='flex items-center space-x-4'>
        <div className='rounded-full'>
          <Image
            width={35}
            height={35}
            src='https://wowtheme7.com/tf/dpmarket/assets/images/thumbs/user-profile.png'
            alt='User'
          />
        </div>
        <div>
          <h3>Josim Hossain</h3>
          <p className='text-gray-500 dark:text-gray-400 text-sm'>
            @josimhossain1
          </p>
        </div>
      </div>
      <div>
        <p className='mt-3 text-wrap'>
          sopathe 1 ta kore blog likhar chesta korbo vai...asole platform ta
          onek inspire korse
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
