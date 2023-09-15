import Link from "next/link";

const Footer = () => {
    return (
        <div className="text-neutral-500 flex items-center lg:justify-end justify-start lg:px-32 lg:py-10 py-3 mt-10 mb-3 px-10">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Link href='https://twitter.com/chetanp36997781' target="_blank" className="hover:text-gray-50">Twitter</Link> 
                <Link href='https://www.instagram.com/_cliosarts_/?hl=en' target="_blank" className="hover:text-gray-50">Instagram</Link> 
                <Link href='https://www.linkedin.com/in/chetan-patil-309846136/' target="_blank" className="hover:text-gray-50">LinkedIn</Link>
                <Link href='https://github.com/ChetanPatil659' target="_blank" className="hover:text-gray-50">GitHub</Link>
            </div>
        </div>
    )
}

export default Footer;