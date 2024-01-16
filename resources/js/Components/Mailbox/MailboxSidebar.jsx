import React from "react";

const MailboxSidebar = ({ folders }) => {

    return (
        <section className="flex flex-col w-1/12 bg-white shadow">
            <div className="w-16 mx-auto mt-12 mb-20 p-4 bg-indigo-600 rounded-2xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                </svg>
            </div>
            <nav className="relative flex flex-col py-2 items-center">
                {
                    folders.map((folder, index) => (
                        <a key={index} title={folder.name} href="#"
                           className="relative w-10 p-2 bg-purple-100 text-purple-900 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/>
                            </svg>
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 h-6 w-6 p-2 flex justify-center items-center text-white rounded-full">3</span>
                        </a>
                    ))
                }
                {/*<a href="#" className="relative w-10 p-2 bg-purple-100 text-purple-900 rounded-2xl mb-4">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
                {/*              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/>*/}
                {/*    </svg>*/}
                {/*    <span*/}
                {/*        className="absolute -top-2 -right-2 bg-red-600 h-6 w-6 p-2 flex justify-center items-center text-white rounded-full">3</span>*/}
                {/*</a>*/}
                {/*<a href="#" className="w-10 p-2 border text-gray-700 rounded-2xl mb-4">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
                {/*              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                {/*<a href="#" className="w-10 p-2 border text-gray-700 rounded-2xl mb-4">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
                {/*              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                {/*<a href="#" className="w-10 p-2 border text-gray-700 rounded-2xl mb-4">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
                {/*              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                {/*<a href="#" className="w-10 p-2 border text-gray-700 rounded-2xl mb-24">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
                {/*              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                <a href="#" className="w-10 p-2 border text-gray-700 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </a>
            </nav>
        </section>
    );

}

export default MailboxSidebar;
