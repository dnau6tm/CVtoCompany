import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [noti, useNoti] = useState(true);
    const [mess, useMess] = useState(true);
    const [sign, useSign] = useState(true);
    const [create, useCreate] = useState(true);
    const ShowNoti = () => {
        useNoti(!noti);
        useMess(true);
        useSign(true);
        useCreate(true);
    }
    const ShowMess = () => {
        useMess(!mess);
        useNoti(true);
        useSign(true);
        useCreate(true);
    }
    const ShowSign = () => {
        useSign(!sign);
        useMess(true);
        useNoti(true);
        useCreate(true);
    }
    const ShowCreate = () => {
        useCreate(!create);
        useSign(true);
        useMess(true);
        useNoti(true);
    }

    return (
        <div className="sticky top-0 z-10">
            <nav className="bg-zinc-800 h-14 border-b border-gray-500">
                <div className="max-w-7xl sm:ml-3">
                    <div className="flex items-center justify-between h-16">                   
                            <div className="flex w-1/4 flex items-center hidden md:block">
                                <div className="h-9 w-9 cursor-pointer">
                                    <img className="h-9 w-9" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                                </div>
                                {/* Search Bar */}
                                <div className="absolute top-[13px] left-12 h-10 w-[17%] flex  cursor-pointer xl:bg-zinc-700 rounded-[20px] sm:ml-2 sm:mr-2">
                                    <div className="h-9 w-9 bg-zinc-700 sm:ml-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-zinc-400 m-auto mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Finding on Facebook" className="bg-zinc-700 sm:ml-2 w-[90%] rounded-[20px] hidden xl:block"/>
                                </div>
                            </div>
                            <div className="w-1/2 block sm:mx-auto">
                                <div className="flex justify-between h-full mx-auto">
                                    {/*-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <Link to="/" className="w-1/4 lg:w-1/5 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text" aria-current="page">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </Link>

                                    <a href="#" className="w-1/4 text-gray-300 lg:w-1/5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </a>

                                    <a href="#" className="w-1/4 text-gray-300 lg:w-1/5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>

                                    <a href="#" className="w-1/4 text-gray-300 lg:w-1/5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-1/4 text-gray-300 lg:w-1/5 hidden lg:block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        
                        <div className="flex justify-between w-1/4 inset-y-0 right-0 flex items-center pr-2 hidden sm:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/*-- Profile */}
                            <div className="ml-3 absolute top-2 right-60 hidden lg:block">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                    </button>
                                </div>
                            </div>
                            <button onClick={ShowCreate} type="button" className="h-10 w-10 bg-zinc-700 absolute top-2 right-40 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                <span className="sr-only">View Plus</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="White" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <button onClick={ShowMess} type="button" className="h-10 w-10 bg-zinc-700 absolute top-2 right-28 p-1 rounded-full text-gray-400 ml-3 hover:text-white focus:outline-none">
                                <span className="sr-only">View Message</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" viewBox="0 0 20 20" fill="White">
                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <button onClick={ShowNoti} type="button" className="h-10 w-10 bg-zinc-700 p-1 absolute top-2 right-16 rounded-full text-gray-400 ml-3 hover:text-white focus:outline-none">
                                <span className="sr-only">View notifications</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" viewBox="0 0 20 20" fill="White">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>

                            <button onClick={ShowSign} type="button" className="h-10 w-10 bg-zinc-700 p-1 absolute top-2 right-4 rounded-full text-gray-400 ml-3 hover:text-white focus:outline-none">
                                <span className="sr-only">More Detail</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto fill-white" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`w-1/2 lg:w-[30%] bg-zinc-800 absolute top-14 right-4 rounded-lg ${noti ? "hidden":"block"}`}>
                                <div className="flex h-12 bg-zinc-800 text-white px-4 py-3 mx-1 justify-between rounded-lg">
                                    <div className="text-center text-xl font-bold">
                                        Thong Bao
                                    </div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex h-8">
                                    <div className="bg-zinc-700 mx-3 px-3 leading-8 rounded-[12px]">
                                        All
                                    </div>
                                    <div className="bg-zinc-700 px-3 leading-8 rounded-[12px]">
                                        Chua Doc
                                    </div>
                                </div>
                                <div className="flex h-6 text-white text-md pt-2 px-3">
                                    <div className="">
                                        Now
                                    </div>
                                </div>
                                <ul className="mt-3 ml-3">
                                    <li className="h-16">
                                        <div className="h-16 flex">
                                            <div className="h-16 w-12">
                                                <img className="h-12 w-12 rounded-full" src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-1/272688172_701460017932776_1652495304611484013_n.jpg?stp=dst-jpg_p130x130&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BV5H6UrlXhIAX-phRli&_nc_ht=scontent.fsgn6-2.fna&oh=00_AT-HWkNWZfnTTFyWj0tSQYQCsE0y2yCJ5orBKR_n75fBsg&oe=624540A2" alt="" />
                                            </div>
                                            <div className="NotiInfor ml-3 text-zinc-400">
                                                thong bao!!!!
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={`w-1/2 lg:w-[30%] bg-zinc-800 absolute top-14 right-4 rounded-lg ${mess ? "hidden":"block"}`}>
                                <div className="h-16 flex mx-3 justify-between">
                                    <div className="loading-16 text-white text-xl font-bold my-auto">
                                        Messenger
                                    </div>
                                    <div className="h-16 flex space-x-3 text-zinc-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex mx-5 bg-zinc-700 h-8 mb-2 rounded-[15px]">
                                    <div className="p-auto text-zinc-300 m-auto mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <input className="w-full h-full bg-zinc-700 rounded-[15px]" type="text" placeholder="Finding in Mesenger" />
                                    </div>
                                </div>
                                <ul className="mt-3 ml-6">
                                    <li className="h-16">
                                        <div className="h-16 flex">
                                            <div className="h-16 w-12">
                                                <img className="h-12 w-12 rounded-full" src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-1/272688172_701460017932776_1652495304611484013_n.jpg?stp=dst-jpg_p130x130&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BV5H6UrlXhIAX-phRli&_nc_ht=scontent.fsgn6-2.fna&oh=00_AT-HWkNWZfnTTFyWj0tSQYQCsE0y2yCJ5orBKR_n75fBsg&oe=624540A2" alt="" />
                                            </div>
                                            <div className="NotiInfor ml-3 text-zinc-400">
                                                Tin Nhan!!!!
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={`w-1/2 lg:w-[30%] bg-zinc-800 absolute top-14 right-4 rounded-lg ${sign ? "hidden":"block"}`}>
                                <div className="flex h-20 border-b border-zinc-500 m-3">
                                    <div className="mx-1">
                                        <img className="h-16 w-16 rounded-full" src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/277551528_741482780597166_8930171787258576645_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oMkj1xXlxyEAX_203uj&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT9z_M2Vb2TcgCtP9NGTp6cy7DB-LszWaeGZEnCCNwZqiQ&oe=6245A900" alt="" />
                                    </div>
                                    <div className="text-white ml-2">
                                        <div>
                                            Nick Clone
                                        </div>
                                        <div className="text-zinc-400">
                                            Visit your personal page
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-zinc-500 mx-4 mb-2">
                                    <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 mx-auto mt-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-white ml-3">
                                        <div>
                                            Nick Clone
                                        </div>
                                        <div className="text-zinc-400 mb-2">
                                            Visit your personal page
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mx-4 text-white justify-between">
                                    <div className="flex">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="mt-2 ml-3">
                                            Setting and Privacy
                                        </div>
                                    </div>
                                    <div className="text-zinc-500 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex mx-4 text-white justify-between">
                                    <div className="flex">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="mt-2 ml-3">
                                            Help and Contact
                                        </div>
                                    </div>
                                    <div className="text-zinc-500 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex mx-4 text-white justify-between">
                                    <div className="flex">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>
                                        </div>
                                        <div className="mt-2 ml-3">
                                            Screen and Accessibility
                                        </div>
                                    </div>
                                    <div className="text-zinc-500 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex  mx-4 text-white">
                                    <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="mt-2 ml-3">
                                        Sign Out
                                    </div>
                                </div>
                                
                            </div>

                            <div className={`w-1/2 lg:w-[30%] bg-zinc-800 absolute top-14 right-4 rounded-lg ${create ? "hidden":"block"}`}>
                                <div className="text-xl font-bold text-white my-3 mx-4">
                                    Create
                                </div>
                                <div className="m-3 border-b border-zinc-500">
                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Post
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Post the article to the NewsFeed
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Articles in Group
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Share the articles in your group
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                News
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                You can share some pictures or write something
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Meeting
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Call Video with everyone, unlimited
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-white mx-3">
                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Page
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Connect to your customers or fans
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px]" viewBox="0 0 20 20" fill="white">
                                                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Advertisement
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Advertise for your company and your branch
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-[6px] bg-white rounded-full" viewBox="0 0 20 20" fill="zinc-700">
                                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Group
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Connect everyone having same hobby
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="white">
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Events
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Connect everyone by public or private events
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mx-1 mb-2">
                                        <div className="h-8 w-8 bg-zinc-700 mb-2 mt-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" viewBox="0 0 20 20" fill="white">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-white ml-2">
                                            <div>
                                                Article on Marketplace
                                            </div>
                                            <div className="text-zinc-500 text-sm">
                                                Sell for everybody in your comunity
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;