import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='md:w-10/12 w-full h-full flex flex-col gap-4 my-10'>
                <div>
                    <Button variant={'default'}>Default</Button>
                </div>
                <div>
                    <Button variant={'destructive'}>Destructive</Button>
                </div>
                <div>
                    <Button variant={'bootstrap'}>Bootstrap</Button>
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