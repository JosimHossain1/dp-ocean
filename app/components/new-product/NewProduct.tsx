import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '../ProductCard';
import { Button } from '@/components/ui/button';

const NewProduct = () => {
  return (
    <div className='px-6 py-[100px] bg-[#F5F7F9] dark:bg-[#1A1D37] '>
      <h1 className='text-center mb-20 font-[inter] text-[40px] font-semibold'>
        New Arrival Products
      </h1>
      
      <div>
        <Tabs defaultValue='all' className='w-[90%] mx-auto'>
          <TabsList className='grid w-full grid-cols-9 mb-8'>
            <TabsTrigger value='all'>All Products</TabsTrigger>
            <TabsTrigger value='wordpress'>Wordpress</TabsTrigger>
            <TabsTrigger value='php'>PHP</TabsTrigger>
            <TabsTrigger value='template'>Site Template</TabsTrigger>
            <TabsTrigger value='blog'>Blogging</TabsTrigger>
            <TabsTrigger value='marketing'>Marketing</TabsTrigger>
            <TabsTrigger value='plugin'>Plugin</TabsTrigger>
            <TabsTrigger value='ui'>Ui Template</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='all' className='grid grid-cols-4 gap-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </TabsContent>
          <TabsContent value='password' className='grid grid-cols-4 gap-4'>
            <ProductCard />
          </TabsContent>
        </Tabs>
      </div>

      <div className='text-center mt-10'>
        <Button
          variant='outline'
          className='font-[inter] text-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-white'
        >
          View All Products
        </Button>
      </div>

    </div>
  );
};

export default NewProduct;
