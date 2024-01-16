import React from "react";

const MailboxMessageDetail = () => {
    return (
        <section className="w-full px-4 flex flex-col bg-white">
            <div className="flex justify-between items-center h-48 border-b-2 mb-8">
                <div className="flex space-x-4 items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img alt="Akhil Gautam" src="https://bit.ly/2KfKgdy" loading="lazy" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Akhil Gautam</h3>
                        <p className="text-light text-gray-400">akhil.gautam123@gmail.com</p>
                    </div>
                </div>
                <div>
                    <ul className="flex text-gray-400 space-x-4">
                        <li className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>
                        </li>
                        <li className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </li>

                        <li className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                            </svg>
                        </li>
                        <li className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </li>
                        <li className="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <section>
                <h1 className="font-bold text-2xl">We need UI/UX designer</h1>
                <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                    <p>Hi Akhil,</p>
                    <p>Design and develop enterprise-facing UI and consumer-facing UI as well as
                        REST API
                        backends.Work with
                        Product Managers and User Experience designers to create an appealing user experience for
                        desktop web and
                        mobile web.</p>
                    <footer className="mt-12">
                        <p>Thanks & Regards,</p>
                        <p>Alexandar</p>
                    </footer>
                </article>
                <ul className="flex space-x-4 mt-12">
                    <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-indigo-600 hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                    </li>
                    <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                        </svg>
                    </li>
                    <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-pink-400 hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                        </svg>
                    </li>
                    <li className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-yellow-500 hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                        </svg>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default MailboxMessageDetail;
