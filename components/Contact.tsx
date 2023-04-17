import Image from "next/image";
import pic from '../assets/insta.jpg';

const Contact = () => {
    return (
        <div className="hero min-h-screen pt-16">
            <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold">Contact Us</h1>
               <div className={"flex"}>
                   <div className={"flex-col p-4 mt-4 "}>
                       <Image src={pic} alt="asd" className={"rounded-3xl"}/>
                   </div>
                   <div className={"flex-col p-4"}>
                       <Image src={pic} alt="asd" className={"rounded-3xl"}/>
                   </div>
                   <div className={"flex-col p-4 mt-4 "}>
                       <Image src={pic} alt="asd" className={"rounded-3xl"}/>
                   </div>

               </div>
            </div>
        </div>


    );
};

export default Contact;