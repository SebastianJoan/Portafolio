import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Appbar } from '@/components/Appbar/Appbar'

import whatsapp_icon from '../../../public/icons/proyects/whatsapp.svg'
import react from '../../../public/icons/techs/react.svg'
import tailwindcss from '../../../public/icons/techs/tailwind.svg'

import Footer from '@/components/Footer/Footer'
import Link from 'next/link'

export default function Proyect() {

    const clickHandle = () => {
        document.location.href = 'https://portafolio-web-01-rdrx36yhh-birdstudio.vercel.app';
    }
      
    return (
        <>
            <Appbar/>
            <div className="w-full h-[477px] bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4">
                <div onClick={ () => clickHandle() } className='bg-[#111b21] cursor-pointer shadow-md shadow-[#111b21] w-auto h-[250px] py-4 md:h-[150px] flex flex-col md:flex-row justify-center items-center justify-items-center gap-5'>
                    <Image
                        src={whatsapp_icon}
                        alt="icon_proyect"
                        width={120}
                        height={120}
                        className='object-cover md:w-[120px] md:h-[120p] w-[80px]'
                    />
                    <div className='flex flex-col justify-start items-center justify-items-center gap-2'>
                        <div className='flex flex-col justify-center '>
                            <h3 className='text-white font-bold'> WhatsApp Clone (Frontend) </h3>
                            <h3>
                                Technologias:
                            </h3>
                        </div>
                        <div className='flex justify-between w-full'>
                            <Link target='blanck' href='https://es.reactjs.org' className='w-1/2 flex justify-center items-center justify-items-center'>
                                <Image
                                    src={react}
                                    alt="react"
                                    width={60}
                                    height={60}
                                    className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                                />
                            </Link>  
                            <Link target='blanck' href="https://tailwindcss.com" className='w-1/2 flex justify-center items-center justify-items-center'>
                                <Image
                                    src={tailwindcss}
                                    alt="tailwindcss"
                                    width={60}
                                    height={60}
                                    className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}