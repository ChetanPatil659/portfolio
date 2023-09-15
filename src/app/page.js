'use client'

import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Project from "./components/projects";
import 'remixicon/fonts/remixicon.css';
import Tecnologies from "./components/tecnologies";
// import gsap from "gsap";
import { useEffect, useRef } from "react";
// import AnimatedCursor from "react-animated-cursor";
import Link from "next/link";



export default function Home() {

  let text = useRef(null)

  return (

    <>
      {/* <Cursor /> */}
      {/* <AnimatedCursor
        innerSize={30}
        outerSize={25}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'Project',
          'a',
          {
            target: 'img',
            options: {
              innerSize: 0,
              outerSize: 0,
              color: '0, 0, 0',
              outerAlpha: 0,
              innerScale: 0,
              outerScale: 0
            }
          }
        ]}
        
      /> */}

      {/* <Cursor cursorBackgrounColor='#cfcfcf' isGelly={true} /> */}

      <div className="bg-zinc-950 text-gray-200  h-screen">
        <Nav />
        <div className="lg:py-20 lg:px-20 sm:py-20 sm:px-20 h-4/5 flex flex-col justify-between">
          <div className="font-semibold tracking-wider text-gray-400
             lg:text-9xl
             flex flex-col gap-10
            text-xl py-20 px-8 text-left
           "
          ><div ref={(el) => text = el}>
              FULL-STACK <br />
              <span className="lg:px-32 lg:ml-16 ml-10">DEVELOPER</span> <br />
              <span className="lg:text-base text-gray-50 text-sm">based in INDIA</span>
            </div>

            <div className="w-full flex items-center justify-end py-10 text-sm lg:text-base text-right">
              <span>AVAILABLE FOR <br /> FREELANCE</span>
            </div>

          </div>

          <div className="w-full flex items-center justify-end px-5 text-base gap-2">
            <i className="ri-arrow-down-line bg-neutral-900 p-3 rounded-3xl" />
            <i className="ri-arrow-down-line bg-neutral-900 p-3 rounded-3xl" />
          </div>

        </div>

      </div>

      <div className="my-32 flex flex-col gap-20 mt-40">
        <div className="lg:px-32 lg:ml-16 ml-10 text-neutral-500 text-xl"><span>P</span>rojects -</div>
        <div>
        <Project name='ChatBook' link='https://chat-b00k.netlify.app/'/>
        <Project name='We Think Elastic' link='https://we-think-elastic.vercel.app/'/>
        </div>
      </div>

      <div className="flex items-center lg:justify-end w-full h-auto my-10">
        <AboutMe />
      </div>

      <div>
        <Tecnologies />
      </div>

      <div>
        <Footer />
      </div>

    </>

  )
}
