import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, useForm, usePage} from "@inertiajs/react";
import Alert from "@/Components/Alert.jsx";
import IMAPAccountForm from "@/Components/Email/Accounts/IMAPAccountForm.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {FaPlugCircleBolt} from "react-icons/fa6";
import {FaPlusCircle} from "react-icons/fa";
import AccountLists from "@/Components/Email/Accounts/AccountLists.jsx";


const Settings = ({ auth }) => {

    const accounts = usePage().props.accounts;

    console.log(accounts);

    // const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    //     imap_host: imap_settings.host,
    //     imap_port: imap_settings.port,
    //     imap_encryption: imap_settings.encryption,
    //     imap_username: imap_settings.username,
    //     imap_password: imap_settings.password,
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route('profile.settings'));
    //
    // }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
            <Head title="Accounts"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="flex justify-end">
                        <a href={route('settings.account.add')}>
                            <PrimaryButton>
                                <FaPlusCircle className="mr-2"/> Add Account
                            </PrimaryButton>
                        </a>
                    </div>
                    {
                        accounts === null ?
                            <Alert message="Sorry there is no account connected yet." type="error" />
                            :
                            <AccountLists accounts={accounts} />
                    }
                </div>
            </div>
        </Authenticated>
    );

}

export default Settings;
