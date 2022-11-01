import { Transition } from "@headlessui/react";

interface Props {
    passwordCopied: boolean
}

function PasswordCopiedPopUp({ passwordCopied }: Props) {
    return (
        <Transition
            show={passwordCopied}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="blur-container absolute top-4 right-4 flex items-center gap-2 rounded-md p-2 text-sm text-neutral-50">
                <p>Password copied</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            </div>
        </Transition>
    )
}

export default PasswordCopiedPopUp