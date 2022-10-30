import { useState } from "react";

export default function useCopyPassword() {
  const [passwordCopied, setPasswordCopied] = useState(false);

  function togglePasswordPopUp() {
    setPasswordCopied((prevState) => !prevState);
    setTimeout(() => setPasswordCopied((prevState) => !prevState), 1500);
  }

  function copyPassword(password: string) {
    navigator.clipboard.writeText(password);
    togglePasswordPopUp()
  }

  return { passwordCopied, copyPassword }
}
