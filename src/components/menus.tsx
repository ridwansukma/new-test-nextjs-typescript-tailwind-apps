import Image from "next/image";

export default function Menus() {
    type MenuItem = {
        unique: string;
        label: string;
        url: string;
    };
    
    const dataMenu: MenuItem[] = [
        {
            unique: 'home',
            label: 'Home',
            url: '#',
        },{
            unique: 'about',
            label: 'About',
            url: '#about',
        },{
            unique: 'product',
            label: 'Product',
            url: '#product',
        },{
            unique: 'contact-us',
            label: 'Contact US',
            url: '#contact-us',
        }
    ]

    return (
        <div className="fixed z-50 w-full">
            <div className="container mx-auto px-5 md:px-0">
                <div className="navbar bg-white text-black p-5 mt-8 rounded-3xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost mr-7 md:mr-0 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow rounded-box w-64">
                                {dataMenu && dataMenu.length > 0 && dataMenu.map(({ unique, label, url }) => (
                                    <li key={'mobile-' + unique}>
                                        <a href={url || '#'}>{label || ''}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a href="#" className="flex justify-center items-center text-xl">
                            <Image
                                src="/assets/logo.png"
                                alt="Vercel Logo"
                                className=""
                                width={50}
                                height={50}
                                priority
                            />

                            <div className="pl-4 text-sm font-semibold md:text-xl">Company Profile</div>
                        </a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {dataMenu && dataMenu.length > 0 && dataMenu.map(({ unique, label, url }) => (
                                <li key={'desktop-' + unique}>
                                    <a href={url || '#'}>{label || ''}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <a className="btn bg-orange-300 text-black border-orange-300 hover:bg-orange-400 hover:border-orange-400 rounded-2xl">Join US</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
