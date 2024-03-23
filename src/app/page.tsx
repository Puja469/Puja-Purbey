import Image from "next/image";
import {Navbar} from "@/app/pageComponents/Navbar";
import HeroSection from "@/app/pageComponents/heroSection";

export default function Home() {
  return (
      <>
        <div className={"p-4"}>
            <Navbar/>
            <HeroSection/>
        </div>
      </>
  );
}
