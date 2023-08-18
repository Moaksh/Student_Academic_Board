import clientPromise from "@/lib/mongodb";

export const getStaticPaths = async () => {
    const client = await clientPromise;
    const db = client.db("clubs_&_chaps");

    const movies = await db
        .collection("Chapters")
        .find({})
        .sort({ metacritic: -1 })
        .limit(80)
        .toArray();

    const data = JSON.parse(JSON.stringify(movies));

    const paths = data.map(club => {
        return {
            params: { id: club.name.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const client = await clientPromise;
    const db = client.db("clubs_&_chaps");

    const movies = await db
        .collection("Chapters")
        .find({name:id})
        .sort({ metacritic: -1 })
        .limit(1)
        .toArray();

    return {
        props: { club: JSON.parse(JSON.stringify(movies))[0] },
    };

}

const Club = ({ club }) => {
    return (
        <div className={"p-24"}>
            <h1 className={"font-black text-8xl pb-10"}>{club.name}</h1>
            <p className={"py-2"}><b>Description</b>: { club.description }</p>
            <p><b>Mission</b>: { club.mission }</p>
            <br/>
            {/*<h1>{ club.fullplot }</h1>*/}

        </div>
    );
}
export default Club;