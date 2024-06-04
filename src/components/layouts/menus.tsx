import Image from "next/image";
import Link from "next/link";

export interface MenuItem {
    unique: string;
    label: string;
    url: string;
}

export default function Menus() {
    const dataMenu: MenuItem[] = [
        {
            unique: 'home',
            label: 'Home',
            url: '#home',
        }, {
            unique: 'about',
            label: 'About',
            url: '#about',
        }, {
            unique: 'product',
            label: 'Product',
            url: '#product',
        }, {
            unique: 'contact-us',
            label: 'Contact US',
            url: '#contact-us',
        }
    ]

    return (
        <div className="fixed z-50 w-full">
            <div className="container mx-auto px-5 md:px-0">
                <div className="navbar bg-white text-black px-5 md:py-3 mt-8 rounded-3xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost mr-5 md:mr-0 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow rounded-box w-64">
                                {dataMenu && dataMenu?.length > 0 && dataMenu?.map(({ unique, label, url }: any) => (
                                    <li key={'mobile-' + unique}>
                                        <Link href={url || '#'}>{label || ''}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="#home" className="flex justify-center items-center text-xl">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo Company"
                                className=""
                                width={50}
                                height={50}
                                priority
                            />
                            <Image
                                src="/assets/logo-text.png"
                                alt="Logo Company"
                                className="ml-3 min-w-32"
                                width={150}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {dataMenu && dataMenu?.length > 0 && dataMenu?.map(({ unique, label, url }) => (
                                <li key={'desktop-' + unique}>
                                    <Link href={url || '#'}>{label || ''}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link href="#contact-us" className="hidden md:flex btn bg-orange-400 text-white border-orange-400 hover:bg-orange-500 hover:border-orange-500 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span>Join US</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
