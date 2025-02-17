export function add(numbers: string) {
  if (!numbers) return 0;
  const numberArray = numbers.split(",").map((num) => Number(num));
  return numberArray.reduce((sum, num) => sum + num, 0);
}
