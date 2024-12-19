import Navbar from '@/components/common/navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>

            <Navbar />

            <div className='md:w-10/12 w-full h-full flex flex-col gap-4'>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Button variant={'default'}>Default</Button>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Button variant=&#123;&#39;default&#39;&#125;&gt;Default&lt;&#47;Button&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Button variant={'destructive'}>Destructive</Button>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Button variant=&#123;&#39;destructive&#39;&#125;&gt;Destructive&lt;&#47;Button&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full h-80 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/2 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>
                            <Button variant={'bootstrap'}>Bootstrap</Button>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4'>
                            <pre>
                                &lt;Button variant=&#123;&#39;bootstrap&#39;&#125;&gt;Bootstrap&lt;&#47;Button&gt;
                            </pre>
                        </div>
                    </div>
                </div>

                <div>
                    <Button variant={'success'}>Success</Button>
                </div>
                <div>
                    <Button variant={'warning'}>Warning</Button>
                </div>
                <div>
                    <Button variant={'outline'}>Outline</Button>
                </div>
                <div>
                    <Button variant={'secondary'}>Secondary</Button>
                </div>
                <div>
                    <Button variant={'ghost'}>Ghost</Button>
                </div>
                <div>
                    <Button variant={'link'}>Link</Button>
                </div>

            </div>
        </div>
    )
}

export default ButtonPage