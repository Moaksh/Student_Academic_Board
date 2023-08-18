import pic from "@/assets/DSC07542.jpg";
import Image from "next/image";

const Index = () => {
    return (
        <div>
            <div className=" min-h-screen" >
                <div className="p-2 sm:p-24  ">
                  <h1 className={"font-black text-7xl sm:text-9xl "}>Events</h1>
                    <p className={"text-xl px-2"}>Here's what's Happening!</p>
                    <div className="divider"></div>
                    <div className={"ease-in-out duration-300 flex flex-col lg:flex-row lg:items-center hover:border-4 hover:shadow-xl p-6"}>
                        <div className={"py-2 lg:px-10 "}>
                            <div className="lg:text-center ">
                            <p>Tue</p>
                            <h1 className={"font-bold text-7xl"}>15</h1>

                            </div>

                        </div>
                        <div className=" lg:w-2/3 py-4 lg:py-0 lg:px-4 ">
                            <p className={"font-medium"}>September 22 @ 8:00 am - September 27  @ 5:00pm</p>
                            <h1 className={"font-bold text-3xl"}>Global AI</h1>
                        <p className={""}>The Global AI Summit 2024, with the theme "International Conference on Artificial Intelligence and Emerging Technology (AISUMMIT-2024)," will be hosted by Bennett University. The event is scheduled to take place from September 4th to 6th, 2024 at Bennett University. Researchers from all over the world who are interested in a wide range of areas, including Optimization, Artificial Intelligence, Computational Intelligence, Machine Learning, Evolutionary Computation, Cyber Security, Fuzzy Logic, Signal Processing Theory and methods, Blockchain, Cloud Computing, Fog Computing, Internet of Things, Wireless Sensor Networks, various disorders and diseases, and many others, are cordially invited to attend.</p>

                        </div>
                        <div className=" ">
                            <Image
                                src={pic}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className={"rounded-2xl shadow-2xl"}
                            />

                        </div>

                    </div>
                    <div className="divider"></div>

                    <div>
                        <h1 className={"font-black text-3xl py-4"}>Upcoming Events</h1>

                        <div className={"ease-in-out duration-300 flex flex-col lg:flex-row lg:items-center hover:border-4 hover:shadow-xl p-6"}>
                            <div className={"py-2 lg:px-10 "}>
                                <div className="lg:text-center ">
                                    <p>Tue</p>
                                    <h1 className={"font-bold text-7xl"}>28</h1>
                                </div>

                            </div>
                            <div className=" lg:w-2/3 py-4 lg:py-0 lg:px-4 ">
                                <p className={"font-medium"}>August 22 @ 8:00 am - August 27 @ 5:00pm (2024)</p>
                                <h1 className={"font-bold text-3xl"}>Global AI</h1>
                                <p className={""}>Orientation Week is a week-long event that takes place at the beginning of each semester. It is a week full of fun activities and events that help you get to know your fellow students and the campus. It is also a great opportunity to learn about the services and resources available to you as a student at the University of Toronto.</p>

                            </div>
                            <div className=" ">
                                <Image
                                    src={pic}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    className={"rounded-2xl shadow-2xl"}
                                />

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;