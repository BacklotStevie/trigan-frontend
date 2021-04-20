import React from 'react';

const Footer = () => {
    return (
    // <footer class="footer bg-black relative pt-1 border-b-2 border-blue-700">
    // <div class="container mx-auto px-6">
    //     <div class="sm:flex sm:mt-8">
    //         <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
    //             <div class="flex flex-col">
    //                 <span class="font-bold text-white uppercase mb-2">Footer header 1</span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //             </div>
    //             <div class="flex flex-col">
    //                 <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
    //                 <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
    //             </div>
    //             <div class="flex flex-col">
    //                 <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //                 <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <div class="container mx-auto px-6">
    //     <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
    //         <div class="sm:w-2/3 text-center py-6">
    //             <p class="text-sm text-white font-bold mb-2">
    //                 © 2021 by Tri-Gan Visuals
    //             </p>
    //         </div>
    //     </div>
    // </div>
    // </footer>

    <footer class="flex bg-black py-8 w-full mt-8">
        <div class="flex container mx-auto px-8">
            <div class="flex table w-full">
             <div class="flex block sm:table-cell">
                    <p class="uppercase pl-5 text-red-700 text-sm sm:mb-6">Links</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="http://voyagemia.com/interview/meet-mauricio-carrasco-tri-gan-visuals-miami-lakes/" class="text-white hover:text-grey-dark">VoyageMIA</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-white hover:text-grey-dark">YouTube</a>
                     </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-white hover:text-grey-dark">Support</a>
                        </li>
                    </ul>
            </div>
            {/* <div class="block sm:table-cell">
                <p class="uppercase text-white text-sm sm:mb-6">Legal</p>
                <ul class="list-reset text-xs mb-6">
                    <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" class="text-white hover:text-grey-dark">Terms</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" class="text-white hover:text-grey-dark">Privacy</a>
                    </li>
                </ul>
            </div> */}
            <div class="block sm:table-cell">
                <p class="uppercase pl-5 text-red-700 text-sm sm:mb-6">Social</p>
                <ul class="list-reset text-xs mb-6">
                    <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="https://www.instagram.com/trigan.visuals" class="text-white hover:text-grey-dark">Instagram</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="https://www.twitter.com/TriganVisuals" class="text-white hover:text-grey-dark">Twitter</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" class="text-white hover:text-grey-dark">LinkedIn</a>
                    </li>
                </ul>
            </div>
                <div class="block sm:table-cell">
                    <p class="uppercase pl-5 text-red-700 text-sm sm:mb-6">Company</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="/portfolio" class="text-white hover:text-grey-dark">Portfolio</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="/about" class="text-white hover:text-grey-dark">About Us</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="/contact" class="text-white hover:text-grey-dark">Contact</a>
                     </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )};

export default Footer