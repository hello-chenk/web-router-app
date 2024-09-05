import type { FC, PropsWithChildren } from "react"
{/* background: linear-gradient(180deg, rgba(3, 13, 29, 0.93) 31.46%, rgba(5, 16, 34, 0.52) 84.77%); */}
export const LinerBlock:FC<PropsWithChildren> = ({children}) => {
  return <div className="bg-gradient-to-b from-[#030D1DED] from-[30%] to-[#05102285] to-[85%]">{children}</div>
}