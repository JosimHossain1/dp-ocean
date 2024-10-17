import React from 'react';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  return (
    <section
      className='bg-white h-full bg-[url("https://wowtheme7.com/tf/dpmarket/assets/images/shapes/pattern-five.png
")] dark:bg-none dark:bg-[#1A1D37] bg-no-repeat bg-cover bg-center'
    >
      <div className='container px-6 py-10 mx-auto'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white'>
            Recent Blog Posts
          </h1>

          <Button
          variant='outline'
          className='font-[inter] mt-5 text-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-white'
        >
          View All
        </Button>
        </div>

        <hr className='my-8 border-gray-200 dark:border-gray-700' />

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
