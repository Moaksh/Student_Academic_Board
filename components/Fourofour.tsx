import Link from "next/link";
import {useEffect, useState} from "react";


const Fourofour = () => {

    return (
        <div>
            <div className="hero min-h-screen  relative">
                <div className="hero-content text-center align-middle content-center">
                <div className="w-full">
                    <h1 className="fourofour font-black">404</h1>
                    <div className="w-full">
                        <p className=" py-6">The page you're looking for is lost in cyberspace. We'll keep searching until we find it!</p>
                    </div>
                    <Link href={"./"}>
                    <button className="btn btn-secondary ">Homepage?</button>
                    </Link>
                </div>
             </div>
            </div>
        </div>
    );
};
export default Fourofour;