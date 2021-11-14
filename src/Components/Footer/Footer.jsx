import React from "react";

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font" style={{backgroundColor:'#A569BD'}}>
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <i class="far fa-clock tc2"></i>
                    <span class="ml-3 text-xl tc2">MR Watch House</span>
                </a>
                <p class="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 MR Watch House —
                    <a href="https://twitter.com/knyttneve" class="text-yellow-800 ml-1" rel="noopener noreferrer" target="_blank">@MashodRana</a>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl">
                    <a class="text-gray-200">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a class="ml-3 text-gray-200">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                    <a class="ml-3 text-gray-200">
                        <i class="fab fa-instagram-square"></i>
                    </a>
                    <a class="ml-3 text-gray-200">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;