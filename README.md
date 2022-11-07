# password-generator

## Links

- [Password Generator](https://password-generator.andrijan.dev/)
- [Figma design](https://www.figma.com/file/1JXhYfUmhlItCKLzxbeBIG/Password-Generator-Public)

## Built with

- TypeScript
- React
- Vite
- Tailwind

### Some other tools that made my work easier

- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Headless UI - Transition](https://headlessui.com/react/transition)
- [Radix UI - React Slider](https://www.radix-ui.com/docs/primitives/components/slider)
- [Check Password Strength](https://www.npmjs.com/package/check-password-strength)

## What I learned

- How to generate the alphabet in two lines of code by using the character codes in JavaScript and converting them to strings by using the String.fromCharCode() method.
- How to use Headless UI transitions properly.
- How difficult the *<input type="range">* is to work with. It is very hard to apply desired styles without overriding the existing ones by using hacky methods. Even when we find a workaround, we need to double our CSS to support WebKit-based browsers and Firefox as the selectors are different for them. So it is always better to opt out for a component library, especially an unstyled one like *Radix UI*, which allows us to add styles to our liking.
- How hard it is to come up with an algorithm that checks the strength of a password, which is why it is better to use some package, such as *Check Password Strength*.
