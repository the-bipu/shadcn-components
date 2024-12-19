import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'

const AlertPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='md:w-10/12 w-full h-full flex flex-col gap-4 my-10'>
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    )
}

export default AlertPage