'use client'

import Image from "next/image";

import { LinerBlock } from "@/components/LinerBlock"
import { animated, useInView, useSpring } from "@react-spring/web"
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";

export const Block3 = () => {
  const targetRef = useRef<HTMLDivElement|null>(null)
  const [props, api] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(0px, 30px, 0)`,
    delay: 1000
  }), [])

  const [props2, api2] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(0px, 30px, 0)`,
    delay: 2000
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
        transform: `translate3d(0px, 30px, 0)`,
      })
      api2.start({
        opacity: 0,
      transform: `translate3d(0px, 30px, 0)`,
      })
    }
  }, [api, api2, isVisible])

  return (<div className="bg-bg-1 bg-no-repeat bg-cover">
    <LinerBlock >
      <div className="h-[640px] container mx-auto " >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

          <div className="text-white flex flex-col justify-center gap-4" ref={targetRef} >

            <animated.div style={props}>
              <h1 className="text-3xl lg:text-6xl" >Revolutionary Decentralized Router</h1>
            </animated.div>

            <animated.div style={props2}>
              <h2 className="text-xl lg:text-3xl">High-Speed Network, Effortless Earnings</h2>
            </animated.div>

          </div>

        </div>
      </div>
    </LinerBlock>

  </div>)
}