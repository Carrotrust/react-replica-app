import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"


const MenuSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            {/* Mobile Menu */}
            <button className="lg:hidden mr-4 text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {isOpen && (
                <div className="absolute overflow-y-scroll h-screen top-16 left-0 w-full  bg-gray-800 flex flex-col space-y-4 py-2 ">
                    <div className="flex flex-row items-center justify-center space-x-2 border-b border-slate-700">
                        <a href="https://react.dev/learn" target="_blank" className="text-white hover:bg-gray-600 p-3 rounded-full">
                            Learn
                        </a>
                        <a href="https://react.dev/reference" target="_blank" className="text-white hover:bg-gray-600 p-3 rounded-full">
                            Reference
                        </a>
                        <a href="https://react.dev/community" target="_blank" className="text-white hover:bg-gray-600 p-3 rounded-full">
                            Community
                        </a>
                        <a href="https://react.dev/blog" target="_blank" className="text-white hover:bg-gray-600 p-3 rounded-full">
                            Blog
                        </a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700 pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold ">GET STARTED</h3>
                        <a className="text-white font-semibold ">Quick Start</a>
                        <a className="text-white font-semibold ">Installation</a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700 pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold ">LEARN REACT</h3>
                        <a className="text-white font-semibold ">Describing the UI</a>
                        <a className="text-white font-semibold ">Adding Interactivity</a>
                        <a className="text-white font-semibold ">Managing State</a>
                        <a className="text-white font-semibold ">Escaping Hatches</a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700 pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold ">REACT API</h3>
                        <a className="text-white font-semibold ">Hooks</a>
                        <a className="text-white font-semibold ">Components</a>
                        <a className="text-white font-semibold ">APIs</a>
                        <a className="text-white font-semibold ">Legacy APIs</a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700 pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold ">REACT DOM API</h3>
                        <a className="text-white font-semibold ">Components</a>
                        <a className="text-white font-semibold ">APIs</a>
                        <a className="text-white font-semibold ">Client APIs</a>
                        <a className="text-white font-semibold ">Server APIs</a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700 pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold ">GET INVOLVED</h3>
                        <a className="text-white font-semibold ">React Community </a>
                    </div>

                    <div className="flex flex-col justify-start space-y-4 border-b border-slate-700  pl-4 pb-2">
                        <h3 className="text-zinc-400 font-bold">STAY INFORMED</h3>
                        <a className="text-white font-semibold ">React Blog </a>

                    </div>

                    <div className="h-16"></div>


                </div>

            )}


        </div>
    )
}

export default MenuSidebar
