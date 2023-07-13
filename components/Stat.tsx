
const Stat = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-screen text-black">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="w-48 border-2 border-accent/5 bg-accent-content/40 shadow-2xl p-6 rounded-2xl">
                        <div className="flex items-center">
                            <span className="ml-2 text-sm font-medium text-accent ">Followers</span>
                        </div>
                        <span className="block text-4xl font-semibold mt-4 text-accent">1,320</span>
                        <div className="flex text-xs mt-3 font-medium">
                            <span className="text-green-500">+8%</span>
                            <span className="ml-1 text-accent">last 14 days</span>
                        </div>
                    </div>
                    <div className="w-48 border-2 border-accent/5 bg-accent-content/40 shadow-2xl p-6 rounded-2xl">
                        <div className="flex items-center">

                            <span className="ml-2 text-sm font-medium text-accent">Likes</span>
                        </div>
                        <span className="block text-4xl font-semibold mt-4 text-accent">3,814</span>
                        <div className="flex text-xs mt-3 font-medium">
                            <span className="text-green-500">+12%</span>
                            <span className="ml-1 text-accent">last 14 days</span>
                        </div>
                    </div>
                    <div className="w-48 border-2 border-accent/5 bg-accent-content/40 shadow-2xl p-6 rounded-2xl">
                        <div className="flex items-center">
                            <span className="ml-2 text-sm font-medium text-accent">Comments</span>
                        </div>
                        <span className="block text-4xl font-semibold mt-4 text-accent">264</span>
                        <div className="flex text-xs mt-3 font-medium">
                            <span className="text-red-500">-2%</span>
                            <span className="ml-1 text-accent">last 14 days</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stat;