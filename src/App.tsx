import { useEffect, useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordCopiedPopUp from "./components/PasswordCopiedPopUp";
import PasswordForm from "./components/PasswordForm";
import usePassword from "./utils/generatePassword";
import useCopyPassword from "./utils/useCopyPassword";

export interface FormTypes {
  passwordLength: number,
  isUpperCase: boolean,
  isNumbers: boolean,
  isSymbols: boolean
}

function App() {
  const { password, generatePassword } = usePassword();
  const { passwordCopied, copyPassword } = useCopyPassword();
  const [formData, setFormData] = useState<FormTypes>({
    passwordLength: 12,
    isUpperCase: true,
    isNumbers: true,
    isSymbols: true
  });

  useEffect(() => {
    generatePassword(formData.passwordLength, formData.isUpperCase, formData.isNumbers, formData.isSymbols)
  }, [])

  return (
    <div className="main-background relative flex h-screen items-center justify-center">
      <div className="mx-auto w-11/12 lg:w-5/12 grid grid-cols-1 gap-5">
        <PasswordGenerator generatedPassword={password} generatePassword={generatePassword} copyPassword={copyPassword} formData={formData} />
        <PasswordForm formData={formData} setFormData={setFormData} generatePassword={generatePassword} />
      </div>
      <PasswordCopiedPopUp passwordCopied={passwordCopied} />
    </div>
  );
}

export default App;
