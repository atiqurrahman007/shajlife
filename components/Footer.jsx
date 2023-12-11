import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-13">
            <Wrapper className="md:flex md:justify-between">
                
                <div className="mb-6 md:mb-0">
                   <a href="#" className="flex items-center">
                       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShajLife</span>
                   </a>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-white uppercase">Who We Are</h2>
                        <ul className="font-semibold">
                            <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                                <a href="#" className="hover:text-red-500">About Us</a>
                            </li>
                            <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                                <a href="#" className="hover:text-red-500">News & Offer</a>
                            </li>
                            <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                                <a href="" className="hover:text-red-500">Career's</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-md font-semibold text-white uppercase ">Categories</h2>
                        <ul className="font-semibold">
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Salwar Kamiz</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Kurti</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Tops</a>
                           </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-md font-semibold text-white uppercase ">Customer Service</h2>
                        <ul className="font-semibold">
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Contact Us</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">How To Order</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Billing & Payment</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Shipping & Delivery</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Track Your Orders</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">FAQs</a>
                           </li>

                        </ul>
                        </div>
                        <div>
                        <h2 className="mb-6 font-md font-semibold text-white uppercase ">More</h2>
                        <ul className="font-semibold">
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Terms & Conditions</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Privacy Policy</a>
                           </li>
                           <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                               <a href="#" className="hover:text-red-500">Site Map</a>
                           </li>
                         
                        </ul>
                        </div>
                </div>

            </Wrapper>

        </footer>
    );
};

export default Footer;