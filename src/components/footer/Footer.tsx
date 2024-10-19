'use client'
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter, FaThreads, FaTiktok } from "react-icons/fa6";
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold">Connect with us!</h4>
                        <h5 className="text-lg mt-0 mb-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, esse!
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex">
                            <button className="bg-white shadow-lg rounded-full h-10 w-10 flex items-center justify-center outline-none focus:outline-none mr-2" type="button">
                                <FaXTwitter />
                            </button>
                            <button className="bg-white shadow-lg rounded-full h-10 w-10 flex items-center justify-center outline-none focus:outline-none mr-2" type="button">
                                <FaFacebook className="text-blue-500" />
                            </button>
                            <button className="bg-white shadow-lg rounded-full h-10 w-10 flex items-center justify-center outline-none focus:outline-none mr-2" type="button">
                                <FaThreads />
                            </button>
                            <button className="bg-white shadow-lg rounded-full h-10 w-10 flex items-center justify-center outline-none focus:outline-none mr-2" type="button">
                                <FaTiktok />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-8">
                        <div className="flex justify-between">
                            <div className="w-full lg:w-5/12">
                                <span className="block uppercase text-sm font-semibold mb-2 opacity-80">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Sale Products
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <span className="block uppercase text-sm font-semibold mb-2 opacity-80">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover font-semibold block pb-2 text-sm" href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6" />
                <div className="flex justify-center">
                    <div className="text-center text-sm font-semibold py-1">
                        Copyright © {currentYear} by{' '}
                        <a href="!#" className="hover:text-gray-600 transition duration-150 ease-in-out">
                            Huyen Tran
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
};

