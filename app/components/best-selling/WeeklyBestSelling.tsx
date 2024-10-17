'use client';

import { Heading1 } from '@/app/utilities/Heading';
import { Button } from '@/components/ui/button';
import React from 'react';
import ProductCard from '../ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const WeeklyBestSelling: React.FC = () => {
  return (
    <div className='bg-slate-900 py-20 px-10'>
      {/* Title and Description */}
      <div className='flex justify-between items-center mb-10'>
        <div className='w-[40%]'>
          <Heading1 color='text-white'>Weekly Best Selling Products</Heading1>
          <p className='text-md font-[inter] text-gray-300 dark:text-white mt-2'>
            Every month we pick some best products for you. This month&apos;s best
            web themes & templates have arrived, chosen by our content
            specialists.
          </p>
        </div>
        <div className='text-center'>
          <Button className='font-[inter] text-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-white'>
            View All Items
          </Button>
        </div>
      </div>

      {/* Product Items Carousel */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass='container-with-dots'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass='p-2' // Add padding to create space between items
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
};

export default WeeklyBestSelling;
