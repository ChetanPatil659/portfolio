import gsap from "gsap";
import Link from "next/link";

const Project = (props) => {

    

    return (
        <div className="lg:h-2/6 h-1/5 border-y-2
            lg:w-5/6 flex items-center
            justify-start lg:px-0 px-8
            text-xl lg:ml-20 lg:py-20 py-8
            border-neutral-700 ">
            <h1 className="text-neutral-400 font-extralight hover:text-neutral-700 lg:hover:ml-14 ease-in-out duration-300 lg:text-9xl transition-all">
                <Link href={props.link} target="_blank"> {props.name} </Link>
            </h1>
        </div>
    )
}

export default Project