import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Appbar } from '@/components/Appbar/Appbar'

import avatar from '../../../public/imgs/avatar.jpg'

import dart from '../../../public/icons/techs/dart.svg'
import flutter from '../../../public/icons/techs/flutter.svg'
import js from '../../../public/icons/techs/js.svg'
import mysql from '../../../public/icons/techs/mysql.svg'
import nodejs from '../../../public/icons/techs/nodejs.svg'
import react from '../../../public/icons/techs/react.svg'
import github from '../../../public/icons/techs/github.svg'
import figma from '../../../public/icons/techs/figma.svg'

import Footer from '@/components/Footer/Footer'
import Link from 'next/link'

export default function AboutMe() {

    return (
        <>
            <Appbar/>
            <div className='bg-gray-800 w-full md:h-[477px] h-screen flex justify-center items-center justify-items-center'>
                <div className='flex flex-col mx-auto md:flex-row justify-center gap-5 items-center justify-items-center'>
                    <Image
                        src={avatar}
                        alt="Profile Image"
                        width={512}
                        height={512}
                        className='object-cover md:w-[120px] md:h-[120p] w-full rounded-full'
                    />
                    <div className='flex flex-col justify-center items-center justify-items-center px-4 gap-3'>
                        <Link href="/docs/CVINGLES.pdf" target='blanck' download='CVINGLES.pdf' className='w-auto h-auto px-4 py-2 bg-[#ffffff] hover:text-white hover:bg-black text-black rounded-md'>
                            Descargar CV Ingles
                        </Link>   
                        <Link href="/docs/CVSPAIN.pdf" target='blanck' download='CVSPAIN.pdf' className='w-auto h-auto px-4 py-2 bg-[#ffffff] hover:text-white hover:bg-black text-black rounded-md'>
                            Descargar CV Español
                        </Link>    
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}