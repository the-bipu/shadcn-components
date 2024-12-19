import { Badge } from '@/components/ui/badge'
import React from 'react'

const BadgePage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='md:w-10/12 w-full h-full flex flex-col gap-4 my-10'>
                <div>
                    <Badge variant={'default'}>Default</Badge>
                </div>
                <div>
                    <Badge variant={'secondary'}>Secondary</Badge>
                </div>
                <div>
                    <Badge variant={'destructive'}>Destructive</Badge>
                </div>
                <div>
                    <Badge variant={'outline'}>Outline</Badge>
                </div>
            </div>
        </div>
    )
}

export default BadgePage