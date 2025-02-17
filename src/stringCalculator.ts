export function add(numbers: string) {
  if (!numbers) return 0;

  // Replace newlines with commas
  const normalizedNumbers = numbers.replace(/\n/g, ",");

  // Convert string to array of numbers
  const numberArray = normalizedNumbers.split(",").map((num) => Number(num));

  return numberArray.reduce((sum, num) => sum + num, 0);
}
