import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <div>
            <div className='ml-4 mt-12'>
                <h1 className='text-3xl font-bold'>Here&apos;s a quick demo for you 👉
                </h1>
                <p className='text-center text-gray-400 text-xl max-w-2xl mx-auto leading-snug text-wrap'>
                    You will find everything you need to get started to collect testimonials and build a wall of love
                </p>
                <button className='bg-gray-500 w-20 h-8'>
                    Dismiss
                </button>
            </div>
        </div>
        <hr className='border-t border-gray-800 ml-8 mr-8 my-16' />
        <div>
            <h1>Overview</h1>
            <div className='container mx-auto p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div
                        className='rounded-md bg-gray-700 p-e h-40 flex items-center justify-center'>
                        📹 Videos
                    </div>
                    <div
                        className='rounded-md bg-gray-700 p-e h-40 flex items-center justify-center'>
                        😃 Video credits
                    </div>
                    <div
                        className='rounded-md bg-gray-700 p-e h-40 flex items-center justify-center'>
                        Plan
                        <p className='pr-4'>Free plan 🥁</p>
                        <button
                            className='w-24 h-6 text-black bg-white rounded-md'>
                            Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            className='flex ml-8 mr-8 flex-row items-center justify-between
            mt-8 mb-16'>
            <h1 className='text-3xl font-bold'>Spaces</h1>
            <Link href={'/dashboard/space'} className='bg-indigo-500 font-bold text-white py-2 px-4 rounded'>
                ➕ Create a new space
            </Link>
        </div>

        <div className='mb-8 flex flex-row items-center justify-center'>
            <Image src={'/tree.svg'} alt='Tree' width={200} height={200} />
        </div>
        <p className='text-center text-gray-400 font-bold'>No space yet, and a new one?</p>
    </div>
}

export default page