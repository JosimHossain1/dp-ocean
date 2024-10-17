import React from 'react';
import ProductCard from '../ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProduct = () => {
  return (
    <div className='px-10 mx-auto flex justify-between items-center space-x-20 h-full py-28  bg-[url("https://wowtheme7.com/tf/dpmarket/assets/images/gradients/featured-gradient.png")] dark:bg-none dark:bg-[#1A1D37] bg-no-repeat bg-cover bg-center'>
      {/* Product Side */}
      <div className='flex gap-5 w-1/2'>
        <div className='space-y-5'>
          <ProductCard />
          <ProductCard />
        </div>
        <div className='mt-20 space-y-5 w-1/2'>
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      {/* Text Side */}

      <div className='bg-[url("https://wowtheme7.com/tf/dpmarket/assets/images/shapes/spider-net.png")] dark:bg-none dark:bg-[#1A1D37] bg-no-repeat bg-cover bg-center w-1/2'>
        <h1 className='text-[40px] font-[inter] font-bold leading-tight'>
          Featured Products
        </h1>
        <p className='text-lg font-[inter] text-gray-600 dark:text-white mt-6'>
          Every month we pick some best products for you. This month&apos;s best
          web themes & templates have arrived, chosen by our content
          specialists.
        </p>
        <Button
          variant='outline'
          className='font-[inter] mt-5 text-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-white'
        >
          View All Items
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
