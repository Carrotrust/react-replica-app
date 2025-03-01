import { CiSearch } from "react-icons/ci"
import { FaGithub, FaReact } from "react-icons/fa"
import { ImBrightnessContrast } from "react-icons/im"
import { MdOutlineTranslate } from "react-icons/md"
import MenuSidebar from "./MenuSidebar"

const Navigation = () => {

    return (
        <nav className="flex w-screen bg-gray-700 fixed top-0 z-20 justify-between items-center h-16 p-6 ">
            <div className="flex items-center  flex-row">
                {/* Mobile Menu */}
                <MenuSidebar />

                {/* React icon and version */}
                <a href="https://react.dev" target="_blank">
                    <FaReact size={40} className="text-sky-400 cursor-pointer" />
                </a>
                <a href="https://react.dev/versions" target="_blank">
                    <p className="text-zinc-300 text-sm ml-2 hover:text-sky-400 cursor-pointer hover:underline">v19</p>
                </a>

            </div>
            {/* Input Container */}
            <div className="flex hidden md:block relative w-[45%] ml-4 ">
                <input type="text" className="text-white pr-10 pl-10 h-10 w-full rounded-2xl bg-gray-800 focus:outline-none"
                    placeholder="Search" />
                <CiSearch size={20} className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-300" />

            </div>
            {/* Learn,ref,com,blog, buttons */}
            <div className="ml-6 flex hidden lg:flex flex-row space-x-2 items-center justify-center">
                <a href="https://react.dev/learn" target="_blank">
                    <button className="text-white font-semibold p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600 ">
                        Learn

                    </button>
                </a>
                <a href="https://react.dev/reference" target="_blank">
                    <button className="text-white font-semibold p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600 ">
                        Reference

                    </button>
                </a>
                <a href="https://react.dev/community" target="_blank">
                    <button className="text-white font-semibold p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600 ">
                        Community

                    </button>
                </a>
                <a href="https://react.dev/blog" target="_blank">
                    <button className="text-white font-semibold p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600 ">
                        Blog

                    </button>
                </a>


            </div>
            {/* The Other Icons i.e Brightness, github etc */}
            <div className="flex items-center justify-center fkex-row ml-4 space-x-1">
                <button className="text-white  p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600 ">
                    <ImBrightnessContrast size={24} />
                </button>

                <a className="text-white  p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600" href="https://react.dev/translation" target="_blank">
                    <MdOutlineTranslate size={24} />
                </a>

                <a className="text-white p-3 cursor-pointer hover:border-none hover:rounded-full hover:bg-gray-600" href="https://github.com/facebook/react/releases" target="_blank">
                    <FaGithub size={24} />

                </a>
            </div>








        </nav>
    )
}

export default Navigation
