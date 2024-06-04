
export default function Contact() {

    return (
        <section id="contact-us" className="">
            <div className="absolute bg-[url('/assets/background-contact.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute z-10 opacity-65 bg-black w-full h-screen bg-cover bg-no-repeat bg-center"></div>

            <div className="relative flex h-screen justify-start items-center z-30">
                <div className="container mx-auto flex flex-row mt-10">
                    <div className="w-full px-7 mt-20">
                        <div className="text-black flex flex-col justify-center items-center">
                            <h1 className="mb-10 text-3xl text-white">Contact US <span className="font-bold text-4xl text-orange-400">MyCompany</span></h1>

                            <div className="w-full md:grid md:gap-5 md:grid-cols-2">
                                <div className="text-white">
                                    <ul>
                                        <li className="mb-5">
                                            <div className="flex flex-row justify-start items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                                </svg>
                                                <label htmlFor="" className="ml-3 text-sm md:text-lg font-bold">MyCompany Office</label>
                                            </div>
                                            <p className="ml-9 text-xs md:text-sm">Merdeka Square, RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex flex-row justify-start items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                                </svg>
                                                <label htmlFor="" className="ml-3 text-sm md:text-lg font-bold">Email</label>
                                            </div>
                                            <p className="ml-9 text-xs md:text-sm">info@mycompany.id</p>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex flex-row justify-start items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                </svg>
                                                <label htmlFor="" className="ml-3 text-sm md:text-lg font-bold">Phone</label>
                                            </div>
                                            <p className="ml-9 text-xs md:text-sm">(+62) 221 345 678</p>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex flex-row justify-start items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>
                                                <label htmlFor="" className="ml-3 text-sm md:text-lg font-bold">FAX</label>
                                            </div>
                                            <p className="ml-9 text-xs md:text-sm">(+62) 211 345 678</p>
                                        </li>
                                    </ul>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427022623!2d106.82457787480277!3d-6.1753923938120066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1717520306740!5m2!1sid!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full mt-14 md:mt-0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}