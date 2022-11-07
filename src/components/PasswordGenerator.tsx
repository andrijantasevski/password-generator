import { FormTypes } from "../App"

interface Props {
  generatedPassword: string,
  generatePassword: (length: number, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) => void,
  formData: FormTypes
  passwordLength: number[]
}

function PasswordGenerator({ generatedPassword, generatePassword, formData, passwordLength }: Props) {
  return (
    <div className="blur-container flex w-full items-center justify-between gap-2 rounded-md p-4">
      <p className="text-xl text-white lg:text-2xl break-all">{generatedPassword}</p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Generate password"
          title="Generate password"
          onClick={() => generatePassword(passwordLength[0], formData.isUpperCase, formData.isNumbers, formData.isSymbols)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-neutral-50 lg:h-7 lg:w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
