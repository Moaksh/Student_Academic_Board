import Image from "next/image";
import pic1 from "../assets/club&chap.jpg";
import pic2 from "../assets/DSC_0008.jpg";
import pic3 from "../assets/_DSC0014.jpg";
import pic4 from "../assets/DSC07542.jpg";
 const CcHome = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/*<Image*/}
                {/*    src={pic}*/}
                {/*    width={500}*/}
                {/*    height={500}*/}
                {/*    // className=" rounded-lg shadow-2xl img"*/}
                {/*    className="rounded-lg shadow-2xl"*/}
                {/*/>*/}
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
                    <h1 className="text-5xl font-bold">Clubs and Chapters</h1>
                    <p className="py-6">The Student Cabinet at Bennett University serves as a thriving hub for students interested in Computer Science and Engineering, offering a plethora of engaging opportunities beyond the traditional classroom setting. Students are encouraged to participate in various technical workshops, hackathons and seminars providing them with hands-on experience and a chance to apply their theoretical knowledge to practical projects. Additionally, the Student Cabinet organizes guest lectures and industry interaction sessions, inviting experts and professionals to share insights and experiences, thereby bridging the gap between academia and industry.
                        <br/><br/>The Cabinet's focus extends beyond technical skills, as it also nurtures students' personal development and leadership abilities. Through organizing events, managing club activities, and coordinating chapter initiatives, students gain valuable experience in teamwork, event management, and effective communication.
                    </p>

                    <a href="/clubs-and-chapters"><button className="btn btn-outline">View More</button></a>
                </div>
            </div>
        </div>
    );
};

export default CcHome;