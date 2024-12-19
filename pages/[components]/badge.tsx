import Navbar from '@/components/common/navbar'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const BadgePage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>

            <Navbar />

            <div className='md:w-10/12 w-full h-full flex flex-col gap-4 mb-20'>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Badge variant={'default'}>Default</Badge>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Badge variant=&#123;&#39;default&#39;&#125;&gt;Default&lt;&#47;Badge&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Badge variant={'secondary'}>Secondary</Badge>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Badge variant=&#123;&#39;secondary&#39;&#125;&gt;Secondary&lt;&#47;Badge&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Badge variant={'destructive'}>Destructive</Badge>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Badge variant=&#123;&#39;secondary&#39;&#125;&gt;Secondary&lt;&#47;Badge&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Badge variant={'outline'}>Outline</Badge>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Badge variant=&#123;&#39;secondary&#39;&#125;&gt;Secondary&lt;&#47;Badge&gt;
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BadgePage