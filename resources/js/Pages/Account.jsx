import React from "react";
import IMAPAccountForm from "@/Components/Email/Accounts/IMAPAccountForm.jsx";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";

const Account = ({ auth }) => {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Account</h2>}
        >
            <Head title="Add account"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <IMAPAccountForm/>
                </div>
            </div>
        </Authenticated>
);
}

export default Account;
