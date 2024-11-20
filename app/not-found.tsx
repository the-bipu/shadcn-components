'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='w-full min-h-screen flex flex-col items-center'>

            <div className={` w-10/12 my-10 flex flex-row justify-between items-center top-0`}>
                <Link href='/'>
                    <h4 className='md:text-3xl text-2xl uppercase'>ShadCN</h4>
                </Link>

                <div className='flex flex-row md:gap-24 gap-8 items-center'>
                    <button className=' button-56' role="button">
                        <Link href='/button'>
                            <span className="text">Button</span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className='w-10/12 h-auto flex flex-col items-center justify-center text-2xl mt-44'>
                <h1 className='text-3xl mb-4'>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/">
                    <p>Go back to the homepage.</p>
                </Link>
            </div>

        </div>
    );
}