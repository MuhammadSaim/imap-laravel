import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import Alert from "@/Components/Alert.jsx";


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


const Settings = ({ auth }) => {

    const imap_settings = usePage().props.imap_settings;

    console.log(imap_settings);

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        imap_host: imap_settings.host,
        imap_port: imap_settings.port,
        imap_encryption: imap_settings.encryption,
        imap_username: imap_settings.username,
        imap_password: imap_settings.password,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.settings'));

    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
            <Head title="Settings"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section className="max-w-full">
                            <header className="mb-3">
                                <h2 className="text-lg font-medium text-gray-900">IMAP Settings</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update your account's IMAP information to integrate email.
                                </p>
                            </header>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <Alert message="Setting is saved successfully." />
                            </Transition>

                            <form onSubmit={submit} className="mt-6 space-y-6">
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
                </div>
            </div>
        </Authenticated>
    );

}

export default Settings;
