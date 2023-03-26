export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(club => {
        return {
            params: { id: club.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    // const id = data.map(club => {
    //     return {
    //        params:{ id: club.id.toString() }
    //     }
    // })
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    return {
        props: { club: data }
    }
}

const Club = ({ club }) => {

    return (
        <div className={"p-24"}>
            <h1 className={"font-black text-8xl pb-10"}>Hi, {club.name}</h1>
            <h1>{ club.name }</h1>
            {/*<p>{ club.email }</p>*/}
        </div>
    );
}
export default Club;