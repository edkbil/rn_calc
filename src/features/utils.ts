export function operationsCheck(btn: string | undefined) {
  if (btn === "/" || btn === "*" || btn === "-" || btn === "+") return true;
  return false;
}
export function numberCheck(n: number) {
  return Number.isInteger(n);
}
