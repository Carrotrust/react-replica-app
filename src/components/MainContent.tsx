import { BiNews } from "react-icons/bi"
import { FaChevronDown, FaFacebook, FaGithub, FaReact } from "react-icons/fa"
import { PiButterflyFill, PiGreaterThan } from "react-icons/pi"
import Carousel from "./Carousel"
import { FaMeta, FaXTwitter } from "react-icons/fa6"

const MainContent = () => {
    return (
        <main className="z-20 pt-20 overflow-x-hidden  min-h-screen max-w-screen bg-gray-700">
            {/* React icon and header  */}
            <div className="flex flex-col space-y-2 p-4  items-center border-b border-slate-300 justify-center w-full min-h-screen">
                <FaReact size={120} className="text-sky-400" />

                <h1 className="text-6xl font-bold text-white">
                    React
                </h1>

                <p className="text-white font-bold text-3xl">The library for web and native user interfaces</p>

                {/* buttons  */}
                <div className="flex mt-6 flex-col gap-4 items-center  md:flex-row space-x-2">
                    <a href="https://react.dev/learn" target="_blank">
                        <button className="text-black  font-bold p-4 cursor-pointer rounded-full bg-sky-400">
                            Learn React
                        </button>
                    </a>

                    <a href="https://react.dev/reference" target="_blank">
                        <button className="text-white cursor-pointer font-bold p-4 bg-transparent rounded-full border border-white ">
                            API Reference
                        </button>
                    </a>

                </div>

            </div>
            {/* New Page  */}
            {/* Upgrade Header  */}
            <div className="mt-20 p-4 flex flex-col lg:flex-row justify-center gap-4 w-full  pb-10 border-b border-slate-300  min-h-screen ">
                <div className="flex p-4 w-full lg:w-[50%] space-y-8 flex-col">
                    <h1 className="text-5xl text-white font-bold">Upgrade when the future is ready</h1>
                    <p className="text-white text-2xl font-semibold">React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.</p>

                    <p className="text-white text-2xl font-semibold" > The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.</p>

                    <a className="text-white inline-flex w-fit items-center space-x-2 hover:underline cursor-pointer py-2 px-4 w-auto border  border-slate-300 rounded-full">
                        <BiNews />
                        <span>Read more React news</span>
                        <PiGreaterThan />
                    </a>
                </div>
                {/* Latest News and the rest */}
                <div className="flex flex-col  w-full lg:w-[50%]">
                    <div className="flex items-center gap-2">
                        <FaChevronDown className="text-zinc-300" />
                        <h1 className="text-zinc-300 text-xl font-bold ">
                            Latest React News
                        </h1>
                    </div>
                    {/* React 19 React Compiler blogs container  */}
                    <div className="flex flex-col gap-4 md:flex-row p-6 md:space-x-2 w-full">
                        {/* React 19  */}
                        <a className="flex flex-col justify-between cursor-pointer p-4 border border-slate-300 h-48 w-full md:w-[50%] rounded-xl">
                            <h2 className="text-white font-bold text-3xl hover:underline">React 19</h2>

                            <div className="flex items-center gap-2">
                                <BiNews size={24} className="text-zinc-300" />
                                <p className="text-zinc-300">December 05, 2024</p>
                            </div>
                        </a>

                        {/* React Compiler  */}
                        <a className="flex flex-col justify-between cursor-pointer p-4 border border-slate-300 h-48 w-full md:w-[50%] rounded-xl">
                            <h2 className=" font-bold top-2 text-white text-2xl hover:underline">
                                React Compiler Beta Release and Roadmap
                            </h2>

                            <div className=" bottom-4 flex items-center gap-2">
                                <BiNews size={24} className="text-zinc-300" />
                                <p className="text-zinc-300">October 21, 2024</p>
                            </div>

                        </a>
                    </div>

                    {/* React Conf & React 19 RC  */}
                    <div className="flex flex-col  md:flex-row gap-4 p-6 md:space-x-2 w-full">
                        <a className="flex flex-col justify-between cursor-pointer p-4 border border-slate-300 h-40 w-full md:w-[50%] rounded-xl">
                            <h2 className=" top-3 text-white font-bold text-2xl hover:underline">React Conf 2024 Recap</h2>

                            <div className="flex items-center gap-2">
                                <BiNews size={24} className="text-zinc-300" />
                                <p className="text-zinc-300">May 22, 2024</p>
                            </div>
                        </a>

                        {/* React 19 RC */}
                        <a className="flex flex-col justify-between cursor-pointer p-4 border border-slate-300 h-40 w-full md:w-[50%] rounded-xl">
                            <h2 className=" top-4 text-white font-bold text-3xl hover:underline">React 19 RC</h2>

                            <div className=" bottom-4 flex items-center gap-2">
                                <BiNews size={24} className="text-zinc-300" />
                                <p className="text-zinc-300">April 25, 2024</p>
                            </div>
                        </a>

                    </div>


                </div>

            </div>
            {/* New Page  */}
            {/* Join a Comm, and carousel section  */}
            <div className="w-full h-auto flex flex-col gap-10 items-center pt-20">
                {/* Join a Comm Header  */}
                <h2 className="text-5xl text-white p-2  font-bold">
                    Join a community <br />
                    <span className="md:inline-block md:pl-[5rem]">of millions</span>
                </h2>

                <p className="text-white text-center p-2 text-xl font-semibold">
                    You're not alone. Two million developers from all over the world visit the React <br /> docs every month. React is something that people and teams can agree on.

                </p>

                {/* Images  */}
                <Carousel />

                <p className="text-white text-center p-2 text-xl font-semibold">
                    This is why React is more than a library, an architecture, or even an ecosystem. <br /> React is a community. It's a place where you can ask for help, find opportunities, <br /> and meet new friends. You will meet both developers and designers, beginners <br /> and experts, researchers and artists, teachers and students. Our backgrounds <br /> may be very different, but React lets us all create user interfaces together.
                </p>
                {/* react logo welcome to... */}
                <div className=" w-full justify-center flex flex-col gap-8 items-center pt-25">
                    <FaReact size={120} className="text-sky-400" />

                    <h1 className="text-5xl font-bold text-white">Welcome to the <br />
                        <span className="-ml-5 p-2">React community</span>
                    </h1>

                    <a className="cursor-pointer">
                        <button className="cursor-pointer rounded-full py-3 px-5 bg-sky-400 text-black text-lg font-bold">
                            Get Started
                        </button>
                    </a>
                </div>
                {/* Last Section, meta open ..... */}
                <div className="flex min-h-screen w-full pt-25 px-12 ">
                    <div className="flex flex-col md:flex-row gap-15 md:gap-60">
                        {/* a tag, p tag, button container  */}
                        <div className="flex order-1 md:order-none flex-col gap-3">
                            <a className="flex items-center gap-1 cursor-pointer ">
                                <FaMeta className="text-sky-500" />
                                <h3 className="text-white text font-bold ">Meta Open Source</h3>
                            </a>

                            <p
                                className="text-white text-xs">Copyright &#169; Meta Platforms, Inc
                            </p>

                            <button className="text-white w-fit text-xs cursor-pointer hover:underline">
                                uwu?
                            </button>
                        </div>
                        {/* Learn react, Community.. etc container */}
                        <div className="flex order-2 md:order-none flex-col">
                            <a href="https://react.dev/learn" target="_blank">
                                <h1 className="text-white hover:underline cursor-pointer font-bold text-xl ">Learn React</h1>
                            </a>
                            <ul className="flex mt-4 flex-col mb-12 gap-2">
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a href="https://react.dev/learn" target="_blank">
                                        Quick Start
                                    </a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>
                                        Installation
                                    </a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>
                                        Describing the UI
                                    </a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Adding Interactivity</a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Managing State</a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Escape Hatches</a>
                                </li>
                            </ul>

                            <a href="https://react.dev/community" target="_blank">
                                <h1 className="text-white hover:underline cursor-pointer font-bold text-xl ">Community</h1>
                            </a>
                            <ul className="flex mt-4 flex-col gap-2">
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Code of Conduct</a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Meet the Team</a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Docs Contributors</a>
                                </li>
                                <li className="text-white text-sm hover:underline cursor-pointer">
                                    <a>Acknowledgements</a>
                                </li>


                            </ul>

                        </div>
                        {/* API Reference and More..  */}
                        <div className="flex order-3 md:order-none flex-col">
                            <div className="flex flex-col h-[73%] justify-between">
                                <div className="flex flex-col">
                                    <a href="https://react.dev/reference" target="_blank">
                                        <h1 className="text-white hover:underline cursor-pointer font-bold text-xl ">API Reference</h1>
                                    </a>
                                    <ul className="mt-4 flex gap-2 flex-col">
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>React APIs</a>
                                        </li>
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>React DOM APIs</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="text-white font-bold text-xl">More</h1>
                                    <ul className="mt-4 flex gap-2 flex-col">
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>Blog</a>
                                        </li>
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>React Native</a>
                                        </li>
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>Privacy</a>
                                        </li>
                                        <li className="text-white text-sm hover:underline cursor-pointer">
                                            <a>Terms</a>
                                        </li>

                                    </ul>


                                </div>

                            </div>
                            {/* facebook, twitter, git icons  */}
                            <div className="flex mt-10 flex-row gap-1">
                                <a className="cursor-pointer">
                                    <FaFacebook className="text-white" size={25} />
                                </a>
                                <a className="cursor-pointer" >
                                    <FaXTwitter className="text-white" size={25} />
                                </a>
                                <a className="cursor-pointer text-white">
                                    <PiButterflyFill className="text-white " size={25} />
                                </a>
                                <a className="cursor-pointer">
                                    <FaGithub className="text-white " size={25} />
                                </a>


                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </main>
    )
}

export default MainContent
