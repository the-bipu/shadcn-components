import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/navbar';

const ThemePage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center'>

            <Navbar />

            <div className='w-11/12 h-full flex flex-col py-6'>

                <div className='text-lg mb-4'>Here are some of the libraries that we should use if we're using shadcn.</div>

                <div className='w-auto flex flex-col gap-1'>
                    <Link href='https://originui.com/' target='_blank' className='transition-all hover:underline'>
                        Origin UI
                    </Link>
                    <Link href='https://blocks.mvp-subha.me/' target='_blank' className='transition-all hover:underline'>
                        Mvpblocks
                    </Link>
                    <Link href='https://www.shsfui.com/' target='_blank' className='transition-all hover:underline'>
                        SHSF UI
                    </Link>
                    <Link href='https://www.kibo-ui.com/' target='_blank' className='transition-all hover:underline'>
                        Kibo UI
                    </Link>
                    <Link href='https://skiper-ui.com/' target='_blank' className='transition-all hover:underline'>
                        Skiper/ui
                    </Link>
                    <Link href='https://tweakcn.com/' target='_blank' className='transition-all hover:underline'>
                        Tweakcn
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ThemePage