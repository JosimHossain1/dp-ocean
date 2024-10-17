import React from 'react';
import FeedbackCard from './FeedbackCard';
import Marquee from 'react-fast-marquee';
import { Heading1 } from '@/app/utilities/Heading';

const Feedback = () => {
  return (
    <div className='overflow-hidden whitespace-nowrap w-full dark:bg-gray-900 py-10'>
      <div className='text-center mb-10'>
        <Heading1> Customers Feedback</Heading1>
        <p className='text-md font-[inter] text-gray-600 dark:text-white'>
          Empowering creators with innovative digital asset solutions, <br />
          trusted by our global community.
        </p>
      </div>
      <div>
        <Marquee
          pauseOnHover={true}
          gradient
          // gradientColor='#111827'
          gradientWidth={400}
          className='mb-8'
        >
          <div className='grid grid-cols-4 gap-2'>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <span className='mr-5'>
              <FeedbackCard />
            </span>
          </div>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction='right'
          gradient
          // gradientColor='#111827'
          gradientWidth={400}
        >
          <div className='grid grid-cols-4 gap-2'>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <span className='mr-5'>
              <FeedbackCard />
            </span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Feedback;
