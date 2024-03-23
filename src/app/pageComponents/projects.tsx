import Image from "next/image";
import pattern from "../../../public/Images/pattern.png"

export default function Projects(){

    const projectNames = [
        {name : "KingCurd Web", image : pattern, github : "https://github.com/NirajanMahato/ComixNook-Web"},
        {name : "KingCurd Mobile", image : pattern, github : "https://github.com/NirajanMahato/ComixNook-prj"},
        {name : "Portfolio", image : pattern, github : "https://github.com/NirajanMahato/Nirajan-s-Portfolio"},
    ]

    return(
        <>
            <div id={"projects"} className={"md:h-[38rem] h-[88rem] md:px-16 px-6 flex flex-col items-center"}>
                <h1 className={"text-4xl font-semibold"}>Projects</h1>
                <h1 className={"gilroy-medium text-gray-500"}>Most Recent Work</h1>
                <div className={"w-full mt-10 md:px-5 flex md:flex-row flex-col md:gap-0 gap-12 justify-between"}>
                    {projectNames.map((i)=>(
                        <div key={i.name} className={"md:w-80 rounded-3xl px-7 py-6 shadow-2xl flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-500"}>
                            <Image src={i.image} alt={"image"} className={"rounded-3xl md:h-64 h-52 object-cover"}/>
                            <h1 className={"md:text-xl text-lg text-left w-full pl-2 font-semibold mt-3"}>{i.name}</h1>
                            <div className={"w-full px-3 mt-3 font-semibold flex justify-between"}>
                                <a className={"rounded-xl md:h-10 h-9 md:w-28 w-20 md:-mt-1 -mt-2 md:text-sm text-xs text-white shadow-xl bg-gray-900 flex justify-center items-center cursor-pointer"} href={i.github} target={"_blank"}>GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}