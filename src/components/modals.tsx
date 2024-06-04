/* eslint-disable @next/next/no-img-element */


export interface ProductItem {
    name: string
    image: string
}

export default function Modals({ dataModal }: any) {
    const { name, image }: ProductItem = dataModal || {}

    return (
        <>
            <input type="checkbox" id="ModalComponent" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-3xl bg-white grid md:gap-5 md:grid-cols-2">
                    <div className="flex md:hidden justify-end items-start mb-2">
                        <label className="cursor-pointer" htmlFor="ModalComponent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </label>
                    </div>
                    <figure className="mb-5 md:mb-0">
                        <img src={image || '/assets/about-icon.png'} alt={name || ''} className="w-full h-full object-cover object-center rounded-md" />
                    </figure>
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold">{name || '-'}</h3>
                            <label className="hidden md:block cursor-pointer" htmlFor="ModalComponent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </label>
                        </div>
                        <p className="w-full py-4 text-xs md:text-sm">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="ModalComponent">Close</label>
            </div>
        </>
    );
}