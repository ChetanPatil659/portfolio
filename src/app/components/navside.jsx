import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';


const NavSide = () => {
    return (
        <div className="flex h-full items-center justify-center gap-5 text-sm lg:text-base text-gray-100">
            <Link href="https://github.com/ChetanPatil659" target='_blank'><i className="ri-github-line text-xs lg:text-xl text-neutral-300" ></i></Link>
            <Link data-v-6a4e710f="" href="mailto:patilchetan659@gmail.com" className="text-gray-950 bg-neutral-400 hover:text-gray-50 lg:p-3 w-fit rounded-3xl lg:px-5 p-2 px-3">Contact</Link>
        </div>
    )
}

export default NavSide;