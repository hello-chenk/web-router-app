
import Image from "next/image";

import { Block1 } from "@/src/routes/home/block1";
import { Block2 } from "@/src/routes/home/block2";
import { Block3 } from "@/src/routes/home/block3";

export default function Home() {
  return (
    <main className="">
      {/* block */}
      <header className="fixed top-0 left-0 right-0 bg-[#020F2799] py-4 px-6">
        <div className="container mx-auto">
          <Image src="/network.svg" width={337} height={20} alt="logo"/>
        </div>
      </header>
      
      <Block1 />
      <Block2 />
      <Block3 />
    </main>
  );
}
