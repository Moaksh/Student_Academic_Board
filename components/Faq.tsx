import { motion } from "framer-motion";
import {it} from "node:test";

const data = [
    {title: "What is the role of the Student Academic Board?", des: "The role of the Student Academic Board is to represent and advocate for the interests of students, organize events, address concerns, and enhance the overall student experience within the university."},
    {title: "What student organizations are affiliated under the Student Academic Board?", des: "In the Computer Science and Engineering (CSE) department, all the clubs and committees related to Academics are under the Student Academic Board. These clubs and committees play a vital role in promoting technical skills, organizing workshops, and fostering a sense of community among CSE students."},
    {title: "What initiatives or events does the Student Academic Board organize throughout the year?", des: "The Student Academic Board organizes events like Zenevia, Specialization Day for 1st years, Hackathons, workshops, and guest lectures to enrich their academic and social experience throughout the year."},
    {title: "Can the Student Academic Board help with networking and connecting with industry professionals?",des:"Yes, the Student Academic Board frequently organizes workshops and seminars conducted by industry experts throughout the year, providing valuable opportunities for students to interact, learn, and build connections with professionals in their field."},
    {title:"What measures does the Student Academic Board take to ensure diversity and inclusivity within the each department?",des:"The Student Academic Board ensures diversity and inclusivity by conducting campaigns, organizing inclusive events, promoting diverse representation, and collaborating with diversity committees, among other measures."},
    ]

const Faq = () => {
    return (
        <div className={"grid justify-center gap-2 bg-secondary text-white px-4"}>
            <motion.div

                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeInOut", duration: 0.8, delay: 0.2,}}
            >
                <h1 className={"text-center text-3xl font-bold py-5"}>FAQ's</h1>
                {data.map(item => (
                    <div tabIndex={0}
                         className=" max-w-prose bg-secondary collapse collapse-arrow  border-b-4 border-r-2 rounded-box my-2 shadow-2xl">
                        <div className="collapse-title text-lg  font-medium ">
                            {item.title}
                        </div>
                        <div className="collapse-content ">
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Faq;