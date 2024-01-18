import React from "react";

const MailboxContact = ({messages}) => {

    console.log(messages);

    const isMessageSeen = (flag) => {
        if(flag.length === 0){
            return true;
        }
    }


    return (
        <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
            <label className="px-3">
                <input
                    className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                    placeholder="Search..."/>
            </label>

            <ul className="mt-6">
                {
                    messages.map((message, index) => (
                        <li key={index} className={`py-5 border-b px-3 transition cursor-pointer ${isMessageSeen(message.flag) ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'hover:bg-indigo-100'}`}>
                            <a href="#" className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{message.name}</h3>
                                <p className="text-md text-gray-400">{message.date_humans}</p>
                            </a>
                            <div className="text-md italic text-gray-400">{message.subject}</div>
                        </li>
                    ))
                }

            </ul>
        </section>
    );
}

export default MailboxContact;
