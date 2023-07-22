

const DoctorInfo = () => {
    return (
        <div>
            <div className="MainWidth grid grid-cols-2 gap-5 items-center">
                <div className="space-y-5">
                    <h4 className="text-[45px] w-[500px] font-semibold">
                        Find the right doctor at your fingertips
                    </h4>
                    <p>
                        Medical to eu nibh vitae est tempor molestie id sed exthe medical dignissim maximus
                    </p>
                 <div>
                 <div className="lg:w-full md:w-1/2 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative -z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-semibold title-font text-2xl text-gray-900 mb-1 tracking-wider">
                                    Search for the best hospital
                                </h2>
                                <p className="leading-relaxed">
                                    Search for the best nearest hospital for
                                    checkup
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-full md:w-1/2 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-semibold title-font text-3xl text-gray-900 mb-1 tracking-wider">
                                    Search with location
                                </h2>
                                <p className="leading-relaxed">
                                    Search for the best nearest hospital for
                                    checkup and add location
                                </p>
                            </div>
                        </div>

                    </div>
                 </div>

                </div>
                <div>
                    <div className="w-full h-full  -z-10 px-8 
                       pt-16 pb-24 rounded-lg overflow-hidden 
                          text-center relative">

                        <div className="w-full h-auto rounded-full 
                            inline-flex items-center justify-center 
                             bg-[#CCDFFF] text-gray-700 text-xl font-bold m-5">

                            <div>
                                <img className="rounded-md" src="https://i.ibb.co/27wHJnc/image-6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;