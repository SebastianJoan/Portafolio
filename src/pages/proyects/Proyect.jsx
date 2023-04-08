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

export default function Proyect() {


    return (
        <>
            <Appbar/>
            <div className="w-full h-[477px] bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4">
                {/* {images.map((image, index) => (
                    <div key={index} className='bg-red-500 w-auto h-auto flex flex-col justify-center items-center justify-items-center'>
                        <Image src={image.src} alt={image.alt} width={150} height={150}/>
                    </div>
                ))} */}
            </div>
            <Footer/>
        </>
    )
}