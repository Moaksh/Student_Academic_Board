import styles from '@/styles/nav.module.css'
import 'flowbite';
import pic from "@/assets/logo_flat.png";
import Image from "next/image";
import {useRouter} from "next/router";
const Navbar = () => {
    return (

        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <span
                        className=" self-center font-semibold whitespace-nowrap " >
                        <Image
                            src={pic}
                            className={"w-40 sm:w-56"}
                        />
                    </span>
                </a>
                <div className="flex md:order-2">
                    <button type="button"
                            className="btn btn-outline px-4 py-2 mr-3 ">Apply here
                    </button>
                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-xl md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>

                            <a href={"/#grievances"}
                               className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" id={styles.nav_link}>Grievances</a>

                        </li>
                        <li>
                            <a href="/clubs-and-chapters"
                               className=" block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "
                               aria-current="page" id={styles.nav_link}>Clubs and Chapters</a>
                        </li>

                        <li>
                            <a href="/events"
                               className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 " id={styles.nav_link}>Events</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

        // <div className="navbar px-10">
        //     <div className="navbar-start">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a href="/about-us">About Us</a></li>
        //             <li><a href="/clubs-and-chapters">Clubs and Chapters</a></li>
        //             <li><a href="/events">Events</a></li>
        //
        //             <li tabIndex="0">
        //                 <a>
        //                     Griviances
        //                     <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                          viewBox="0 0 24 24">
        //                         <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
        //                     </svg>
        //                 </a>
        //                 <ul className="p-2 bg-base-100">
        //                     <li><a>Submenu 1</a></li>
        //                     <li><a>Submenu 2</a></li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="navbar-center">
        //         <a className="btn btn-ghost normal-case text-xl" href="/">SCSET Cabinet</a>
        //     </div>
        //     <div className="navbar-end">
        //         <button className="btn btn-ghost btn-circle">
        //             <a>
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
        //                      className="bi bi-instagram fill-current" viewBox="0 0 16 16">
        //                     <path
        //                         d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        //                 </svg></a>
        //
        //         </button>
        //         <button className="btn btn-ghost btn-circle">
        //             <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
        //
        //         </button>
        //         <button className="btn btn-ghost btn-circle">
        //             <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        //         </button>
        //
        //     </div>
        // </div>
    );
};

export default Navbar;