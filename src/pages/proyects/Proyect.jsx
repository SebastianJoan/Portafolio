import Image from 'next/image'

import { Appbar } from '@/components/Appbar/Appbar'


import diamante from '../../../public/icons/proyects/favicon.png'
import gworks from '../../../public/icons/proyects/gworks.png'
import TestikLogo from '../../../public/icons/proyects/TestikLogo.png'
import gsi_logo from '../../../public/icons/proyects/gsi_logo.png'
import mysql from '../../../public/icons/techs/mysql.svg'
import laravel from '../../../public/icons/techs/laravel.svg'

import whatsapp_icon from '../../../public/icons/proyects/whatsapp.svg'
import ceas_icon from '../../../public/icons/proyects/LogoCeas.png'
import react from '../../../public/icons/techs/react.svg'
import tailwindcss from '../../../public/icons/techs/tailwind.svg'

import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import ProyectItem from '../../components/ProyectItem'

export default function Proyect() {
    
    return (
        <>
            <Appbar/>
            <div className="w-full h-auto bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4">
                 <ProyectItem tittle = 'CEAS' proyect_icon = {ceas_icon} url="https://ceas.vercel.app" >
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
                </ProyectItem>{/*
                <ProyectItem tittle = ' WhatsApp Clone (Frontend) ' proyect_icon = {whatsapp_icon} url="https://portafolio-web-01-rdrx36yhh-birdstudio.vercel.app" >
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
                </ProyectItem> */}
                <ProyectItem tittle = ' Ecoparque Diamante ' proyect_icon = {diamante} url="https://www.ecoparquediamante.com" >
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
                </ProyectItem>
                <ProyectItem tittle = ' Testik services sas ' proyect_icon = {TestikLogo} url="http://testik.com.co" >
                    <Link target='blanck' href='https://laravel.com' className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={laravel}
                            alt="laravel"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>  
                    <Link target='blanck' href="https://www.mysql.com" className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={mysql}
                            alt="mysql"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>
                </ProyectItem>
                <ProyectItem tittle = ' Gworks services sas ' proyect_icon = {gworks} url="https://www.gworks.com.co" >
                    <Link target='blanck' href='https://laravel.com' className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={laravel}
                            alt="laravel"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>  
                    <Link target='blanck' href="https://www.mysql.com" className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={mysql}
                            alt="mysql"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>
                </ProyectItem>
                <ProyectItem tittle = ' GSI GROUP SAS ' proyect_icon = {gsi_logo} url="https://groupgsi.com" >
                    <Link target='blanck' href='https://laravel.com' className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={laravel}
                            alt="laravel"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>
                    <Link target='blanck' href="https://www.mysql.com" className='w-1/2 flex justify-center items-center justify-items-center'>
                        <Image
                            src={mysql}
                            alt="mysql"
                            width={60}
                            height={60}
                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                        />
                    </Link>
                </ProyectItem>
            </div>
            <Footer/>
        </>
    )
}