import React from "react";

const NewsFeed = () => {
    return (
        <div className="mt-5 mx-auto w-[80%] lg:w-full bg-zinc-800 rounded-lg">
            <div className="flex">
                <button type="button" className="bg-zinc-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-10 w-10 rounded-full mt-5 ml-5" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </button>
                <div className="mt-5 ml-3 text-white font-medium">
                    <div>Nick Clone</div>
                    <div className="text-xs"> 1 hour </div>
                </div>
            </div>
            <div className="cap m-4 text-base text-white">
                Hello World!
            </div>
            <div>
                <img className="w-full" src="https://www.topcv.vn/v3/images/seo/cv-la-gi-hinh-1.png" alt="" />
            </div>
            <div className="flex m-4 pb-2">
                <div className="w-1/3 text-center flex ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-3 text-zinc-400">
                        Like
                    </div>
                </div>
                <div className="w-1/3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <div className="ml-3 text-zinc-400">
                        comment
                    </div>
                </div>
                <div className="w-1/3 flex ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <div className="ml-3 text-zinc-400">
                        Share
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;