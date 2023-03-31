import { algorithms, Algorithm } from "../script";
import { useState, useRef } from "react";
import { message } from "antd"

const algorithm = Algorithm.getInstance();
algorithm.init();
export default function ProfileComponent() {
    const inputRef: any = useRef(null);
    const secretKeyRef: any = useRef(null);
    const selectRef: any = useRef(null);
    const [output, setOutput] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const handleOnEncrypt = () => {
        const algorithmSelected = selectRef?.current?.value;
        const input = inputRef?.current?.value;
        const key = secretKeyRef?.current?.value;
        try {
            const output = algorithm.encrypt(algorithmSelected, input, key);
            setOutput(output);
        } catch (error: any) {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        }
    };

    const handleOnDecrypt = () => {
        const algorithmSelected = selectRef?.current?.value;
        const input = inputRef?.current?.value;
        const key = secretKeyRef?.current?.value;
        try {
            const output = algorithm.decrypt(algorithmSelected, input, key);
            setOutput(output);
        } catch (error: any) {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        }
    };
    return (
        <>
            {contextHolder}
            <div className="hidden sm:block bg-gray-100" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0 bg-gray-100">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 ml-5">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Encrypt Algorithm</h3>
                            <p className="mt-1 text-sm text-gray-600">Use algorithm to encrypt plain text to cipher text</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Input Text
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                ref={inputRef}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Algorithm
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                ref={selectRef}
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                {
                                                    algorithms.map(algorithm => (<option key={algorithm}>{algorithm}</option>))
                                                }
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Secret Key
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                ref={secretKeyRef}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Output Text
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                disabled
                                                value={output}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-evenly">
                                    <button
                                        type="button"
                                        onClick={handleOnEncrypt}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Encrypt
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleOnDecrypt}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Decrypt
                                    </button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
