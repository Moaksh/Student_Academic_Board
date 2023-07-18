import styles from '@/styles/special.module.css'
import 'flowbite';
import Link from "next/link";
const data = [
    {title: "Artificial Intelligence", des: "CEOs and CXOs from NVIDIA, Aindra, Here Tech, Amazon, and academics designed the AI curriculum, meeting international standards, which includes electives in Cognitive Modelling, Advanced Computer Vision, Reinforcement Learning, img and Video Processing, and Natural Language Processing. The University has partnerships with NVIDIA, SAP, Hitachi, and Times Internet to provide students with opportunities to work on innovative projects."},
    {title: "Data Science", des: "Data scientists play a key role in the working of smart cities, automation industry, BFSI and Fintech. Given the importance of Data Science, Bennett University has put together a curriculum with the help of CEOs and CXOs of Microsoft, Google, TCS, and other researchers. The curriculum includes elective courses on Structural Equation Modelling; Security and Privacy for Big Data Analytics; Data Visualisation; Big Data Analytics and Business Intelligence; and Satellite Data Analytics."},
    {title: "Cloud Computing", des: "Cloud Computing is in high market demand for its scalability, on-demand solutions, and flexible pricing. To match the demand, there are specialised electives and certification options available, that include Cloud Services Development and Operations, Git and GitHub for Version Control, AWS Cloud Support Associate, Developing Solutions for Microsoft Azure, Google Associate Cloud Engineer, among others."},
    {title: "Blockchain", des: "The Blockchain specialization curriculum includes courses such as Blockchain Technologies, Smart Contracts and Solidity Programming, Digital Currencies and Blockchain, and Modern Cryptography. CEOs and CXOs of BankchainAsset.com, Digiledge, and other subject matter experts have been consulted in its development. Additionally, Samyak Jain (B.Tech. CSE 2017-21) founded 'Instadapp,' a start-up that manages blockchain-based assets and received funding of 1.4 million USD in 2019."},
    {title: "Cyber Security", des: "As online transactions and social activities become more important, the demand for strong Cyber Security grows. The Cyber Security curriculum covers topics such as Cyber Security with Blockchain, Malware Analysis for Mobile Devices, Security and Privacy for Big Data Analytics, Penetration Testing, and Ethical Hacking. The University has partnerships with DSCI, Fortinet, CompTIA, and CISCO to offer students cutting-edge project opportunities."},

]

const Special = () => {

    return (
        // <div className={"min-w-screen"}>
        //     <h1 className={"flex justify-center font-bold text-5xl pb-6"}>Specialisations</h1>
        //     <div className="flex justify-center">
        //         <div className="carousel carousel-end w-3/4 rounded-box ">
        //             <div className={styles.wrapper}>
        //                 <div className={styles.cols}>
        //                     {data.map(item => (
        //                         <div className={styles.col} onTouchStart={e => e.currentTarget.classList.toggle(styles.hover)}>
        //                             <div className={styles.container}>
        //                                 <div className={styles.front}>
        //                                     <div className={styles.inner}>
        //                                         <p>{item.title}</p>
        //                                         <span className={"text-sm"}>Read More</span>
        //                                     </div>
        //                                 </div>
        //                                 <div className={styles.back}>
        //                                     <div className={styles.inner}>
        //                                         <p className={"text-sm"}>
        //                                             {item.des}
        //                                         </p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))}
        //
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //
        //
        // </div>

        <div className={"min-w-screen py-6"}>
            <h1 className={"flex justify-center font-bold text-5xl pb-6"}>Specialisations</h1>
            <div className="flex justify-center">
                 <div className={styles.wrapper}>
                    <div className={styles.cols}>
                        {data.map(item => (
                            <div className={styles.col} onTouchStart={e => e.currentTarget.classList.toggle(styles.hover)}>
                                <div className={styles.container}>
                                    <div className={styles.front}>
                                        <div className={styles.inner}>
                                            <p>{item.title}</p>
                                            <span className={"text-sm"}>Read More</span>
                                        </div>
                                    </div>
                                    <div className={styles.back}>
                                        <div className={styles.inner}>
                                            <p className={"text-sm"}>
                                                {item.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>



        </div>
    );
};

export default Special;