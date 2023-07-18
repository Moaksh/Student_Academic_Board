import Image from "next/image";
import pic from "../assets/club&chap.jpg";
 const CcHome = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={pic}
                    width={500}
                    height={500}
                    // className=" rounded-lg shadow-2xl img"
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Clubs and Chapters</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi .
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <a href="/clubs-and-chapters"><button className="btn btn-outline">View More</button></a>
                </div>
            </div>
        </div>
    );
};

export default CcHome;