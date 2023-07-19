import {useState} from "react";
import {sendContactForm} from "../lib/api";

const initValues = {
    name:"",
    email:"",
    subject:"",
    message:""
};

const initState = {values:initValues};



const Grievance = () => {
    const [state, setState ] = useState(initState);
    const { values,isLoading, error }  = state;
    const handleChange = ({ target }) =>
        setState((prev) =>({
        ...prev,
        values:{
            ...prev.values,
            [target.name]: target.value,
        },
    }));
    const onSubmit = async () => {
        setState((prev) =>({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
        } catch (error) {
               setState((prev) =>({
                   ...prev,
                   isLoading: false,
                   error: error.message,
                }));
        }
    }

    return (
        <div className={"hero min-h-screen"} id={"grievances"}>
            <div className={"sm:w-10/12"}>
                <div className={"text-left px-4"}>
                    <h1 className={"font-bold text-5xl"}>Grievances</h1>
                    <p className={"py-6"}>Ensuring a transparent and student-centric approach, we actively encourage students to voice their grievances related to the student cabinet, and our dedicated team is committed to swiftly and diligently resolving any issues to enhance the overall student experience.</p>
                </div>
                <div className={"flex lg:flex-row flex-col"}>
                <div className={"card flex-shrink-0 lg:w-1/2 w-full "}>
                    <div className={"card-body"}>
                        <form action="">
                            <div className={"flex lg:flex-row flex-col pb-2"}>
                            <div className="form-control flex-auto lg:pr-4 ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name="name" value={values.name} onChange={handleChange} required minLength="3" maxLength="10"/>
                            </div>
                            <div className="form-control flex-auto">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered flex-auto" name="email" value={values.email} onChange={handleChange} required  />
                            </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" name="subject" value={values.subject} onChange={handleChange} required minLength="3" maxLength="50"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-60 max-h-60" placeholder="Type here..." name="message" value={values.message} onChange={handleChange} required ></textarea>

                            </div>
                            <div className="form-control mt-6">



                                <button type="submit" className=" btn btn-outline max-w-xs" disabled={!values.name || !values.email || !values.message || !values.subject} onClick={onSubmit}>{isLoading ? <>Loading..</> : <>Send</>}</button>
                                {error && <p className={"text-red-500 py-2"}>{error}</p>}
                            </div>
                        </form>
                    </div>
                </div>
                    <div className={" content-center items-center justify-center lg:w-1/2 w-full hidden lg:flex"}>
                        <div className={"grid grid-cols-1 py-10"}>

                                    <div className="max-w-md">
                                        <h1 className="text-2xl font-medium ">Contact</h1>
                                        <p>cabinet@bennett.edu.in</p>
                                        <div className="grid grid-flow-col gap-4 py-4">
                                            <a href={"https://twitter.com/SCSETBennett"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                            <a href={"https://www.instagram.com/cabinet_csetbu/"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" className="fill-current"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                                            <a href={"https://www.linkedin.com/company/scsetbennett/mycompany/"}><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 50 50" className="fill-current">  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg></a>
                                        </div>

                                    </div>



                        </div>


                    </div>
                </div>
            </div>

        </div>
        // <div className="hero h-screen ">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className="text-center lg:text-left px-6">
        //             <h1 className="text-5xl font-bold">Griviances</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //         </div>
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <form action="">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input type="text" placeholder="Name" className="input input-bordered " name="name" value={values.name} onChange={handleChange} required minLength="3" maxLength="10"/>
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="email" placeholder="Email" className="input input-bordered" name="email" value={values.email} onChange={handleChange} required  />
        //                 </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Subject</span>
        //                         </label>
        //                         <input type="text" placeholder="Subject" className="input input-bordered" name="subject" value={values.subject} onChange={handleChange} required minLength="3" maxLength="50"/>
        //                     </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Message</span>
        //                     </label>
        //                     <textarea className="textarea textarea-bordered textarea-md" placeholder="Type here..." name="message" value={values.message} onChange={handleChange} required ></textarea>
        //
        //                 </div>
        //                 <div className="form-control mt-6">
        //
        //                     <button type="submit" className=" btn btn-outline " disabled={!values.name || !values.email || !values.message || !values.subject} onClick={onSubmit}>{isLoading ? <>Loading..</> : <>Send</>}</button>
        //
        //                 </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Grievance;