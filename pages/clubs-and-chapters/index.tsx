
export default function Home() {
    return (
        <div className="p-16">
                <h1 className={"font-black text-7xl pb-10"}>Clubs and Chapters</h1>
                <h1 className={"font-bold text-4xl px-6 "}>Chapters</h1>
                <div className="grid grid-cols-3 gap-4 p-6">
                    {/* -- Club & Chapter 1 -- */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                         </figure>
                        <div className="card-body items-center text-center">
                                <h2 className="card-title">Association For Computing Machinery</h2>
                                <p>The Association for Computing Machinery is a US-based international learned society for computing.</p>
                                <div className="card-actions">
                                        <label htmlFor="my-modal-1" className="btn btn-secondary">View More</label>
                                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                                        <label htmlFor="my-modal-1" className="modal cursor-pointer">
                                                <label className="modal-box relative" htmlFor="">
                                                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                </label>
                                        </label>
                                </div>
                        </div>
                    </div>

                    {/* -- Club & Chapter 2 -- */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Club & Chapter 1 Name</h2>
                                 <p>Club & Chapter Description Goes Here</p>
                                 <div className="card-actions">
                                         <label htmlFor="my-modal-2" className="btn btn-secondary">open modal</label>
                                         <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                                         <label htmlFor="my-modal-2" className="modal cursor-pointer">
                                                 <label className="modal-box relative" htmlFor="">
                                                         <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                                         <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                 </label>
                                         </label>
                                </div>
                            </div>
                    </div>
                        {/* -- Club & Chapter 3 -- */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                        <h2 className="card-title">Club & Chapter 1 Name</h2>
                                        <p>Club & Chapter Description Goes Here</p>
                                        <div className="card-actions">
                                                <label htmlFor="my-modal-3" className="btn btn-secondary">open modal</label>
                                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                                <label htmlFor="my-modal-3" className="modal cursor-pointer">
                                                        <label className="modal-box relative" htmlFor="">
                                                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                        </label>
                                                </label>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
    )
}
