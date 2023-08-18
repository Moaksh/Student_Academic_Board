import styles from '@/styles/nav.module.css'
import 'flowbite';
import pic from "@/assets/Bennett-University-logo1-.png";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
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
                    <Link href={"https://forms.gle/om2ZeXom7LR39PEJA"} target={"_blank"}>
                    <button type="button"
                            className="btn btn-outline px-4 py-2 mr-3 ">Apply here
                    </button>
                    </Link>
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
                            <a href="/about-us"
                               className=" block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "
                               aria-current="page" id={styles.nav_link}>About us</a>
                        </li>
                        <li>

                            <a href={"/#grievances"}
                               className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" id={styles.nav_link}>Grievances</a>

                        </li>
                        <li>
                            <a href="/clubs-and-committees"
                               className=" block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "
                               aria-current="page" id={styles.nav_link}>Clubs and Committees</a>
                        </li>

                        <li>
                            <a href="/events"
                               className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 " id={styles.nav_link}>Events</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;