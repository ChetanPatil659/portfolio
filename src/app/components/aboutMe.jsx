import Image from "next/image";
import Me from "@/app/images/Me.png"

const AboutMe = () => {
    return (
        <div className="text-neutral-300 flex lg:items-center lg:justify-start lg:flex-row flex-col p-5 lg:p-20 flex-nowrap gap-8 lg:w-3/5 lg:gap-11">

            <div className="h-52 w-52 rounded-full lg:h-72 lg:w-72 shrink-0 overflow-hidden flex items-center justify-center">
                <Image src={Me} alt="ME"/>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-6">
                <h4 className="w-full lg:w-2/3 text-base shrink-0 leading-7 tracking-wide">
                    <span className="text-neutral-500">(ABOUT ME)</span> <br />


                    I'm a passionate and versatile full-stack web developer with a 
                    keen eye for detail and a love for problem-solving. With a strong 
                    foundation in both front-end and back-end technologies, I bring 
                    websites and applications to life, ensuring they are functional, 
                    user-friendly, and aesthetically pleasing. I thrive in collaborative 
                    environments and am dedicated to staying up-to-date with the latest 
                    web development trends to deliver top-notch solutions. Let's work together 
                    to create innovative and engaging digital experiences.
                </h4>
                <a data-v-6a4e710f="" href="mailto:patilchetan659@gmail.com" className="text-gray-50 bg-neutral-600 p-2 w-fit rounded-3xl px-4">contact me</a>
            </div>

        </div>
    )
}

export default AboutMe;