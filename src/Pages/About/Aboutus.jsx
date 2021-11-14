import React from "react";

const Aboutus = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-yellow-800 tracking-widest font-medium title-font mb-1">MR WATCH HOUSE</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">MR Watch House began as a small business in a garden shed with just one watch and $100.</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The dream? To bring fashionable and affordable watches to all. In 2010, after positive growth, Watches2U was officially registered as a trademark company. Constantly growing and learning.
                        </p>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="md:w-1/2 w-full px-8 py-6  border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Our Brands</h2>
                            <p class="leading-relaxed text-base mb-4">Here at MR Watch House, we pride ourselves on being the No. 1 for Brands in the designer watch world. Stocking over 150 top brands, from luxury Versace to hip HUGO, plus brands designed by us such as Depth Charge (available exclusively at WatchShop, we might add), we are here to help you find your ideal watch, whoever you are buying for.

                            </p>
                        </div>
                        <div class="md:w-1/2 w-full px-8 py-6 md:border-l-2 border-purple-500 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Our Promise to You</h2>
                            <p class="leading-relaxed text-base mb-4">Wondering whether our watches are genuine, considering how good the prices are? No need to worry; we are official stockists for all of our brands*. Your watch will ship out of our very own warehouse in Reading, and before then, it will sit with the official manufacturer. No middle man here! This also means every watch you purchase with us will come in the original brand packaging and with a valid guarantee. Plus any extras, such as instructions and technical information (if applicable), will be present and correct.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">MR Watch House</p>
                            <p class="mt-1">House-506, Lane-6, Baridhara DOHS, Dhaka-1216</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                            <a class="text-purple-500 leading-relaxed">mrwatchhouse@gmail.com</a>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed">01775 667788</p>
                        </div>
                    </div>
                    <div class="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">We appreciate all kind of feedback.</p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-gray-200 bgc1 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutus;