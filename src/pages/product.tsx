/* eslint-disable @next/next/no-img-element */
"use client"

import { getProducts, getImages } from "@/api/services";
import Modals from "@/components/modals";
import { useEffect, useState } from "react";

export interface ProductItem {
    id: string
    name: string
    image: string
}

export interface ProductImageItem {
    id: string[]
    image: string
}

export default function Product() {
    const [product, setProduct] = useState<ProductItem[]>([]);
    const [images, setImages] = useState<ProductImageItem[]>([]);
    const [dataModal, setDataModal] = useState<ProductItem>();

    useEffect(() => {
        getImages().then(({ data: { data } }) => {
            setImages(data)
        })
            .catch(() => setImages([]))
    }, [])


    useEffect(() => {
        getProducts()
            .then(({ data: { data } }) => {
                let result: ProductItem[] = (data && data?.length > 0) ? data?.map(({ id, name }: any) => {
                    const image: string = images.find(({ id: idImages }) => idImages.includes(id))?.image || '';

                    return {
                        id,
                        name,
                        image: image || ''
                    }
                }) : []
                setProduct(result)
            })
            .catch(() => setProduct([]))
    }, [images])

    return (
        <section id="product" className="pb-24 bg-[url('/assets/bg-texture.avif')] w-full min-h-full bg-cover bg-repeat bg-center">
            <div className="relative flex min-h-full z-30">
                <div className="container mx-auto flex flex-row mt-10">
                    <div className="w-full px-7 mt-32">
                        <div className="text-black flex flex-col justify-center items-center">
                            <h1 className="mb-10 text-3xl text-orange-400">Product <span className="font-bold text-4xl">MyCompany</span></h1>

                            <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-4">
                                {product && product?.length > 0 && product?.map(({ id, name, image }: ProductItem) => {
                                    return (
                                        <div className="card card-compact shadow-xl" key={id}>
                                            <figure><img src={image || '/assets/about-icon.png'} alt={name || ''} className="w-full h-52 object-cover object-center" /></figure>
                                            <div className="card-body">
                                                {/* desktop */}
                                                <h2 className="hidden md:block card-title">{name !== null ? (name?.substr(0, 21) + (name?.length > 20 ? '...' : '')) : '-'}</h2>
                                                <p className="hidden md:block ">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}</p>

                                                {/* mobile */}
                                                <h2 className="block md:hidden card-title">{name !== null ? (name?.substr(0, 17) + (name?.length > 17 ? '...' : '')) : '-'}</h2>
                                                <p className="block md:hidden">{`Lorem Ipsum is simply dummy text of the print...`}</p>
                                                <div className="card-actions justify-end mt-3">
                                                    <label
                                                        htmlFor="ModalComponent"
                                                        className="btn btn-sm bg-orange-400 text-white border-orange-400 hover:bg-orange-500 hover:border-orange-500 rounded-xl"
                                                        onClick={() => {
                                                            setDataModal({ id, name, image })
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <Modals dataModal={dataModal} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
