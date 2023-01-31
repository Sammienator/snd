import React from "react";

import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'

const Features = () => {
    return (
        <div id="product" className="bg-white">
            <h2 className=" flex justify-center mx-16 text-5xl font-bold underline ">
                Our Products...
            </h2>

            <div className="container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
               

               <div className=" flex flex-col space-y-8 md:w-1/2">
                   <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                       <div className="pt-12">
                           <h3 className=" mb-4 text-lg font-bold md:block">
                               Valentine's Bar.
                           </h3>
                           <p className="text-darkGray">
                           I was going for a Valentine themed bar here.
                            These bars are the perfect gift for you and your loved ones. I made them with so much love and with you in mind.....The bars are available for purchase on 12th of Feb, right before the D day, and at an affordable price.
                            They go for 2ksh/ gram....
                            Make your orders while stocks last..
                           </p>
                           <button className='bg-[#4BA036] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500 ease-in-out'> Price: 3/= per gram  </button>
                       </div>
                   </div>
               </div>


               <div className="flex flex-col space-y-12 md:w-1/2">
               <div className="max-w-md mx-auto items-center text-center text-darkGray md:text-left">
                       <img className="rounded-lg hover:scale-105 duration-500 ease-in-out" src={pic5} alt="/" />
                   </div>
               </div>






           </div>

            <div className="container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                <div className="max-w-md mx-auto items-center text-center text-darkGray md:text-left">
                        <img className="rounded-lg hover:scale-105 duration-500 ease-in-out" src={pic6} alt="/" />
                    </div>
                </div>

                <div className=" flex flex-col space-y-8 md:w-1/2">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="pt-12">
                            <h3 className=" mb-4 text-lg font-bold md:block">
                                Coconut Oil Bar.
                            </h3>
                            <p className="text-darkGray">
                            This is a natural multipurpose dish and laundry soap.
                            It is a neutral bar made with coconut oil
                            It will be ready for purchase on Feb 25th February @1.8ksh per gram.
                            </p>
                            <button className='bg-[#4BA036] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500 ease-in-out'> Price: 2.8/= per gram  </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
               

                <div className=" flex flex-col space-y-8 md:w-1/2">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="pt-12">
                            <h3 className=" mb-4 text-lg font-bold md:block">
                                The Toilet Bomb.
                            </h3>
                            <p className="text-darkGray">
                            While a lot of us are trying to rid their homes of synthetic detergents, it may be difficult to trust that natural home made cleaners could do the trick in some areas such as the bathroom.
                            These toilet bombs however are extremely effective whilst cute and safe.
                            They have a minty scent which is absolutely refreshing.....
                            </p>
                            <button className='bg-[#4BA036] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500 ease-in-out'> Price: 3/= per gram  </button>


                        </div>
                    </div>
                </div>


                <div className="flex flex-col space-y-12 md:w-1/2">
                <div className="max-w-md mx-auto items-center text-center text-darkGray md:text-left">
                        <img className="rounded-lg hover:scale-105 duration-500 ease-in-out" src={pic7} alt="/" />
                    </div>
                </div>






            </div>



            <div className="container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                <div className="max-w-md mx-auto items-center text-center text-darkGray md:text-left">
                        <img className="rounded-lg hover:scale-105 duration-500 ease-in-out" src={pic8} alt="/" />
                    </div>
                </div>

                <div className=" flex flex-col space-y-8 md:w-1/2">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="pt-12">
                            <h3 className=" mb-4 text-lg font-bold md:block">
                                Festival Of Colours.
                            </h3>
                            <p className="text-darkGray">
                            This bar is a neutral bar, with its active ingredients being Shea butter and aloe vera extract.
                            The bar will be available for purchase on 25th of February @ 3ksh per gram
                            </p>
                            <button className='bg-[#4BA036] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500 ease-in-out'> Price: 3/= per gram  </button>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Features;
