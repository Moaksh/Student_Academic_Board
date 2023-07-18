
const Stat = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-screen text-black">

                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-title">Total Students</div>
                        <div className="stat-value">10,000</div>
                        {/*<div className="stat-desc">Jan 1st - Feb 1st</div>*/}
                    </div>

                    <div className="stat">
                        <div className="stat-title">Clubs and chapters</div>
                        <div className="stat-value text-center">20+</div>
                        {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stat;