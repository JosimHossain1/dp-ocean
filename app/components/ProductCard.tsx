import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { Star } from 'lucide-react';

const ProductCard = () => {
  return (
    <div className=''>
      <Card className='dark:bg-[#262940] shadow-lg'>
        <CardHeader>
          <Image
            src='https://wowtheme7.com/tf/dpmarket/assets/images/thumbs/product-img1.png'
            alt='Image'
            width={300}
            height={300}
          />
          <CardTitle className='font-[inter] text-lg hover:text-violet-500 cursor-pointer'>
            SaaS dashboard digital products Title here
          </CardTitle>
          <CardDescription className='flex justify-between items-center'>
            by themepix
            <CardTitle className='font-[inter] text-2xl text-black dark:text-white font-semibold'>
              $120
              <span className='line-through font-light text-xl text-gray-400 ml-2'>
                $135
              </span>
            </CardTitle>
          </CardDescription>
        </CardHeader>

        <CardFooter className='flex justify-between border-t-2 dark:border-gray-500 pt-4'>
          <div>
            {/* Sales */}
            <span className='font-[inter] text-gray-500  dark:text-gray-300 font-light'>
              <span className='sale_ammount mr-1'>1200</span> Sales
            </span>
            {/* rating */}
            <div>
              <span className='flex font-[inter]'>
                <Star className='w-4 text-yellow-500' />
                <Star className='w-4 text-yellow-500' />
                <Star className='w-4 text-yellow-500' />
                <Star className='w-4 text-yellow-500' />
                <Star className='w-4 text-yellow-500' />
                <span className='ml-2'>(16)</span>
              </span>
            </div>
          </div>
          <Button
            variant='outline'
            className='font-[inter] hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-white dark:bg-violet-500'
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
