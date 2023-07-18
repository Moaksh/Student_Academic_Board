import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { motion } from "framer-motion"


export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("clubs_&_chaps");

        const movies = await db
            .collection("Chapters")
            .find({})
            .sort({ name: 1 })
            .limit(25)
            .toArray();
        const clus = await db
            .collection("Clubs")
            .find({})
            .sort({ name: 1 })
            .limit(25)
            .toArray();

        return {
            props: { chapters: JSON.parse(JSON.stringify(movies)), clubs: JSON.parse(JSON.stringify(clus)) },
        };
    } catch (e) {
        console.error(e);
    }
}
const Clubs = ({ chapters, clubs }) => {
    return (
        <div className="p-2 sm:p-24">
            <h1 className={"font-black text-7xl sm:text-9xl pb-10"}>Clubs and Chapters</h1>
            <h1 className={"font-bold text-5xl px-6 "}>Clubs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {clubs.map(club => (
                    <div className="card  bg-base-100 shadow-xl">
                        {/*<figure className="px-10 pt-10">*/}
                        {/*    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                        {/*</figure>*/}
                        <div className="card-body items-center text-center">
                            <img src={club.logo} alt={club.name} className={"w-40 rounded-2xl "}/>
                            <h2 className="card-title pb-1">{club.name}</h2>
                            {/*<p className={"text-left"}>{club.mission}</p>*/}
                            {/*<Link href={"/clubs-and-chapters/"+club.name} className={"btn btn-outline"}>asd</Link>*/}
                            <div className="card-actions">
                                <label htmlFor={club._id} className="btn btn-outline">View More</label>
                                <input type="checkbox" id={club._id} className="modal-toggle" />
                                <label htmlFor={club._id} className="modal cursor-pointer">
                                    <label className="modal-box relative" htmlFor="">
                                        <h3 className="text-lg font-bold">{club.name}</h3>
                                        <p className="py-4 text-left">{club.description}</p>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className={"font-bold text-5xl px-6 "}>Chapters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {/* -- Clubs & Chapter 1 -- */}

                {chapters.map(club => (

                    <div className="card  bg-base-100 shadow-xl">
                        {/*<figure className="px-10 pt-10">*/}
                        {/*    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                        {/*</figure>*/}
                        <div className="card-body items-center text-center">
                            <img src={club.logo} alt={club.name} className={"w-40 rounded-2xl "}/>
                            <h2 className="card-title pb-1">{club.name}</h2>
                            {/*<p className={"text-left"}>{club.mission}</p>*/}
                            {/*<Link href={"/clubs-and-chapters/"+club.name} className={"btn btn-outline"}>asd</Link>*/}
                            <div className="card-actions">
                                <label htmlFor={club._id} className="btn btn-outline">View More</label>
                                <input type="checkbox" id={club._id} className="modal-toggle" />
                                <label htmlFor={club._id} className="modal cursor-pointer">
                                    <label className="modal-box relative" htmlFor="">
                                        <h3 className="text-lg font-bold">{club.name}</h3>
                                        <p className="py-4 text-left">{club.description}</p>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
                {/*/!* -- Clubs & Chapter 2 -- *!/*/}
                {/*<div className="card w-96 bg-base-100 shadow-xl">*/}
                {/*    <figure className="px-10 pt-10">*/}
                {/*            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                {/*    </figure>*/}
                {/*        <div className="card-body items-center text-center">*/}
                {/*            <h2 className="card-title">CodeChef</h2>*/}
                {/*             <p>CodeChef is a student organization that helps students improve their programming skills through competitions and events like workshops, hackathons, and coding boot camps.</p>*/}
                {/*             <div className="card-actions">*/}
                {/*                     <label htmlFor="my-modal-2" className="btn btn-secondary">View More</label>*/}
                {/*                     <input type="checkbox" id="my-modal-2" className="modal-toggle" />*/}
                {/*                     <label htmlFor="my-modal-2" className="modal cursor-pointer">*/}
                {/*                             <label className="modal-box relative" htmlFor="">*/}
                {/*                                     <h3 className="text-lg font-bold">CodeChef</h3>*/}
                {/*                                     <p className="py-4">CodeChef is a student organization that is dedicated to enhancing students' programming skills. The organization achieves this goal by providing students with various opportunities to learn, practice, and compete. These opportunities include workshops, hackathons, and coding boot camps. During these events, students can connect with like-minded individuals, learn new techniques, and receive feedback on their work. Additionally, the organization offers online resources such as tutorials and practice problems to further support students' learning. CodeChef is committed to helping students develop the skills they need to succeed in the world of programming and technology.</p>*/}
                {/*                             </label>*/}
                {/*                     </label>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*</div>*/}
                {/*    /!* -- Clubs & Chapter 3 -- *!/*/}
                {/*    <div className="card w-96 bg-base-100 shadow-xl">*/}
                {/*            <figure className="px-10 pt-10">*/}
                {/*                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                {/*            </figure>*/}
                {/*            <div className="card-body items-center text-center">*/}
                {/*                    <h2 className="card-title">Clubs & Chapter 1 Name</h2>*/}
                {/*                    <p>Clubs & Chapter Description Goes Here</p>*/}
                {/*                    <div className="card-actions">*/}
                {/*                            <label htmlFor="my-modal-3" className="btn btn-secondary">open modal</label>*/}
                {/*                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />*/}
                {/*                            <label htmlFor="my-modal-3" className="modal cursor-pointer">*/}
                {/*                                    <label className="modal-box relative" htmlFor="">*/}
                {/*                                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>*/}
                {/*                                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>*/}
                {/*                                    </label>*/}
                {/*                            </label>*/}
                {/*                    </div>*/}
                {/*            </div>*/}
                {/*    </div>*/}
            </div>
        </div>
    )
}
export default Clubs;
