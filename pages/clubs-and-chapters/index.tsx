
export default function Home() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {/* -- Club & Chapter 1 -- */}
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
            <div className="modal">
            <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Club & Chapter 1 Name</h3>
            <p className="py-4">Club & Chapter Detailed Description Goes Here</p>
            </div>
            </div>
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
            <label htmlFor="my-modal-3" className="btn btn-secondary">open modal</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Club & Chapter 1 Name</h3>
            <p className="py-4">Club & Chapter Detailed Description Goes Here</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
