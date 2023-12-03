import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

//Profile Image
import profile_image from '../public/image_profile.webp';

//cursos
import computacion_basica_img from '../public/computacion_basica.webp';
import curso_js from '../public/Javascript_basico.webp';
import programacion_basica from '../public/programacion_basica.webp';
import computadoras_img from '../public/curso_computadoras.webp';
import ecmascript from '../public/curso_ecmacsript.webp';
import entornowindows from '../public/curso_entornowindows.webp'; 
import curso_figma from '../public/curso_figma.webp';
import curso_figma_avanzado from '../public/curso_figma_avanzado.webp';
import curso_flutter from '../public/curso_flutter.webp';
import curso_frontend from '../public/curso_frontend.webp';
import curso_fundamentos_node from '../public/curso_fundamentos_node.webp';
import curso_pensamiento from '../public/curso_pensamientologico.webp';
import curso_ingles from '../public/curso_ingles.webp';
import curso_introduccion from '../public/curso_introduccion_despliege.webp';
import curso_despliegue from '../public/curso_despliegue.webp';
import curso_npm from '../public/curso_npm.webp';
import curso_responsive from '../public/curso_responsive.webp';
import curso_seguridad_2 from '../public/curso_seguridad_2.webp';
import curso_seguridad from '../public/curso_seguridad.webp';
import curso_terminal from '../public/curso_terminal.webp'; 

//proyectos
import LogoPoke from '../public/pokemon.svg';
import EcoparqueDiamante from '../public/ecoparquediamante.webp';
import gsigroup from '../public/gsigroup.webp';
import gworks from '../public/gworks.webp';
import overwatch from '../public/Overwatch.webp';
import ebconstrucciones from '../public/ebconstrucciones.webp';

//tecnologias
import Astro from '../public/astro.svg';
import Laravel from '../public/laravel.svg';
import Mysql from '../public/mysql.svg';
import Testik from '../public/testik.webp';
import TailwindCSS from '../public/tailwind.svg';
import React from '../public/react.svg';
import Next from '../public/next.svg';

export default function Home() {
  
  const RedesLink: {  Key:string, Name: string, Link: string }[] = [
    { 
      Key : "d618916765e",
      Name: "Twitter",
      Link: "https://twitter.com/SGiraldoMor/",
    },
    { 
      Key : "1474e8bce02",
      Name: "Instagram",
      Link: "https://www.instagram.com/sgiraldomor/",
    },
    { 
      Key : "53ff4628d97",
      Name: "Linkedin",
      Link: "https://www.linkedin.com/in/sgiraldomor/",
    },
    { 
      Key : "35cf2c8db98",
      Name: "Github",
      Link: "https://github.com/SebastianJoan",
    }
  ];

  const Experiencias: {  Key:string, Empresa: string, Duracion: string, Contexto: string }[] = [
    { 
      Key: "d221e20c6ca",
      Empresa: "GSI GROUP SAS",
      Duracion: "2021 - Actualmente",
      Contexto: "Diseño, Desarrollo de los diferentes proyectos de la empresa, desde paginas web sencillas (LandingPages) informativas para mostrar servicios e imagen de marca hasta sistemas complejos de mantenimiento para la gestion documental de los activos importantes y seguimiento a los mantenimientos en base a las diferentes normativas de la indutria oil & gas"
    },
    { 
      Key: "196291a22db",
      Empresa: "Gworks Services",
      Duracion: "2022 - Actualmente",
      Contexto: "Diseño, Desarrollo de la pagina web (LandingPages) imagen de marca hasta sistemas complejos de mantenimiento para la gestion documental de los activos importantes y seguimiento a los mantenimientos en base a las diferentes normativas de la indutria oil & gas"
    },
    { 
      Key: "296f227d2c4",
      Empresa: "Testik Services",
      Duracion: "2022 - Actualmente",
      Contexto: "Diseño, Desarrollo de los diferentes proyectos de la empresa, desde paginas web sencillas (LandingPages) informativas para mostrar servicios e imagen de marca hasta sistemas complejos de mantenimiento para la gestion documental de los activos importantes y seguimiento a los mantenimientos en base a las diferentes normativas de la indutria oil & gas"
    },
    { 
      Key: "214e41a4666",
      Empresa: " Ecoparque Diamante S.A.S",
      Duracion: "2023",
      Contexto: "Diseño, Desarrollo de la página web en colaboración con el equipo de Diseño y Publicidad."
    },
  ];

  const UdemyCursos: {  Key:string, Curso: string, Link: string }[] = [
    { 
      Key: "bea1515d231",
      Curso: "TypeScript: Tu completa guía y manual de mano",
      Link: "https://www.udemy.com/course/typescript-guia-completa/",
    },
    { 
      Key: "bea1515d221331",
      Curso: "NodeJS: De cero a experto",
      Link: "https://www.udemy.com/course/nodejs-de-cero-a-experto/",
    },
    { 
      Key: "bea1515d212asd331",
      Curso: "Legacy - Node: De cero a experto",
      Link: "https://www.udemy.com/course/node-de-cero-a-experto/",
    },
    { 
      Key: "bea1515d212331",
      Curso: "React: De cero a experto ( Hooks y MERN )",
      Link: "https://www.udemy.com/course/react-cero-experto/",
    },
    { 
      Key: "bea1515d2asdas31",
      Curso: "React PRO: Lleva tus bases al siguiente nivel",
      Link: "https://www.udemy.com/course/react-pro/",
    },
    { 
      Key: "bea1515d23asdas1",
      Curso: "Next.js: El framework de React para producción",
      Link: "https://www.udemy.com/course/nextjs-fh/",
    },
    { 
      Key: "bea1515d231saz1",
      Curso: "Flutter - Móvil: De cero a experto - Edición 2023",
      Link: "https://www.udemy.com/course/flutter-cero-a-experto/",
    },
    { 
      Key: "bea1515d231asd",
      Curso: "Legacy - Flutter: Tu guía completa para IOS y Android",
      Link: "https://www.udemy.com/course/flutter-ios-android-fernando-herrera/",
    },
    { 
      Key: "bea1515d2asd31",
      Curso: "Flutter Web: Aplicaciones y páginas web profesionales",
      Link: "https://www.udemy.com/course/flutter-web-fh/",
    },
  ];

  const PlatziCursos: {  Key:string, Image: StaticImageData, Curso: string }[] = [
    {
      Key: "bea151sad5d231",
      Image: computacion_basica_img,
      Curso: "Curso Básico de Computadores e Informática",
    },
    {
      Key: "bea151vc5d231",
      Image: curso_js,
      Curso: "Curso Básico de JavaScript",
    },
    {
      Key: "bea1515d231xcx",
      Image: programacion_basica,
      Curso: "Curso Básico de Programación",
    },
    {
      Key: "bea1515dasdxv231",
      Image: computacion_basica_img,
      Curso: "Curso de Computación Básica",
    },
    {
      Key: "bea1515d231asdv",
      Image: curso_figma,
      Curso: "Curso de Figma",
    },
    {
      Key: "bea1515d23zxcz1",
      Image: curso_figma_avanzado,
      Curso: "Curso de Figma Avanzado",
    },
    {
      Key: "bea1515asdd231",
      Image: curso_flutter,
      Curso: "Curso de Flutter",
    },
    {
      Key: "bea15asdas15d231",
      Image: curso_frontend,
      Curso: "Curso de Frontend Developer",
    },
    {
      Key: "bea151asd2221sad5d231",
      Image: curso_fundamentos_node,
      Curso: "Curso de Fundamentos de Node.js",
    },
    {
      Key: "bea15132x5d231",
      Image: curso_terminal,
      Curso: "Curso de Introducción a la Terminal y Línea de Comandos",
    },
    {
      Key: "bea151asd5dlñxma231",
      Image: curso_introduccion,
      Curso: "Curso de Introducción al Desarrollo Backend",
    },
    {
      Key: "bea15asdaasds15d231",
      Image: curso_despliegue,
      Curso: "Curso de Introducción al Despliegue de Aplicaciones",
    },
    {
      Key: "bea1515dvcvc231",
      Image: ecmascript,
      Curso: "Curso de JavaScript Engine (V8) y el Navegador",
    },
    {
      Key: "bea1515asdd5510231",
      Image: curso_seguridad,
      Curso: "Curso de Redes Informáticas de Internet",
    },
    {
      Key: "bea1515d2asv31",
      Image: curso_responsive,
      Curso: "Curso de Responsive Design: Maquetación Mobile First",
    }, 
    {
      Key: "bea1515asdavd231",
      Image: curso_pensamiento,
      Curso: "Curso Básico de Algoritmos y Pensamiento Lógico",
    },    
    {
      Key: "bea1515dasd231",
      Image: curso_seguridad_2,
      Curso: "Curso Básico de Seguridad Informática para Empresas",
    },    
    {
      Key: "bea1515asdasdd231",
      Image: curso_npm,
      Curso: "Curso de Gestión de Dependencias y Paquetes con NPM",
    },    
    {
      Key: "bea1515d4353231",
      Image: curso_ingles,
      Curso: "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)",
    },
    {
      Key: "bea151asd5d231",
      Image: entornowindows,
      Curso: "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
    },
  ];

  const Proyectos: { Key:string, Tittle: string, Icon:StaticImageData, Link: string, Framework: StaticImageData, CSS: StaticImageData }[] = [  
    { 
      "Key"       : "dad37981efe",
      "Tittle"    : "Overwatch",
      "Icon"      : overwatch,
      "Link"      : "https://www.overwatch.com.co", 
      "Framework" : Astro, 
      "CSS"       : TailwindCSS, 
    },{ 
      "Key"       : "743bd440e79",
      "Tittle"    : "Ecoparque Diamante",
      "Icon"      : EcoparqueDiamante,
      "Link"      : "https://www.ecoparquediamante.com", 
      "Framework" : React, 
      "CSS"       : TailwindCSS, 
    },
    { 
      "Key"       : "70d9b61f049",
      "Tittle"    : "Gsi group",
      "Icon"      : gsigroup,
      "Link"      : "https://groupgsi.com/", 
      "Framework" : Laravel, 
      "CSS"       : Mysql, 
    },
    { 
      "Key"       : "18ee64d16f4",
      "Tittle"    : "Gworks Services",
      "Icon"      : gworks,
      "Link"      : "https://www.gworks.com.co", 
      "Framework" : Laravel, 
      "CSS"       : Mysql, 
    },
    { 
      "Key"       : "e4ea38f7652",
      "Tittle"    : "Testik Services",
      "Icon"      : Testik,
      "Link"      : "https://testik.com.co/inicio", 
      "Framework" : Laravel, 
      "CSS"       : Mysql, 
    },
    { 
      "Key"       : "d2b2b04bdd9",
      "Tittle"    : "EB Construcciones S.A.S",
      "Icon"      : ebconstrucciones,
      "Link"       : "https://www.ebconstrucciones.com.co", 
      "Framework" : Laravel, 
      "CSS"       : Mysql, 
    },
    { 
      "Key"       : "810ab1e3e06",
      "Tittle"    : "PokeDex",
      "Icon"      : LogoPoke,
      "Link"       : "https://poke-dex-next-demo.vercel.app/", 
      "Framework" : React, 
      "CSS"       : TailwindCSS, 
    }
  ]
  

  return (
    <main className="absolute w-full h-screen bg-[#1A1A1A] px-4 lg:px-64 py-16 flex flex-col gap-3 overflow-hidden overflow-y-auto">
      <div className="w-full h-auto   flex flex-col sm:flex-row justify-center items-center gap-3">
        <div className="w-[150px] h-[125px]">
          <Image
            src={profile_image}
            alt='Foto Perfil'
            width={161}
            height={161}
            className='w-full h-full object-cover rounded-full border border-white shadow'
          />
        </div>
        <div className="w-full h-auto  text-white flex flex-col px-4 py-2 justify-center items-start">
          <h3 className="font-bold ">
            Joan Sebastian Giraldo Morales
          </h3>
          <p>
            Soy Ingeniero de sistemas, Desarrolador fullstack, me encanta el desarrollo de aplicaciones, aqui en mi portafolio web podrás encontrar algunos de mis proyectos, conocer que tecnologias he manejado y mis rutas de aprendizaje.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-3">
        {
          RedesLink ? RedesLink.map((data) => (
            <Link key={data.Key} href = { data.Link } target='blanck' className="w-full sm:w-auto h-auto px-4 py-2 border border-gray-300 hover:border-white rounded-md text-gray-300 hover:text-white cursor-pointer transition duration-700 ease-in-out ">
              { data.Name }
            </Link>
          )) : null
        } 
      </div>
      <br />
      <div className="w-full h-auto flex flex-col justify-center items-start gap-3">
        <div className="w-full h-auto  px-4 ">
          <h1 className="font-bold text-white">
            Experiencia Relevante
          </h1>
        </div>
        {
          Experiencias ? Experiencias.map((data) => (
            <div key={data.Key} className="w-full h-auto  px-4 py-2  border border-gray-400 rounded-md text-gray-400"> 
              <h1 className="font-bold text-white">
                Empresa: { data.Empresa }
              </h1>
              <h1>
                { data.Duracion }
              </h1>
              <p>
                { data.Contexto }
              </p>
            </div>
          )) : null
        } 
      </div>
      <br />
      <div className="w-full h-auto flex flex-col justify-center items-start gap-3">
        <div className="w-full h-auto  px-4 ">
          <h1 className="font-bold text-white">
            Estudios
          </h1>
        </div>
        <div className="w-full h-auto  px-4 py-2  border border-gray-400 rounded-md text-gray-400">
          <h1 className="font-bold text-white">
            Universidad: Universidad de investigacion y desarrollo - UDI
          </h1>
          <h1>
            2021
          </h1>
          <p>
            Ingenieria de sistemas
          </p>
        </div>
        <div className="w-full h-auto  px-4 py-2  border border-gray-400 rounded-md text-gray-400">
          <h1 className="font-bold text-white">
            Udemy
          </h1>
          <br />
          <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {
              UdemyCursos ? 
                UdemyCursos.map(
                  (data) => (
                    <Link key={data.Key} href={data.Link} className="w-auto h-auto px-4 py-2 flex transition duration-700 ease-in-out gap-3 justify-start items-center border rounded-md border-white hover:bg-white text-white hover:text-black">
                      <h1 className="font-bold  text-sm">
                        { data.Curso }
                      </h1>
                    </Link>
                )) : null
            }
          </div>
        </div>
        <div className="w-full h-auto  px-4 py-2  border border-gray-400 rounded-md text-gray-400">
          <h1 className="font-bold text-white">
            Platzi
          </h1>
          <br />
          <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {
              PlatziCursos ? 
                PlatziCursos.map(
                  (data) => (
                    <div key={data.Key} className="w-auto h-auto px-4 py-2 flex gap-3 justify-start items-center">
                      <div className="w-[40px] h-[40px] rounded-full justify-center items-center">
                        <Image
                          src={data.Image}
                          alt='Imagen del curso'
                          width={161}
                          height={161}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='w-10/12'>
                        <h1 className="font-bold text-white text-sm">
                          { data.Curso }
                        </h1>
                      </div>
                    </div>
                )) : null
            }
          </div>
        </div> 
      </div>
      <br />
      <div className="w-full h-auto flex flex-col justify-center items-start gap-3">
        <div className="w-full h-auto  px-4 ">
          <h1 className="font-bold text-white">
            Proyectos Realizados
          </h1>
        </div>
        <div className='w-full h-auto  rounded-md grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {
            Proyectos ? Proyectos.map((data) => (
              <Link key={data.Key} href={data.Link} target='blanck' className='w-auto h-auto px-4 py-6 sm:py-2 bg-gray-800 flex flex-col justify-center items-center sm:flex-row gap-3 border border-white rounded-sm scale-95 hover:scale-105 cursor-pointer transition duration-700 ease-in-out'>
                <div className='w-full h-auto sm:w-1/2'>
                  <Image
                    src={data.Icon}
                    alt=''
                    width={data.Icon.width}
                    height={data.Icon.height}
                    className='w-full h-full object-contain'
                    priority={false}
                  />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start gap-3'>
                  <h1 className='font-bold text-white text-xl'>{data.Tittle}</h1>
                  <span className='text-white text-base'>Tecnologías</span>
                  <div className='w-full h-auto flex flex-col justify-center items-center sm:flex-row'>
                    <div className='w-1/2 h-auto flex justify-center items-center'>
                      <Image
                        src={data.Framework}
                        alt='Proyect Icon'
                        width={300}
                        height={300}
                        className='w-full h-full object-cover'
                        priority={false}
                      />
                    </div>
                    <div className='w-1/2 h-auto flex justify-center items-center'>
                      <Image
                        src={data.CSS}
                        alt=''
                        width={300}
                        height={300}
                        className='w-full h-full object-cover'
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )) : null
          }
        </div>
      </div>
    </main>
  )
}
