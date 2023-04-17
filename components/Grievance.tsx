import {useState} from "react";
import {sendContactForm} from "../lib/api"
    ;

const initValues = {
    name:"",
    email:"",
    subject:"",
    message:""
};

const initState = {values:initValues};



const Grievance = () => {
    const [state, setState ] = useState(initState);
    const { values,isLoading }  = state;
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
        }));
        await sendContactForm(values);
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left px-6">
                    <h1 className="text-5xl font-bold">Griviances</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered " name="name" value={values.name} onChange={handleChange} required minLength="3" maxLength="10"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name="email" value={values.email} onChange={handleChange} required  />
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
                            <textarea className="textarea textarea-bordered textarea-md" placeholder="Type here..." name="message" value={values.message} onChange={handleChange} required ></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className=" btn btn-primary " disabled={!values.name || !values.email || !values.message || !values.subject} onClick={onSubmit}>{isLoading ? <>Loading..</> : <>Send</>}</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grievance;