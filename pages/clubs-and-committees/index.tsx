import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { motion } from "framer-motion"


export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("clubs_&_chaps");
        const clus = await db
            .collection("Clubs")
            .find({})
            .sort({ name: 1 })
            .limit(25)
            .toArray();

        return {
            props: { clubs: JSON.parse(JSON.stringify(clus)) },
        };
    } catch (e) {
        console.error(e);
    }
}
const Clubs = ({ clubs }) => {
    return (
        <div className="p-2 sm:p-24">
            <h1 className={"font-black text-5xl sm:text-9xl pb-10"}>Clubs and Committees</h1>
            <h1 className={"font-bold text-5xl px-6 "}>Clubs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {clubs.map(club => (
                    (club.type === "club") ?(
                    <div className="card  bg-base-100 shadow-xl">
                        {/*<figure className="px-10 pt-10">*/}
                        {/*    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                        {/*</figure>*/}
                        <div className="card-body items-center text-center">
                            <img src={club.logo} alt={club.name} className={"w-40 rounded-2xl "}/>
                            <h2 className="card-title pb-1">{club.name}</h2>
                            {/*<p className={"text-left"}>{club.mission}</p>*/}
                            {/*<Link href={"/clubs-and-committees/"+club.name} className={"btn btn-outline"}>asd</Link>*/}
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
                    ) : null
                ))}
            </div>
            <h1 className={"font-bold text-5xl px-6 "}>Chapters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

                {clubs.map(club => (
                    (club.type === "chapter") ?(

                    <div className="card  bg-base-100 shadow-xl">
                        {/*<figure className="px-10 pt-10">*/}
                        {/*    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                        {/*</figure>*/}
                        <div className="card-body items-center text-center">
                            <img src={club.logo} alt={club.name} className={"w-40 rounded-2xl "}/>
                            <h2 className="card-title pb-1">{club.name}</h2>
                            {/*<p className={"text-left"}>{club.mission}</p>*/}
                            {/*<Link href={"/clubs-and-committees/"+club.name} className={"btn btn-outline"}>asd</Link>*/}
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
                    ) : null
                ))}
            </div>
            <h1 className={"font-bold text-5xl px-6 "}>Committees</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {clubs.map(club => (
                    (club.type === "committee") ?(

                        <div className="card  bg-base-100 shadow-xl">
                            {/*<figure className="px-10 pt-10">*/}
                            {/*    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />*/}
                            {/*</figure>*/}
                            <div className="card-body items-center text-center">
                                <img src={club.logo} alt={club.name} className={"w-40 rounded-2xl "}/>
                                <h2 className="card-title pb-1">{club.name}</h2>
                                {/*<p className={"text-left"}>{club.mission}</p>*/}
                                {/*<Link href={"/clubs-and-committees/"+club.name} className={"btn btn-outline"}>asd</Link>*/}
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
                    ) : null
                ))}
            </div>
        </div>
    )
}
export default Clubs;
