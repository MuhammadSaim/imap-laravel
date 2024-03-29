import React from "react";
import {Transition} from "@headlessui/react";
import Alert from "@/Components/Alert.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react";
import {toast} from "react-toastify";


const encryption_options = [
    {
        value: 'false',
        text: 'Disable encryption',
    },
    {
        value: 'ssl',
        text: 'Use SSL',
    },
    {
        value: 'tls',
        text: 'Use TLS',
    },
    {
        value: 'starttls',
        text: 'Use STARTTLS (alias TLS) (legacy only)',
    },
    {
        value: 'notls',
        text: 'Use NoTLS (legacy only)',
    }
];


const IMAPAccountForm = () => {


    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: '',
        imap_host: '',
        imap_port: '',
        imap_encryption: '',
        imap_username: '',
        imap_password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('settings.account.add'));
    }

    return (
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <section className="max-w-full">
                <header className="mb-3">
                    <h2 className="text-lg font-medium text-gray-900">IMAP Settings</h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Add account's IMAP information to integrate email.
                    </p>
                </header>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <InputLabel htmlFor="connection_name" value="Connection name"/>
                            <TextInput
                                id="connection_name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="connection_name"
                            />
                            <InputError className="mt-2" message={errors.name}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <InputLabel htmlFor="imap_host" value="IMAP Host"/>
                            <TextInput
                                id="imap_host"
                                className="mt-1 block w-full"
                                value={data.imap_host}
                                onChange={(e) => setData('imap_host', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="imap_host"
                            />
                            <InputError className="mt-2" message={errors.imap_host}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="imap_port" value="IMAP Port"/>
                            <TextInput
                                id="imap_port"
                                className="mt-1 block w-full"
                                value={data.imap_port ?? ''}
                                onChange={(e) => setData('imap_port', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="imap_port"
                            />
                            <InputError className="mt-2" message={errors.imap_port}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="imap_encryption" value="IMAP Encryption"/>
                            <SelectInput
                                id="imap_encryption"
                                className="mt-1 block w-full"
                                defaultValue={data.imap_encryption}
                                onChange={(e) => setData('imap_encryption', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="imap_encryption"
                                options={encryption_options}
                            />
                            <InputError className="mt-2" message={errors.imap_encryption}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <InputLabel htmlFor="imap_username" value="IMAP Username"/>
                            <TextInput
                                id="imap_username"
                                className="mt-1 block w-full"
                                value={data.imap_username ?? ''}
                                onChange={(e) => setData('imap_username', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="imap_username"
                            />
                            <InputError className="mt-2" message={errors.imap_username}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="imap_password" value="IMAP Password"/>
                            <TextInput
                                type="password"
                                id="imap_password"
                                className="mt-1 block w-full"
                                value={data.imap_password ?? ''}
                                onChange={(e) => setData('imap_password', e.target.value)}
                                required
                                disabled={processing}
                                autoComplete="imap_password"
                            />
                            <InputError className="mt-2" message={errors.imap_password}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing} loading={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default IMAPAccountForm;
