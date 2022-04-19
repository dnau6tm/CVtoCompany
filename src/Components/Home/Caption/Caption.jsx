import React from "react";
import { Link } from "react-router-dom";

const Caption = () => {
    return (
        <div className="my-5 mx-auto rounded-lg w-[80%] lg:w-full h-32 bg-zinc-800 relative mt-5">
            <div className="h-1/2 w-[93%] mx-4 absolute flex border-b border-gray-400">
                <div>
                    <Link to="/personal" className="bg-gray-800 flex text-sm rounded-full mt-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </Link>
                </div>
                <div className="w-full">
                    <input type="text" className="mt-4 ml-3 mr-6 w-[97%] h-9 rounded-[25px] bg-zinc-600 text-justify" placeholder="  What are you thinking about?"/>
                </div>
            </div>
            <div className="h-1/2 w-full ml-6 absolute flex top-14 mt-4 space-x-8 sm:space-x-0">
                <div className="flex w-1/4 my-auto">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-rose-600" viewBox="0 0 20 20" fill="Red">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                    </div>
                    <div className="text-center mt-1 ml-2 text-base text-zinc-500">
                        Stream
                    </div>
                </div>
                <div className="flex w-1/3 my-auto">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center mt-1 ml-2 text-base text-zinc-500">
                        Pictures/Videos
                    </div>
                </div>
                <div className="flex w-1/3 my-auto">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-amber-500 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-center mt-1 ml-2 text-base text-zinc-500 hidden sm:block">
                        Emotion/Action
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Caption;