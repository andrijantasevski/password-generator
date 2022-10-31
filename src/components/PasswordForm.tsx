import { useEffect } from "react"
import { FormTypes } from "../App"

interface Props {
    formData: FormTypes
    setFormData: React.Dispatch<React.SetStateAction<FormTypes>>
    generatePassword: (length: number, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) => void,
}

const PasswordForm: React.FC<Props> = ({ formData, setFormData, generatePassword }) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    useEffect(() => {
        generatePassword(formData.passwordLength, formData.isUpperCase, formData.isNumbers, formData.isSymbols)
    }, [formData])

    return (
        <>
            <form className="blur-container rounded-md p-4 grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-3">
                    <label className="flex justify-between text-neutral-50 text-xl lg:text-2xl" htmlFor="characters-length">
                        <p>Characters</p>
                        <p className="font-bold">{formData.passwordLength}</p>
                    </label>
                    <input onChange={handleChange} value={formData.passwordLength} name="passwordLength" type="range" min={8} max={35} id="characters-length" />
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
            </form>
        </>
    )
}

export default PasswordForm