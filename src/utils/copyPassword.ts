export default function copyPassword(password: string) {
  navigator.clipboard.writeText(password);
}
