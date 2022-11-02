import { useState } from "react";
import generateRandomInt from "./generateRandomInt";
import { passwordStrength } from 'check-password-strength'

export default function usePassword() {
    const [password, setPassword] = useState("");
    const [passwordStrengthValue, setPasswordStrengthValue] = useState<number>(0)

    function generatePassword(passwordLength: number, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) {

        const lowerCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

        const upperCase = lowerCase.map(letter => letter.toUpperCase());

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?"];

        const availableCharacters = [
            ...lowerCase,
            ...(isUpperCase ? upperCase : []),
            ...(isNumbers ? numbers : []),
            ...(isSymbols ? symbols : []),
        ]

        let passwordArray: (string | number)[] = [];

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = generateRandomInt(0, availableCharacters.length);

            passwordArray.push(availableCharacters[randomIndex]);
        }

        const passwordString = passwordArray.join("");

        setPassword(passwordString);

        setPasswordStrengthValue(passwordStrength(passwordString).id);
    }

    return {
        password,
        passwordStrengthValue,
        generatePassword
    }
} 