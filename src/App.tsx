import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import PasswordGenerator from "./components/PasswordGenerator";
import usePassword from "./utils/generatePassword";
import copyPassword from "./utils/useCopyPassword";
import useCopyPassword from "./utils/useCopyPassword";

function App() {
  const { password, generatePassword } = usePassword();
  const { passwordCopied, copyPassword } = useCopyPassword();

  useEffect(() => {
    generatePassword(12, true, true, true, true)
  }, [])

  return (
    <div className="main-background relative flex h-screen items-center justify-center">
      <div className="mx-auto w-11/12 lg:w-6/12">
        <PasswordGenerator generatedPassword={password} generatePassword={generatePassword} copyPassword={copyPassword} />
      </div>
      <Transition
        show={passwordCopied}
        enter="transition-opacity ease-linear duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="blur-container absolute bottom-4 right-4 flex items-center gap-2 rounded-md p-2 text-sm text-neutral-50">
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
    </div>
  );
}

export default App;
