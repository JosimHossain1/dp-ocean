'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../utilities/ModeToggle';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const user = false;
  return (
    <nav>
      <div className='navbar fixed z-50 bg-base-100 dark:bg-[#262940] shadow dark:shadow-none px-6'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-4 '
            >
              <Link href='/'>Home</Link>
              <Link href='/'>Products</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact</Link>
            </ul>
          </div>
          <Link href='/' className='text-2xl font-bold font-[inter]'>
            DpOcean
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 space-x-5 text-[16px] font-semibold font-[inter]'>
            <Link href='/' className='hover:text-[#6B38F1]'>
              Home
            </Link>
            <Link href='/' className='hover:text-[#6B38F1]'>
              Products
            </Link>
            <Link href='/' className='hover:text-[#6B38F1]'>
              Blog
            </Link>
            <Link href='/' className='hover:text-[#6B38F1]'>
              Contact
            </Link>
          </ul>
        </div>
        <div className='navbar-end space-x-4 font-[inter]'>
          {/* Cart */}
          <div className='indicator cursor-pointer mr-1 mt-2'>
            <span className='indicator-item badge h-6 w-6 bg-[#6B38F1] text-white font-[inter]'>
              2
            </span>
            <ShoppingCart />
          </div>
          {/* Dark Mode Toggler */}
          <ModeToggle />
          {user ? (
            <Button>Dashboard</Button>
          ) : (
            <div className='flex space-x-3'>
              <Button>Registration</Button>
              <Button>Login</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
