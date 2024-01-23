import React from "react";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";

const Account = ({ account }) => {
    return (
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <section className="max-w-full">
                <header className="mb-3 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">{ account.name }</h2>
                    <div className="flex items-center">
                        {
                            account.is_default &&
                            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 mr-3">
                                <svg className="h-1.5 w-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
                                  <circle cx={3} cy={3} r={3}/>
                                </svg>
                                Default
                              </span>
                        }
                        <DangerButton>
                            <FaTrashAlt/>
                        </DangerButton>
                    </div>
                </header>


            </section>
        </div>
    );
}

export default Account;
