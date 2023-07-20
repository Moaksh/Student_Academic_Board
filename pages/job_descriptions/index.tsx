import Image from "next/image";
import pic from "@/assets/team.jpeg";

const Index = () => {
    return (
        <div className={"p-2 sm:px-24"}>


        <div className={"  grid w-full place-items-center   "}>
            <h1 className={"font-black text-6xl md:text-8xl pb-10"}>Job Descriptions</h1>


            <div className=" w-full lg:w-3/5  px-3">


                <div className="flex-col  ">
                    <div>
                        <div className="  font-bold text-4xl   ">
                            President
                        </div>
                        <div className="w-full p-2  ">
                            <ul className="list-disc list-outside text-lg px-3 ">
                                <li>Provide overall leadership and direction to the Student Cabinet.</li>
                                <li>Represent the student body in university meetings and events.</li>
                                <li>Coordinate and oversee the activities of the various ministries and secretaries.</li>
                                <li>Foster a collaborative and inclusive environment within the Student Cabinet.</li>
                                <li>Act as a liaison between the Student Cabinet and university administration.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="  font-bold text-4xl  ">
                            Vice-President
                        </div>
                        <div className="w-full p-2 ">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Support the President in their responsibilities and act as their backup when needed.</li>
                                <li>Assist in coordinating and overseeing the activities of the various ministries and secretaries.</li>
                                <li>Collaborate with the President to ensure effective communication and decision-making.</li>
                                <li>Represent the student body in the absence of the President.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="  font-bold text-4xl ">
                            Chief Executive
                        </div>
                        <div className="w-full p-2  ">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Manage the day-to-day operations of the Student Cabinet.</li>
                                <li>Ensure effective communication and coordination among all ministries and secretaries.</li>
                                <li>Oversee the planning and execution of events and initiatives.</li>
                                <li>Monitor the progress of projects and provide support and guidance as needed.</li>
                                <li>Collaborate with the President and Vice-President in decision-making and problem-solving.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className=" font-bold text-4xl   ">
                            Minister of PR and Branding
                        </div>
                        <div className="w-full p-2 ">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Develop and implement strategies to enhance the public image and reputation of the Student Cabinet.</li>
                                <li>Coordinate promotional campaigns and events.</li>
                                <li>Ensure consistent branding and messaging across all communication channels.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>

                            <div className="  font-bold text-2xl  ">
                                Secretary of Photography and Videography
                            </div>
                            <div className="w-full  p-2 ">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Capture and document events and activities through photography and videography.</li>
                                    <li>Edit and produce high-quality visual content for promotional purposes.</li>
                                    <li>Maintain a library of visual assets for future use.</li>
                                    <li>Collaborate with other secretaries to ensure visual content aligns with the Student Cabinet's branding.</li>
                                </ul>
                            </div>
                            <div className=" font-bold text-2xl pt-2">
                                Secretary of Design
                            </div>
                            <div className="w-full  p-2 ">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Create visually appealing graphics, posters, and promotional materials.</li>
                                    <li>Assist in designing and maintaining the Student Cabinet's visual identity.</li>
                                    <li>Collaborate with other secretaries to ensure consistent design elements across all communication channels.</li>
                                    <li>Provide support for design-related needs of the various ministries and secretaries.</li>
                                </ul>
                            </div>
                            <div className="  font-bold text-2xl pt-2">
                                Secretary of social media
                            </div>
                            <div className="w-full  p-2 ">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Manage and maintain the Student Cabinet's social media accounts.</li>
                                    <li>Develop engaging content and strategies to increase online presence and engagement.</li>
                                    <li>Monitor and respond to inquiries and feedback from the student body.</li>
                                    <li>Collaborate with other secretaries to ensure effective communication and promotion through social media platforms.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="  font-bold text-4xl  ">
                            Minister of Clubs and Chapters
                        </div>
                        <div className="w-full p-2 ">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Oversee the functioning and growth of student clubs and chapters.</li>
                                <li>Provide support and resources to club leaders and members.</li>
                                <li>Foster collaboration and networking among different clubs and chapters.</li>
                                <li>Organize events and initiatives to promote club activities and membership.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>

                            <div className="   font-bold text-2xl  ">
                                Secretary of Internal Affairs
                            </div>
                            <div className="w-full  p-2 ">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Coordinate and manage internal operations of the student clubs and chapter.</li>
                                    <li>Maintain records, documents, and minutes of meetings.</li>
                                    <li>Assist in organizing meetings and events.</li>
                                    <li>Handle internal communications and ensure effective information flow within the Student Cabinet.</li>
                                </ul>
                            </div>
                            <div className="  font-bold text-2xl pt-2  ">
                                Secretary of Resource and Finance
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Manage the Student Club's budget and financial resources.</li>
                                    <li>Coordinate fundraising activities and sponsorship opportunities.</li>
                                    <li>Assist clubs and chapters in budget planning and financial management.</li>
                                    <li>Maintain financial records and prepare reports as required.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="   font-bold text-4xl ">
                            Minister of Academics
                        </div>
                        <div className="w-full p-2 ">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Promote academic excellence and support student success.</li>
                                <li>Collaborate with academic departments to address student concerns and suggestions.</li>
                                <li>Organize workshops, seminars, and events related to academic development.</li>
                                <li>Develop initiatives to enhance the overall academic experience of students.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>
                            <div className=" font-bold text-2xl ">
                                Secretary of Project Department
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Manage and oversee projects initiated by the student.</li>
                                    <li>Coordinate project teams and ensure timely completion of deliverables.</li>
                                    <li>Monitor project progress and provide support and guidance as needed.</li>
                                    <li>Collaborate with other secretaries to ensure alignment with overall Student Cabinet goals.</li>
                                </ul>
                            </div>
                            <div className="  font-bold text-2xl pt-2  ">
                                Secretary of Academics Affairs
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Act as a liaison between the Student Cabinet and university academic departments.</li>
                                    <li>Address student concerns and suggestions related to academic matters.</li>
                                    <li>Organize and facilitate meetings between students and academic faculty.</li>
                                    <li>Assist in developing academic policies and initiatives.</li>
                                </ul>
                            </div>
                            <div className="  font-bold text-2xl pt-2">
                                Secretary of Research Department
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Promote research and scholarly activities among students.</li>
                                    <li>Organize research-related events, conferences, and competitions.</li>
                                    <li>Support students in their research endeavours and provide resources and guidance.</li>
                                    <li>Collaborate with other secretaries to integrate research initiatives with other Student Cabinet activities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="    font-bold text-4xl">
                            Minister of Corporate Relations
                        </div>
                        <div className="w-full  p-2">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Establish and maintain relationships with corporate partners and sponsors.</li>
                                <li>Identify sponsorship opportunities for Student Cabinet events and initiatives.</li>
                                <li>Coordinate networking events and career fairs in collaboration with other ministries.</li>
                                <li>Facilitate collaborations between students and industry professionals.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>
                            <div className="  font-bold text-2xl  ">
                                Secretary of Corporate Relations Ministry
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Support the Minister of Corporate Relations in managing corporate relationships.</li>
                                    <li>Assist in identifying and pursuing sponsorship opportunities.</li>
                                    <li>Maintain a database of corporate contacts and communication records.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="  font-bold text-4xl ">
                            Minister of Communications and Website
                        </div>
                        <div className="w-full  p-2">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Develop and implement communication strategies for the Student Cabinet.</li>
                                <li>Manage the Student Cabinet's website and ensure up-to-date and relevant content.</li>
                                <li>Coordinate with other ministries and secretaries to communicate initiatives and events effectively.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>
                            <div className="   font-bold text-2xl">
                                Secretary of Website
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Manage and update the Student Cabinet's website content.</li>
                                    <li>Ensure the website is user-friendly and visually appealing.</li>
                                    <li>Collaborate with other secretaries to integrate website updates with their respective ministries.</li>
                                    <li>Monitor website analytics and make improvements as needed.</li>
                                </ul>
                            </div>


                            <div className="font-bold text-2xl pt-2 ">
                                Secretary of Communication
                            </div>
                            <div className={"w-full  p-2"}>
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Assist in developing and implementing communication strategies.</li>
                                    <li>Maintain the Student Cabinet's communication channels, such as email lists and messaging platforms.</li>
                                    <li>Collaborate with other secretaries to ensure consistent and effective communication.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>

                        <div className="  font-bold text-4xl ">
                            Minister of Placement
                        </div>
                        <div className="w-full  p-2">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Facilitate career development and job placement opportunities for students.</li>
                                <li>Coordinate with industry professionals, recruiters, and alumni for placement initiatives.</li>
                                <li>Organize career workshops, mock interviews, and networking events.</li>
                                <li>Provide resources and guidance for resume writing, interview skills, and job search strategies.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>

                            <div className="  font-bold text-2xl ">
                                Secretary of Placement
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Assist the Minister of Placement in organizing placement initiatives.</li>
                                    <li>Maintain a database of job opportunities and internship programs.</li>
                                    <li>Provide support to students in their job search process.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>

                    <div>
                        <div className="  font-bold text-4xl ">
                            Minister of Alumni
                        </div>
                        <div className="w-full  p-2">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Engage and maintain connections with alumni.</li>
                                <li>Organize events and initiatives to foster alumni-student interactions.</li>
                                <li>Develop mentorship programs and career support for current students.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>
                            <div className="  font-bold text-2xl ">
                                Secretary of Alumni Ministry
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Support the Minister of Alumni in managing alumni relations.</li>
                                    <li>Coordinate alumni events and initiatives.</li>
                                    <li>Maintain a database of alumni contacts and communication records.</li>
                                    <li>Facilitate networking opportunities between alumni and current students.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>

                    <div>
                        <div className="  font-bold text-4xl ">
                            Minister of International
                        </div>
                        <div className="w-full  p-2">
                            <ul className="list-disc list-outside text-lg px-3">
                                <li>Coordinate collaborative initiatives, including student exchanges and joint research projects.</li>
                                <li>Serve as a liaison between the Student Cabinet, university administration, faculty, and international partners.</li>
                                <li>Provide support and guidance to students participating in international exchange programs.</li>
                                <li>Maintain records of collaborative activities and prepare reports on progress and impact.</li>
                            </ul>
                        </div>
                        <div className={"py-2 px-4 "}>
                            <div className="  font-bold text-2xl ">
                                Secretary of International Ministry
                            </div>
                            <div className="w-full  p-2">
                                <ul className="list-disc list-outside text-lg px-3">
                                    <li>Assist the Minister of International in managing international.</li>
                                    <li>Provide support and guidance for international university to students.</li>
                                    <li>Coordinate cultural exchange programs and events.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>

                </div>

            </div>
        </div>
        </div>
    );
}
export default Index;
