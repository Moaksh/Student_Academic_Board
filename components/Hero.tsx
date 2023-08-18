import Image from "next/image";
import pic from "@/assets/logo.png";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen relative sm:absolute">
                <div className="hero-content text-center align-middle content-center ">
                    <div className="w-full">
                        <center>
                        {/*<Image src={pic} className={"w-auto sm:w-1/3"} />*/}
                        </center>
                        <h1 className="text-6xl sm:text-9xl font-black">Student Academic Board</h1>
                        <div className="w-full">
                        <p className=" py-6">Your Vision, Our Mission: Empowering Academics, Together</p>
                        </div>
                        {/*<button className="btn btn-secondary hover:btn-primary ">Get Started</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;