import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, usePage} from "@inertiajs/react";
import MailboxSidebar from "@/Components/Mailbox/MailboxSidebar.jsx";
import MailboxContact from "@/Components/Mailbox/MailboxContact.jsx";
import MailboxMessageDetail from "@/Components/Mailbox/MailboxMessageDetail.jsx";

const Inbox = ({ auth }) => {

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MailBox</h2>}
        >
            <Head title="Inbox"/>
            <div className="flex w-full h-full shadow-lg">
                <MailboxSidebar/>
                <MailboxContact/>
                <MailboxMessageDetail/>
            </div>
        </Authenticated>
    );

}

export default Inbox;
