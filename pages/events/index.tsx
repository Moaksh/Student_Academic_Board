import pic from "@/assets/maintenance.png";
import Image from "next/image";

const Index = () => {
    return (
        <div>
            <div className="hero min-h-screen" >
                <div className="hero-content text-center ">
                    <div className="max-w-lg">
                        <Image src={pic} className={"w-auto"} />
                        <h1 className="mb-5 text-5xl sm:text-9xl font-bold">Oops!</h1>
                        <h1 className="mb-5 text-3xl sm:text-5xl font-bold">Under Construction</h1>

                        <p className="mb-5 text-neutral-400">Sorry for the inconvenience. This page is under construction at the moment.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;