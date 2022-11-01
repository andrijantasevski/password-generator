import { useEffect, useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordCopiedPopUp from "./components/PasswordCopiedPopUp";
import PasswordForm from "./components/PasswordForm";
import usePassword from "./utils/generatePassword";
import useCopyPassword from "./utils/useCopyPassword";

export interface FormTypes {
  isUpperCase: boolean,
  isNumbers: boolean,
  isSymbols: boolean
}

function App() {
  const { password, generatePassword } = usePassword();
  const { passwordCopied, copyPassword } = useCopyPassword();
  const [formData, setFormData] = useState<FormTypes>({
    isUpperCase: true,
    isNumbers: true,
    isSymbols: true
  });
  const [passwordLength, setPasswordLength] = useState<number[]>([12]);

  useEffect(() => {
    generatePassword(passwordLength[0], formData.isUpperCase, formData.isNumbers, formData.isSymbols)
  }, [])

  return (
    <div className="main-background relative flex h-screen items-center justify-center">
      <div className="mx-auto w-11/12 lg:w-6/12 xl:w-5/12 grid grid-cols-1 gap-5">
        <PasswordGenerator generatedPassword={password} passwordLength={passwordLength} generatePassword={generatePassword} formData={formData} />
        <PasswordForm formData={formData} setFormData={setFormData} generatePassword={generatePassword} copyPassword={copyPassword} generatedPassword={password} passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
      </div>
      <PasswordCopiedPopUp passwordCopied={passwordCopied} />
    </div>
  );
}

export default App;
