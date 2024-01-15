const SelectInput = ({ className = '', options = [], ...props }) => {

    return (
        <select
            {...props}
            className={
                'mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ' +
                className
            }
        >
            <option>Choose encryption</option>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value} >{option.text}</option>
                ))
            }
        </select>
    );

}

export default SelectInput;
