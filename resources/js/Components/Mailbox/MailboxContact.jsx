import React from "react";

const MailboxContact = () => {
    return (
        <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
            <label className="px-3">
                <input
                    className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                    placeholder="Search..."/>
            </label>

            <ul className="mt-6">
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100 cursor-pointer">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 bg-indigo-600 text-white">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md">23m ago</p>
                    </a>
                    <div className="text-md">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                        <p className="text-md text-gray-400">23m ago</p>
                    </a>
                    <div className="text-md italic text-gray-400">You have been invited!</div>
                </li>
            </ul>
        </section>
    );
}

export default MailboxContact;
