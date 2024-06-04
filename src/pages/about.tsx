import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="">
            <div className="absolute bg-[url('/assets/background-abouts.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute z-10 opacity-65 bg-black w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            <div className="relative flex h-screen justify-start items-center z-30">
                <div className="container mx-auto flex flex-col md:flex-row mt-10">
                    <div className="mt-10 w-full md:w-6/12 flex justify-center items-center text-center">
                        <Image
                            src="/assets/about-icon.png"
                            alt="About Icon"
                            className="hidden md:hidden lg:block"
                            width={350}
                            height={350}
                            priority
                        />
                        <Image
                            src="/assets/about-icon.png"
                            alt="About Icon"
                            className="hidden md:block lg:hidden"
                            width={250}
                            height={250}
                            priority
                        /><Image
                            src="/assets/about-icon.png"
                            alt="About Icon"
                            className="block md:hidden lg:hidden"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>
                    <div className="md:w-1/12 hidden md:block">&nbsp;</div>
                    <div className="w-full md:w-6/12 px-7 mt-16">
                        <h1 className="text-3xl md:text-4xl mb-5 capitalize">About <span className="font-bold text-5xl">MyCompany</span></h1>
                        <p className="text-sm md:text-md text-justify leading-5 md:leading-6">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</p>
                        <Link href="#contact-us" className="btn w-full md:w-40 mt-10 bg-orange-400 text-white border-orange-400 hover:bg-orange-500 hover:border-orange-500 rounded-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Contact US
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
