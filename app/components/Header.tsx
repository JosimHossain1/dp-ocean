import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='px-6 flex justify-between items-center bg-[url("https://wowtheme7.com/tf/dpmarket/assets/images/gradients/banner-gradient.png")] dark:bg-none dark:bg-[#1A1D37] bg-no-repeat bg-cover h-screen'>
      {/* Left side */}
      <div className='w-1/2'>
        <h1 className='text-[80px] font-[inter] font-bold leading-tight'>
          2M+ curated <br /> digital products
        </h1>
        <p className='text-lg font-[inter] text-gray-600 dark:text-white mt-6'>
          Explore the best premium themes and plugins available for sale. Our
          unique collection is hand-curated by experts. Find and buy the perfect
          premium theme today.
        </p>
      </div>
      {/* Right side */}
      <div className='w-1/2 text-center'>
        <Image
          src='https://wowtheme7.com/tf/dpmarket/assets/images/thumbs/banner-img.png'
          alt='Hero'
          width={500}
          height={500}
          className='ml-20'
        />
      </div>
    </div>
  );
};

export default Header;
