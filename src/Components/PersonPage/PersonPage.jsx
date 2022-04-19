import React from "react";
import Header from "../Header/Header";

const PersonPage = () => {
    return (
        <div className="">
            <Header />
            <div className="bg-white w-full">
                <div className="flex h-32 mt-7 bg-teal-500 text-white justify-center rounded-lg">
                    <div className=" w-40 relative">
                        <img className="rounded-full absolute -top-3" src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.6435-9/186508029_4180185262065689_5800692884726589621_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=SL4eGBNOwJUAX-d_wTg&_nc_ht=scontent.fsgn6-2.fna&oh=00_AT_oFnARXWfSuIAnQKESmn8KHV6YInkehhqHIq0C_mOzeg&oe=626C2424" alt="" />
                    </div>
                    <div className="ml-8">
                        <div className="text-2xl font-semibold mb-3 mt-2">
                            TRAN MINH QUANG (Software Engineer)
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[4px]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <h2 className="ml-3">
                                sdjhajsdh@gmail.com
                            </h2>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[4px]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <h2 className="ml-3">
                                0368888888
                            </h2>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[4px]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <h2 className="ml-3">
                                HCM city
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex text-black">
                    <div className="w-1/2 pl-3 mt-5">
                        <div className="mb-3">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <p className="ml-3 text-lg font-semibold">
                                    Education
                                </p>
                            </div>
                            <div>
                                University of Imformation Technology (UIT)
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                <div className="ml-3 text-lg font-semibold">
                                    Programming Language
                                </div>
                            </div>
                            <ul>
                                <li>
                                    HTML/CSS/JS
                                </li>
                                <li>
                                    ReactJS
                                </li>
                                <li>
                                    NodeJS
                                </li>
                            </ul>
                        </div>

                        <div className="mb-3">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                </svg>
                                <p className="ml-3 text-lg font-semibold">
                                    Foreign Language Proficiency
                                </p>
                            </div>
                            <div>
                                English : Ielts 5.5
                            </div>
                        </div>

                    </div>
                    <div className="w-1/2 border-l border-black pl-3">
                        <div className="ml-3 text-xl font-bold">
                            Typical Projects
                        </div>
                        <div>
                            <div>
                                Book Store
                            </div>
                            <div>
                                GitBub: iqueikj.github.io.com
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>

                            </div>
                        </div>

                        <div>
                            <div>
                                Book Store
                            </div>
                            <div>
                                GitBub: iqueikj.github.io.com
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>

                            </div>
                        </div>
                        
                        <div>
                            <div>
                                Book Store
                            </div>
                            <div>
                                GitBub: iqueikj.github.io.com
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>
                                <div className="w-[30%]">
                                    <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/277589002_5207359049348300_2516344424848380009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=sA_FWNRdY1cAX_7scR3&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_txSAJ_3QOIqeyW1bByOvx-tpc6Z_YTc3ZayRpXUro5g&oe=624D894A" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PersonPage;