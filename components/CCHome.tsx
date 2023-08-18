import Image from "next/image";
import pic1 from "../assets/club&chap.jpg";
import pic2 from "../assets/DSC_0008.jpg";
import pic3 from "../assets/_DSC0014.jpg";
import pic4 from "../assets/DSC07542.jpg";
 const CcHome = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="carousel carousel-center rounded-box max-w-lg shadow-2xl">
                    <div className="carousel-item w-fit">
                       <Image
                       src={pic1}
                       className={"w-fit"}
                       />
                    </div>
                    <div className="carousel-item w-fit">
                        <Image
                            src={pic2}
                            className={"w-fit"}
                        />
                    </div>
                    <div className="carousel-item w-fit">
                        <Image
                            src={pic3}
                            className={"w-fit"}
                        />
                    </div>
                    <div className="carousel-item w-fit">
                        <Image
                            src={pic4}
                            className={"w-fit"}
                        />
                    </div>

                </div>
                <div>
                    <h1 className="text-5xl font-bold">Clubs and Committees</h1>
                    <p className="py-6">The Student Academic Council consists of committees that focus on academic quality, student welfare, research and innovation, and events and activities. Each committee has specific responsibilities and works collaboratively to achieve the council's objectives. They provide a platform for student representation and advocacy, promote academic excellence and student welfare, and ensure that all areas receive adequate attention.
                    </p>

                    <a href="/clubs-and-committees"><button className="btn btn-outline">View More</button></a>
                </div>
            </div>
        </div>
    );
};

export default CcHome;