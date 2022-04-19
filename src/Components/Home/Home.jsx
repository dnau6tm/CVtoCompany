import React from "react";
import Header from "../Header/Header";
import Caption from "./Caption/Caption";
import Extension from "./Extension/Extension";
import NewsFeed from "./NewsFeed/NewsFeed";
import Friends from "./Friends/Friends";

const Home = () => {
    return(
        <div className="bg-black">
        <Header />
        <div className="flex relative">
            <Extension className="sticky" />
            <div className="w-full lg:w-[40%] lg:mx-auto">
            <Caption />
            <NewsFeed />
            </div>
            <Friends />
        </div>
        
        </div>
    )
}

export default Home;