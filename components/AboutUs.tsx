import Image from 'next/image'
import pic from '../assets/team.jpeg';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen " id={"about-us"}>
            <div className="hero-content flex-col lg:flex-row">
                {/*<img src="https://images.unsplash.com/photo-1678649494696-63127b98d4bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" className="max-w-sm rounded-lg shadow-2xl"  />*/}
                <Image
                    src={pic}
                    width={500}
                    height={500}
                    className=" rounded-lg shadow-2xl"
                    // className={styles.glow}
                />

                <div>
                    <h1 className="text-5xl font-bold pt-10 sm:pt-0">About Us</h1>
                    <p className="py-6">We are a team of highly motivated professionals committed to empowering students and enriching their academic experience. Our mission is to develop a dynamic and inclusive educational environment that encourages innovation, creativity, and lifelong learning. We firmly believe that every student has the right to shape their educational path and that effective collaboration among students, faculty, and administration is essential to realizing this goal. In order to achieve our vision, we have implemented various initiatives and programs aimed at promoting academic excellence, supporting student well-being, and fostering community engagement. We are constantly seeking new ways to enhance our offerings and improve the overall educational experience for our students.
                    </p>
                    <a href="/about-us" ><button className="btn btn-outline">Read More</button></a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;