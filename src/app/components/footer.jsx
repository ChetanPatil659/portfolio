import Link from "next/link";

const Footer = () => {
    return (
        <div className="text-neutral-500 flex items-center lg:justify-end justify-center lg:px-32 lg:py-10 py-3 mt-10">
            <div className="flex gap-10 ">
                <Link href='https://twitter.com/chetanp36997781' target="_blank" className="hover:text-gray-50">Twitter</Link> 
                <Link href='https://www.instagram.com/_cliosarts_/?hl=en' target="_blank" className="hover:text-gray-50">Instagram</Link> 
                <Link href='https://www.linkedin.com/in/chetan-patil-309846136/' target="_blank" className="hover:text-gray-50">Linkdin</Link>
            </div>
        </div>
    )
}

export default Footer;