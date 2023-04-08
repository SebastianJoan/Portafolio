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

export default function Home() {

    const [text, setText] = useState('');
    const originalText = `¡Hola! Soy Joan Sebastian Giraldo Morales, soy ingeniero de sistemas, fullStack, me encanta el desarrollo de aplicaciones moviles, web y de escritorio, aqui en mi portafolio web podrás encontrar algunos de mis proyectos destacados, conocer que tecnologias he manejado y mis rutas de aprendizaje.`
    const [Cursos, setCursos] = useState('');
    const Lista_cursos = `
    - Curso de Programación Básica
    - Curso de Prework: Configuración de Entorno de Desarrollo en Windows
    - Curso de Introducción al Desarrollo Backend
    - Curso de Inglés Básico A1 para Principiantes
    - Curso de Flutter
    - Curso de Computación Básica 2019
    - Curso Básico de JavaScript
    - Curso Básico de Algoritmos y Pensamiento Lógico
    - Curso de Gestión de Dependencias y Paquetes con NPM
    - Curso de Introducción a la Terminal y Línea de Comandos
    - Curso de Fundamentos de Node.js
    - Curso de Frontend Developer
    - Curso de Responsive Design: Maquetación Mobile First
    - Curso de Figma
    - Curso de Figma Avanzado
    - Curso de Introducción al Despliegue de Aplicaciones
    - Curso de JavaScript Engine (V8) y el Navegador
    - Curso de Redes Informáticas de Internet
    - Curso Básico de Seguridad Informática para Empresas
    `;

    function animateText() {
        let i = 0;
        const intervalId = setInterval(() => {
        setText(originalText.slice(0, i));
        i++;
        if (i > originalText.length) {
            clearInterval(intervalId);
        }
        }, 50);
    }

    function animateListText() {
        let i = 0;
        const intervalIdCursos = setInterval(() => {
        setCursos(Lista_cursos.slice(0, i));
        i++;
        if (i > Lista_cursos.length) {
            clearInterval(intervalIdCursos);
        }
        }, 50);
    }

    useEffect(() => {
        animateText();
        animateListText();
    }, []);

    return (
        <>
            <Appbar/>
            <div className='w-full h-auto p-8 py-4 gap-5 bg-gray-800 font-mono flex flex-col md:flex-row justify-center items-center justify-items-center'>
                <div className='md:w-[15%] w-full rounded-full overflow-hidden h-auto flex justify-center items-center justify-items-center'>
                    <Image
                        src={avatar}
                        alt="Imagen de perfil"
                        width={512}
                        height={512}
                        className='object-cover'
                    />
                </div>
                <div className='md:w-[85%] w-full'>
                    <div className='w-full h-auto bg-black text-center rounded-t-lg px-4 py-1'>
                        C/Windows/System32/cmd.exe
                    </div>
                    <div className='bg-black p-4 rounded-b-lg'>
                        <p className='animate-typing animate-duration-500'>
                            C:\Users\visit: {text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto bg-gray-800 px-4 py-2'>
                <div className='w-[100%]'>
                    <div className='w-full h-auto bg-black text-center rounded-t-lg px-4 py-1'>
                        C/Windows/System32/Studies.exe
                    </div>
                    <div className='bg-black p-4 rounded-b-lg'>
                        <p className='animate-typing animate-duration-500'>
                            C:\Users\visit: {Cursos}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto bg-gray-800 px-4 py-2'>
                <div className='md:w-[100%] w-full'>
                    <div className='w-full h-auto bg-black text-center rounded-t-lg md:px-4 py-1'>
                        C/Windows/System32/technologies.exe
                    </div>
                    <div className='bg-black p-4 rounded-b-lg animate-typing flex md:flex-row flex-col animate-duration-500 justify-between overflow-hidden w-auto h-auto px-4 py-2'>
                        <Image
                            src={dart}
                            alt="dart Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={flutter}
                            alt="flutter Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={js}
                            alt="js Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={mysql}
                            alt="mysql Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={nodejs}
                            alt="nodejs Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={react}
                            alt="react Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                        <Image
                            src={github}
                            alt="github Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full bg-white rounded-full'
                        />
                        <Image
                            src={figma}
                            alt="figma Logo"
                            width={120}
                            height={120}
                            className='object-cover md:w-[120px] md:h-[120p] w-full'
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}