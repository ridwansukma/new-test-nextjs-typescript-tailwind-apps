import Image from "next/image";
import Menus from "@/components/menus";

export default function Headers() {
    return (
        <header className="w-full h-screen">
            <div className="absolute z-0 bg-[url('/assets/background-headers.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute z-10 opacity-50 bg-black w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            
            <Menus />

            <div className="relative flex h-screen justify-start items-center z-30">
                <div className="container mx-auto flex flex-row mt-10">
                    <div className="w-full md:w-7/12 px-7 mt-20">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5 capitalize">Company Profile</h1>
                        <p className="text-sm md:text-md text-justify leading-5 md:leading-6">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</p>
                        <a className="btn w-full md:w-48 mt-10 bg-orange-300 text-black border-orange-300 hover:bg-orange-400 hover:border-orange-400 rounded-3xl">Learn More</a>
                    </div>
                    <div className="md:w-1/12 hidden md:block">&nbsp;</div>
                    <div className="md:w-4/12 hidden md:flex justify-center items-center text-center">
                        <Image
                            src="/assets/header-icon.png"
                            alt="Vercel Logo"
                            className=""
                            width={350}
                            height={350}
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
