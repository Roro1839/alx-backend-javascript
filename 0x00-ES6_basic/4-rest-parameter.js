export default function returnHowManyArguments(...theArgs) {
  let b = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const c of theArgs) {
    b = c;
  }
  return b;
}
