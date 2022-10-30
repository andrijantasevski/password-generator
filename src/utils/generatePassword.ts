import { useState } from "react";
import generateRandomInt from "./generateRandomInt";

export default function usePassword() {
    const [password, setPassword] = useState("");

    function generatePassword(length: number, isLowerCase: boolean, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) {

        const lowerCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

        const upperCase = lowerCase.map(letter => letter.toUpperCase());

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?"];

        const availableCharacters = [
            ...(isLowerCase ? lowerCase : []),
            ...(isUpperCase ? upperCase : []),
            ...(isNumbers ? numbers : []),
            ...(isSymbols ? symbols : []),
        ]

        let passwordArray: (string | number)[] = [];

        for (let i = 0; i < length; i++) {
            const randomIndex = generateRandomInt(0, availableCharacters.length);

            passwordArray.push(availableCharacters[randomIndex])
        }

        const passwordString = passwordArray.join("");

        setPassword(passwordString);
    }

    return {
        password,
        generatePassword
    }
} 