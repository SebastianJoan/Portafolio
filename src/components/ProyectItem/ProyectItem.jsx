import Image from "next/image";

export default function ProyectItem(props) {

    const { tittle, proyect_icon, children, url } = props;
    
    const clickHandle = () => {
        document.location.href = url;
    }
    
    return (
        <>
            <div onClick={ () => clickHandle() } className=' scale-90 hover:scale-110 ease-in duration-500  bg-[#111b21] cursor-pointer shadow-md shadow-[#111b21] w-auto h-[250px] py-8 md:h-[150px] flex flex-col md:flex-row justify-center items-center justify-items-center gap-5'>
                <Image
                    src={proyect_icon}
                    alt="icon_proyect"
                    width={120}
                    height={120}
                    className='object-cover md:w-[120px] md:h-[120p] w-[80px]'
                />
                <div className='flex px-8 flex-col justify-start items-center justify-items-center gap-2'>
                    <div className='flex flex-col justify-center '>
                        <h3 className='text-white font-bold'> { tittle } </h3>
                        <h3>
                            Technologias:
                        </h3>
                    </div>
                    <div className='flex justify-between w-full gap-4'>
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
}
