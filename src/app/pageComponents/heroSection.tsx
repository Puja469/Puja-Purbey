import Image from "next/image";
import ProfilePic from "../../../public/Images/profilePic.jpeg";
import {FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {PiPaperPlaneTiltBold} from "react-icons/pi";

export default function HeroSection(){
    return(
        <>
            <div className={"h-[38.3rem] flex md:flex-row flex-col-reverse relative items-center justify-center gap-14"}>
                <div className={"md:w-2/12 md:pl-32 md:static absolute left-10 top-24 social-icons mt-2"}>
                    <ul className={"flex flex-col text-2xl gap-8"}>
                        <a href={"https://www.instagram.com/nirajan__mahato/"} target={"_blank"} rel={"noreferrer"}><li><RiInstagramFill /></li></a>
                        <a href={"https://www.linkedin.com/in/nirajan-mahato-898b90285/"} target={"_blank"} rel={"noreferrer"}><li><FaLinkedinIn /></li></a>
                        <a href={"https://github.com/NirajanMahato"} target={"_blank"} rel={"noreferrer"}><li><FaGithub /></li></a>
                    </ul>
                </div>
                <div className={"md:w-5/12 flex flex-col items-end md:px-0 px-4"}>
                    <h1 className={"md:w-10/12 w-full text-5xl font-bold md:text-left text-center"}>Puja Purbey</h1>
                    <h1 className={"md:w-8/12 w-8/12 text-xl text-gray-600 mt-2"}> Backend Developer</h1>
                    <h1 className={"text-gray-500 md:w-10/12 text-sm mt-4"}>An experienced backend developer with a knack for creating reliable server-side solutions.</h1>
                    <div className={"md:w-10/12 w-full mt-6"}>
                        <a href={"/error-page"} className={"h-[3.5rem] w-36 text-sm text-white rounded-xl shadow-xl bg-gray-900 flex justify-center items-center cursor-pointer"}>
                            <h1>Download CV</h1>
                            <PiPaperPlaneTiltBold  className={"ml-2"}/>
                        </a>
                    </div>
                </div>
                <div className={"md:w-5/12 w-full flex md:justify-start justify-center"}>
                    <div className={"rounded-full md:w-64 w-48 h-48 md:h-64 shadow-2xl md:mr-16 -mr-8"}>
                        <Image src={ProfilePic} alt={"Profile Picture"} className={"rounded-full object-cover"}/>
                    </div>
                </div>
            </div>
        </>
    )
}