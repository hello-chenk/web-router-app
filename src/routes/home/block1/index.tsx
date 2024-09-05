'use client'

import Image from "next/image";

import { LinerBlock } from "@/components/LinerBlock"
import { animated, useSpring } from "@react-spring/web"
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";

export const Block1 = () => {
  const targetRef = useRef<HTMLDivElement|null>(null)
  const [props, api] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(30px, 0, 0)`,
    delay: 1000,
  }), [])

  const [props2, api2] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(-30px, 0, 0)`,
    delay: 1000,
  }), [])
  
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if(isVisible) {
      api.start({
        transform: `translate3d(0, 0, 0)`,
        opacity: 1
      })
      api2.start({
        transform: `translate3d(0, 0, 0)`,
        opacity: 1
      })
    } else {
      api.start({
        opacity: 0,
        transform: `translate3d(30px, 0, 0)`,
      })
      api2.start({
        opacity: 0,
        transform: `translate3d(-30px, 0, 0)`,
      })
    }
  }, [api, api2, isVisible])

  return (<div className=" bg-bg-1 bg-no-repeat bg-cover">
    <LinerBlock >
      <div className="h-screen container mx-auto " >
        <div className="pt-20 md:pt-44 " />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

          <div className="text-white flex flex-col justify-center gap-4" ref={targetRef}>

            <animated.div style={props}>
              <h1 className="text-3xl lg:text-6xl" >A router that earns you money.</h1>
            </animated.div>

            <animated.div style={props}>
              <h2 className="text-xl lg:text-3xl">Experience the future of home networking today.</h2>
            </animated.div>

          </div>

          <animated.div className='flex flex-row justify-end items-center' style={props2}>
            <div className="flex-1"></div>
            <Image src="/home/box.png" width={456} height={330} alt="box" />
          </animated.div>

        </div>
      </div>
    </LinerBlock>

  </div>)
}