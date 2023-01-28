import { useState } from "react";
import navLogo from "./Assets/Logos/Logo White.svg";
import headerImage from "./Assets/Images/Header Image.jpg";
import batMan from "./Assets/Images/Batman.jpg";
import wildWest from "./Assets/Images/Wild West.jpg";
import spiderMan from "./Assets/Images/Spiderman.jpg";
import twitterWhite from "./Assets/Icons/Twitter White.svg";
import youtube from "./Assets/Icons/Youtube White.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="relative">
            <div className="h-full w-full">
                <NavBar></NavBar>
                <Body></Body>
            </div>
            <Collection></Collection>
            {/* <Projects></Projects>
            <Education></Education>
            <Skills></Skills> */}
            <LocationContact></LocationContact>
        </div>
    );
}

function NavBar() {
    const [openHambugerMenu, setOpenHamburgerMenu] = useState(false);

    return (
        <div className="h-20 bg-black items-center flex px-8 shrink-0 fixed w-full top-0 z-50">
            {openHambugerMenu && (
                <div className="w-full h-[calc(100vh-5rem)] fixed right-0 top-20 bg-black/70 z-50">
                    <div className="md:w-1/3 sm:w-2/5 w-full h-full absolute right-0 inset-y-0 bg-black text-white flex flex-col gap-6 pt-12 p-4 px-8">
                        <div
                            onClick={() => setOpenHamburgerMenu(false)}
                            className="absolute top-3 right-8 p-2 px-3 bg-gray-900"
                        >
                            X
                        </div>
                        <a
                            href="#home"
                            className="hover:underline hover:text-md hover:font-bold"
                        >
                            HOME
                        </a>
                        <a
                            href="#about"
                            className="hover:underline hover:text-md hover:font-bold"
                        >
                            OUR SCREENS
                        </a>
                        <a
                            href="#project"
                            className="hover:underline hover:text-md hover:font-bold"
                        >
                            SCHEDULE
                        </a>
                        <a
                            href="#education"
                            className="hover:underline hover:text-md hover:font-bold"
                        >
                            MOVIE LIBRARY
                        </a>
                        <a
                            href="#location & contact"
                            className="hover:underline hover:text-md hover:font-bold"
                        >
                            LOCATIONS & CONTACT
                        </a>
                    </div>
                </div>
            )}
            <img src={navLogo} alt="logo" className="mr-5" />
            <div className="flex text-white text-sm gap-8 ml-auto cursor-pointer">
                <a
                    href="#home"
                    className="hover:underline hidden sm:inline hover:text-md hover:font-bold"
                >
                    HOME
                </a>
                <a
                    href="#about"
                    className="hover:underline hidden sm:inline hover:text-md hover:font-bold"
                >
                    OUR SCREENS
                </a>
                <a
                    href="#project"
                    className="hover:underline hidden md:inline hover:text-md hover:font-bold"
                >
                    SCHEDULE
                </a>
                <a
                    href="#education"
                    className="hover:underline hidden lg:inline hover:text-md hover:font-bold"
                >
                    MOVIE LIBRARY
                </a>
                <a
                    href="#location & contact"
                    className="hover:underline hidden lg:inline hover:text-md hover:font-bold"
                >
                    LOCATIONS & CONTACT
                </a>
            </div>
            <div
                className="HAMBURGER-ICON space-y-2 ml-8"
                onClick={() => setOpenHamburgerMenu((prev) => !prev)}
            >
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
            </div>
        </div>
    );
}

function Body() {
    return (
        <>
            <div id="home" className="h-full">
                <img src={headerImage} alt="Photo" className="-mt-56" />
                <div className="bg-black border-gray-400/10 border-t pt-8 w-full px-10 pb-8">
                    <div className="text-white px-10 font-bold font-mono text-5xl">
                        MOVIE LIBRARY
                    </div>
                    <div className="text-white/60 px-10 font-mono text-md py-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        <br />
                        sed diam nonumy eirmod tempor invidunt ut labore et{" "}
                        <br />
                        dolore magna aliquyam erat, sed diam voluptua.{" "}
                    </div>
                </div>
            </div>
        </>
    );
}

function Collection() {
    return (
        <>
            <div className="bg-black/90 h-full px-20 py-8">
                <div className="flex justify-between">
                    <div className="text-white  font-bold font-mono text-3xl">
                        Collect your favourites
                    </div>
                    <form className="flex items-center w-1/3">
                        <label forhtml="simple-search" className="sr-only">
                            Search
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 px-3 "
                                placeholder="Search title and add to grid"
                                required
                            />
                        </div>
                    </form>
                </div>
                <div className="py-4">
                    <div className="bg-white w-full h-[0.1rem]"></div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="w-full bg-gray-100/20 relative">
                            <div class="absolute bg-white/10 w-10 h-10 right-2 top-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white dark:text-gray-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <img
                                src={batMan}
                                alt="coleection"
                                className="h-[430px] object-cover"
                            />
                            <div className="text-white ml-4 mt-4 font-bold font-mono text-2xl">
                                Batman Returns
                            </div>
                            <p className="text-white/60 mx-4 my-2 font-mono text-[1rem]">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut…
                            </p>
                        </div>
                        <div className="w-full bg-gray-100/20 relative">
                            <div class="absolute bg-white/10 w-10 h-10 right-2 top-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white dark:text-gray-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <img
                                src={wildWest}
                                alt="colection"
                                className="h-[430px] w-[430px] object-cover"
                            />
                            <div className="text-white ml-4 mt-4 font-bold font-mono text-2xl">
                                Wild Wild West
                            </div>
                            <p className="text-white/60 mx-4 my-2 font-mono text-[1rem]">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut…
                            </p>
                        </div>
                        <div className="w-full bg-gray-100/20 relative">
                            <div class="absolute bg-black/80 w-10 h-10 right-2 top-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white dark:text-gray-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <img
                                src={spiderMan}
                                alt="colection"
                                className="h-[430px] object-cover"
                            />
                            <div className="text-white ml-4 mt-4 font-bold font-mono text-2xl">
                                The Amazing Spiderman
                            </div>
                            <p className="text-white/60 mx-4 my-2 font-mono text-[1rem]">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function LocationContact() {
    return (
        <>
            <div
                id="location & contact"
                className="h-full py-14 pb-8 bg-black px-12"
            >
                <div className="w-full">
                    <div className="text-white px-10 font-bold font-mono text-3xl">
                        How to reach us
                    </div>
                    <div className="text-white/60 px-10 font-mono text-md py-2">
                        Lorem ipsum dolor sit amet, consetetur.
                    </div>
                    <div className="flex w-full gap-10 px-10 mt-4">
                        <form className="w-2/5">
                            <div className="flex flex-col gap-6">
                                <div class="flex gap-4">
                                    <div class="w-full md:w-1/2">
                                        <label
                                            for="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First Name <sup>*</sup>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            id="Enter your name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <div>
                                            <label
                                                for="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Last Name <sup>*</sup>{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="Enter your name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email <sup>*</sup>{" "}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Telephone
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-white bg-gray-50/25 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                    ></textarea>
                                </div>
                                <p className="text-white/60 text-sm">
                                    * required fields
                                </p>
                                <label class="md:w-2/3 block text-white/60">
                                    <input
                                        className="mr-2 leading-tight"
                                        type="checkbox"
                                    />
                                    <span class="text-md">
                                        I agree to the
                                        <span className="text-white underline ml-1">
                                            Terms & Conditions
                                        </span>
                                    </span>
                                </label>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="w-max text-white bg-yellow-600 hover:bg-yellow-700 rounded-sm text-sm  sm:w-auto px-16 py-2.5 uppercase text-center"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="w-3/5">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3806961547903!2d79.938237314151!3d6.844882821244155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25069caa2f53b%3A0xe7eae3a8b1f1214d!2seBEYOND%20eBusiness%20%26%20Digital%20Marketing%20Solutions!5e0!3m2!1sen!2slk!4v1674880758246!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/90 flex justify-between text-white text-sm px-20 py-4">
                <div>
                    <p className="font-bold mb-3">IT group</p>
                    <div>
                        <p>C. Salvador de Madariaga, 1</p>
                        <p>28027 Madrid</p>
                        <p>Spain</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <p>Follow us on</p>
                    <img
                        src={twitterWhite}
                        alt="Logo"
                        className="w-4 h-4 ml-3"
                    />
                    <img src={youtube} alt="Logo" className="w-4 h-4" />
                </div>
            </div>
            <div className="bg-gray-700 w-full h-[0.1rem]"></div>
            <div className="bg-black/90 flex justify-between text-white/60 text-xs px-20 py-4">
                <p>Copyright © 2022 IT Hotels. All rights reserved.</p>
                <p>Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
            </div>
        </>
    );
}

export default App;
