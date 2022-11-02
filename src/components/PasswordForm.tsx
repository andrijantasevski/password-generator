import { useEffect } from "react"
import { FormTypes } from "../App"
import * as Slider from '@radix-ui/react-slider';

interface Props {
    formData: FormTypes
    setFormData: React.Dispatch<React.SetStateAction<FormTypes>>
    generatedPassword: string,
    generatePassword: (length: number, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) => void,
    copyPassword: (password: string) => void
    passwordLength: number[]
    setPasswordLength: React.Dispatch<React.SetStateAction<number[]>>
    passwordStrengthValue: number
}

const PasswordForm: React.FC<Props> = ({ formData, setFormData, generatedPassword, generatePassword, copyPassword, passwordLength, setPasswordLength, passwordStrengthValue }) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleSlider(value: number[]) {
        setPasswordLength(value);
    }

    useEffect(() => {
        generatePassword(passwordLength[0], formData.isUpperCase, formData.isNumbers, formData.isSymbols)
    }, [formData, passwordLength])

    return (
        <>
            <form className="blur-container rounded-md p-4 grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-3">
                    <label className="flex justify-between text-neutral-50 text-xl lg:text-2xl" htmlFor="characters-length">
                        <p>Characters</p>
                        <p className="font-bold">{passwordLength}</p>
                    </label>
                    <Slider.Root min={8} max={35} step={1} value={passwordLength} onValueChange={(value) => handleSlider(value)} className="relative flex h-5 w-full touch-none items-center cursor-pointer">
                        <Slider.Track className="relative h-1 w-full grow rounded-full bg-white" >
                            <Slider.Range className="absolute h-full rounded-full bg-purple-600" />
                        </Slider.Track>
                        <Slider.Thumb className="block w-5 h-5 rounded-xl bg-white" />
                    </Slider.Root>
                </div>

                <div className="flex gap-3 items-center">
                    <input onChange={handleChange} checked={formData.isUpperCase} name="isUpperCase" className="bg-transparent border-neutral-50 rounded-sm p-2 cursor-pointer focus:ring-0 text-transparent checked:border-neutral-50 checked:hover:border-neutral-50" type="checkbox" id="uppercase-letters" />
                    <label className="text-neutral-50 text-lg cursor-pointer" htmlFor="uppercase-letters">Include uppercase letters</label>
                </div>

                <div className="flex gap-3 items-center">
                    <input onChange={handleChange} checked={formData.isNumbers} name="isNumbers" className="bg-transparent border-neutral-50 rounded-sm p-2 cursor-pointer focus:ring-0 text-transparent checked:border-neutral-50 checked:hover:border-neutral-50" type="checkbox" id="numbers" />
                    <label className="text-neutral-50 text-lg cursor-pointer" htmlFor="numbers">Include numbers</label>
                </div>

                <div className="flex gap-3 items-center">
                    <input onChange={handleChange} checked={formData.isSymbols} name="isSymbols" className="bg-transparent border-neutral-50 rounded-sm p-2 cursor-pointer focus:ring-0 text-transparent checked:border-neutral-50 checked:hover:border-neutral-50" type="checkbox" id="symbols" />
                    <label className="text-neutral-50 text-lg cursor-pointer" htmlFor="symbols">Include symbols</label>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-neutral-50 text-lg lg:text-xl">Strength</p>

                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-6 border border-neutral-50 rounded-xl transition-colors ${(passwordStrengthValue >= 0) ? "bg-neutral-50" : ""}`}></div>
                        <div className={`w-3 h-6 border border-neutral-50 rounded-xl transition-colors ${(passwordStrengthValue >= 1) ? "bg-neutral-50" : ""}`}></div>
                        <div className={`w-3 h-6 border border-neutral-50 rounded-xl transition-colors ${(passwordStrengthValue >= 2) ? "bg-neutral-50" : ""}`}></div>
                        <div className={`w-3 h-6 border border-neutral-50 rounded-xl transition-colors ${(passwordStrengthValue >= 3) ? "bg-neutral-50" : ""}`}></div>
                    </div>
                </div>
            </form>

            <div className="blur-container rounded-md">

                <button
                    className="flex justify-center items-center gap-2 w-full h-full p-2"
                    type="button"
                    aria-label="Copy password"
                    title="Copy password"
                    onClick={() => copyPassword(generatedPassword)}
                >
                    <p className="text-neutral-50 text-lg">Copy password</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 text-neutral-50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default PasswordForm