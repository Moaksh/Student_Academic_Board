

const data = [
    {title: "The Shawshank Redemption", des: "asdasdasdasd"},
    {title: "The as Redemption", des: "das123"},
    {title: "The Shawshank 142", des: "asdf"},
    {title: "The 113 Redemption", des: "affsa"},

]

const Special = () => {

    return (

        <div className={"min-w-screen"}>
            <h1 className={"flex justify-center font-bold text-5xl pb-6"}>Specialisations</h1>
            <div className="flex justify-center">
                <div className="carousel carousel-end w-3/4 rounded-box ">
                    {data.map(item => (
                    <div className="carousel-item p-2">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body items-center">
                                <h2 className="card-title ">{item.title}</h2>
                                <p>Ai bleh bleh bleh bleh bleh bleh bleh bleh elvh</p>

                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Special;