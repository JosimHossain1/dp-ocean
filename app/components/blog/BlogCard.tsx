import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
  return (
    <div className='border p-4 rounded-md shadow-lg'>
      <Image
        className='object-cover object-center w-full h-64 rounded-lg lg:h-80'
        src='https://wowtheme7.com/tf/dpmarket/assets/images/thumbs/blog1.png'
        alt=''
        width={300}
        height={300}
      />

      <div className='mt-8'>
        <span className='text-violet-500 uppercase'>category</span>

        <h1 className='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
          Which services you get from Meraki UI
        </h1>

        <p className='mt-2 text-gray-500 dark:text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
          asperiores vel, ab animi recusandae nulla veritatis id tempore
          sapiente
        </p>

        <div className='flex items-center justify-between mt-4'>
          <div>
            <a
              href='#'
              className='text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500'
            >
              Josim
            </a>

            <p className='text-sm text-gray-500 dark:text-gray-400'>
              February 19, 2024
            </p>
          </div>

          <a
            href='#'
            className='inline-block text-violet-500 underline hover:text-violet-400'
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
