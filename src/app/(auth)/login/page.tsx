import Icons from '@/components/icon'
import { buttonVariants } from '@/components/ui/button'
import LargeHeading from '@/components/ui/largeheading'
import Paragraph from '@/components/ui/paragraph'
import Link from 'next/link'
import {FC} from 'react'

const Page: FC = () => {
    return (
        <div className='absolute inset-0 mx-auto container flex h-screen flex-col justify-center'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6  max-w-lg'>
                <div className='flex flex-col items-center gap-6 text-center'>
                    <Link 
                        className={buttonVariants({ 
                          variant: 'ghost', 
                          className: 'w-fit'
                        })}
                        href="/"
                    >
                        <Icons.ChevronLeft className='mr-2 h-4 w-4' />
                        Back to home
                    </Link>
                    <LargeHeading>Welcome Back!</LargeHeading>
                    <Paragraph>Please sign in using your google account.</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Page