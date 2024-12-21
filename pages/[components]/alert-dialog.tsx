import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Navbar from '@/components/common/navbar'

const AlertDiologPage = () => {

    const firstCode = `<AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
</AlertDialog>
    `;

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>

            <Navbar />

            <div className='md:w-10/12 w-full h-full flex flex-col gap-4 mb-20'>

                <div className='flex flex-row w-full h-96 border border-border rounded-lg mt-10 bg-[#eaeaea]'>
                    <div className='md:w-1/3 w-full h-full flex items-center justify-center p-6 pr-3'>
                        <div className='rounded-lg w-full h-full flex items-center justify-center border border-border/60 bg-white'>

                            <AlertDialog>
                                <AlertDialogTrigger>Open</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </div>
                    </div>
                    <div className='md:w-2/3 w-full h-full flex items-start justify-start p-6 pl-3'>
                        <div className='bg-[#1a1a1a] rounded-lg w-full h-full text-white p-4 overflow-auto'>
                            <pre>
                                {firstCode}
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AlertDiologPage