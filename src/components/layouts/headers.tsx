import Menus from "@/components/layouts/menus";
import Link from "next/link";

export default function Headers() {
    return (
        <header id="home" className="w-full h-screen">
            <div className="absolute z-0 bg-[url('/assets/background-headers.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute z-10 opacity-50 bg-black w-full h-screen bg-cover bg-no-repeat bg-center"></div>

            <Menus />

            <div className="relative flex h-screen justify-start items-center z-30">
                <div className="container mx-auto flex flex-row mt-10">
                    <div className="w-full md:w-7/12 px-7 mt-20">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5 capitalize">MyCompany</h1>
                        <p className="text-sm md:text-md text-justify leading-5 md:leading-6">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</p>
                        <Link href="#about" className="btn w-full md:w-56 mt-10 bg-orange-400 text-white border-orange-400 hover:bg-orange-500 hover:border-orange-500 rounded-3xl">
                            <div className="mr-10">Learn More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="md:w-5/12 hidden md:block">&nbsp;</div>
                </div>
            </div>
        </header>
    );
}
