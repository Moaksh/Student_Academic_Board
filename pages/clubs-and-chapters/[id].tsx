import clientPromise from "@/lib/mongodb";

export const getStaticPaths = async () => {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    const data = JSON.parse(JSON.stringify(movies));

    const paths = data.map(club => {
        return {
            params: { id: club.title.toString()}
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
    const db = client.db("sample_mflix");

    const movies = await db
        .collection("movies")
        .find({title:id})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    return {
        props: { club: JSON.parse(JSON.stringify(movies))[0] },
    };

}

const Club = ({ club }) => {
    console.log("asd")
    console.log(club)
    return (
        <div className={"p-24"}>
            <h1 className={"font-black text-8xl pb-10"}>{club.title}</h1>
            <p>Rating: { club.imdb.rating }</p>
            <p>Votes: { club.imdb.votes }</p>
            <br/>
            <h1>{ club.fullplot }</h1>

        </div>
    );
}
export default Club;