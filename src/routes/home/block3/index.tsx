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
    transform: `translate3d(0px, 50px, 0)`,
    delay: 1500
  }), [])

  const [props2, api2] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(50px, 0px, 0)`,
    delay: 2500
  }), [])

  const [props3, api3] = useSpring(() => ({
    opacity: 0,
    transform: `translate3d(-50px, 0px, 0)`,
    delay: 2500
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
      api3.start({
        transform: `translate3d(0, 0, 0)`,
        opacity: 1
      })
    } else {
      api.start({
        opacity: 0,
        transform: `translate3d(0px, 50px, 0)`,
      })
      api2.start({
        opacity: 0,
        transform: `translate3d(50px, 0px, 0)`,
      })
      api3.start({
        opacity: 0,
        transform: `translate3d(-50px, 0px, 0)`,
      })
    }
  }, [api, api2, api3, isVisible])

  return (<div className="bg-[#000311] ">
      <div className="h-[640px] container mx-auto flex items-center" >

          <div className="text-white flex flex-col justify-center items-center flex-1 gap-4" ref={targetRef} >
            <animated.div style={props}>
              <h1 className="text-3xl lg:text-6xl font-bold">
                Fusion Web3 Innovative Play
              </h1>
            </animated.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
              <animated.div style={props2}>
                <div className="bg-gradient-to-br from-[#092252] from-[11%] to-[#05102285] to-[95%] rounded-3xl overflow-hidden">
                  <div className="bg-bg-3-1 bg-right-bottom bg-no-repeat h-[370px] p-6 bg-100 hover:bg-150 transition-all duration-300 ease-linear">
                    <h1 className="text-xl lg:text-3xl" >Revolutionary Decentralized Router</h1>
                    <p>Earn While You Connect</p>
                  </div>
                </div>
              </animated.div>

              {/* background: linear-gradient(114.87deg, #071A40 11.01%, rgba(5, 16, 34, 0.8) 97.64%);
 */}
              <animated.div style={props3}>
                <div className="bg-gradient-to-br from-[#071A40] from-[11%] to-[#05102285] to-[95%] rounded-3xl overflow-hidden">
                  <div className="bg-bg-3-2 bg-right-bottom bg-no-repeat h-[370px] p-6 bg-100 hover:bg-150 transition-all duration-300 ease-linear">
                    <h2 className="text-xl lg:text-3xl">High-Speed Network, Effortless Earnings</h2>
                    <p>Technology driven, not dependent on token economy</p>
                  </div>
                </div>
              </animated.div>
            </div>
          </div>

      </div>

  </div>)
}