import {it} from "node:test";

const data = [
    {title: "The Shawshank Redemptionasdasdasdasdasdasdas", des: "asdasdasdasd"},
    {title: "The as Redemption", des: "das123"},
    ]

const Faq = () => {
    return (
        <div className={"grid justify-center gap-2"}>
            <h1 className={"text-center text-3xl font-bold"}>FAQ's</h1>
            {data.map(item => (
            <div tabIndex={0} className="  collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl ">
                    {item.title}
                </div>
                <div className="collapse-content">
                    <p>{item.des}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Faq;