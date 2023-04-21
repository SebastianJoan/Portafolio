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
import Head from 'next/head'

export default function Proyect() {
    
    const proyectos = [
        {
            "tittle"       : "CEAS",
            "proyect_icon" : ceas_icon,
            "url"          : "https://ceas.vercel.app",
            "LinkTech_01"  : "https://es.reactjs.org",
            "LinkTech_02"  : "https://tailwindcss.com",
            "ImageTech_01" : react,
            "altTech_01"   : "react",
            "ImageTech_02" : tailwindcss,
            "altTech_02"   : "tailwind",
        },
        {
            "tittle"       : "Ecoparque Diamante",
            "proyect_icon" : diamante,
            "url"          : "https://www.ecoparquediamante.com",
            "LinkTech_01"  : "https://es.reactjs.org",
            "LinkTech_02"  : "https://tailwindcss.com",
            "ImageTech_01" : react,
            "altTech_01"   : "react",
            "ImageTech_02" : tailwindcss,
            "altTech_02"   : "tailwind",
        },
        {
            "tittle"       : "Testik services sas",
            "proyect_icon" : TestikLogo,
            "url"          : "http://testik.com.co",
            "LinkTech_01"  : "https://laravel.com",
            "LinkTech_02"  : "https://www.mysql.com",
            "ImageTech_01" : laravel,
            "altTech_01"   : "laravel",
            "ImageTech_02" : mysql,
            "altTech_02"   : "mysql",
        },        
        {
            "tittle"       : "Gworks services sas",
            "proyect_icon" : gworks,
            "url"          : "https://www.gworks.com.co",
            "LinkTech_01"  : "https://laravel.com",
            "LinkTech_02"  : "https://www.mysql.com",
            "ImageTech_01" : laravel,
            "altTech_01"   : "laravel",
            "ImageTech_02" : mysql,
            "altTech_02"   : "mysql",
        },
        {
            "tittle"       : " GSI GROUP SAS",
            "proyect_icon" : gsi_logo,
            "url"          : "https://groupgsi.com",
            "LinkTech_01"  : "https://laravel.com",
            "LinkTech_02"  : "https://www.mysql.com",
            "ImageTech_01" : laravel,
            "altTech_01"   : "laravel",
            "ImageTech_02" : mysql,
            "altTech_01"   : "mysql",
        },
    ]

    return (
        <>  
            <main>
                <Head>
                    <link rel="shortcut icon" href="../imgs/avatar.jpg" />
                    <title> Joan Sebastian Giraldo Morales  </title>
                    <meta name="description" content="
                        I'm a Systems engineer, Full Stack Web Developer from Colombia. I am currently working as a freelancer in different projects, both for myself and for some clients."
                    />
                </Head>
                <Appbar/>
                <div className="w-full h-auto bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4">
                    {   
                        proyectos ? (
                            proyectos.map((data) => (
                                <ProyectItem tittle = { data.tittle } proyect_icon = { data.proyect_icon } url={data.url} >
                                    <Link target='blanck' href={data.LinkTech_01} className='w-1/2 flex justify-center items-center justify-items-center'>
                                        <Image
                                            src={data.ImageTech_01}
                                            alt={data.altTech_01}
                                            width={60}
                                            height={60}
                                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                                        />
                                    </Link>  
                                    <Link target='blanck' href={data.LinkTech_01} className='w-1/2 flex justify-center items-center justify-items-center'>
                                        <Image
                                            src={data.ImageTech_02}
                                            alt={data.altTech_02}
                                            width={60}
                                            height={60}
                                            className='object-cover md:w-[60px] md:h-[120p] w-[50%]'
                                        />
                                    </Link>
                                </ProyectItem>
                            ))
                        ) : null 
                    }
                </div>
                <Footer/>
            </main>
        </>
    )
}