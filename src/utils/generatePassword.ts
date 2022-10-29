import { useState } from "react";
import generateRandomInt from "./generateRandomInt";

export default function usePassword() {
    const [password, setPassword] = useState<string>();

    function generatePassword(length: number, isLowerCase: boolean, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean) {
        // const [password, setPassword] = useState<string>();
        // Find the length and loop through X to generate a password

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

        let passwordArray = [];

        for (let i = 0; i < length; i++) {
            // Generate random integer
            const randomIndex = generateRandomInt(0, availableCharacters.length);

            // Push the random element from the array with available characters to the passwordArray

            passwordArray.push(availableCharacters[randomIndex])
            // push the randomly generated letter to an array
        }

        console.log(passwordArray);
        const passwordString = passwordArray.join("");

        console.log(passwordString)

        setPassword(passwordString);
    }

    return [password, generatePassword]
} 