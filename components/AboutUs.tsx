import Image from 'next/image'
import pic from '../assets/team.jpeg';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen ">
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
                    <p className="py-6">With the tremendous growth of the School of Computer Science and Technology over the past year, the need for establishing a vision for the future, a structure for functioning and a single student body of representation became necessary. Introducing to you the Student Cabinet of the School of CSET.
<br/><br/>
                        With 23 technical clubs and chapters under its umbrella, the Student Cabinet works towards  the holistic growth of the student community to uphold the spirit of cooperation, fraternity, and social bonding among all students of the School, and provide a platform for organising themselves, undertaking holistic growth, and organising creative activities for the all-rounded mental, physical, social and cultural growth of students.</p>
                    <a href="/job_descriptions" ><button className="btn btn-outline">Read More</button></a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;