export function add(numbers: string): number {
  if (!numbers) return 0;

  // handle custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, delimiterEndIndex); // Get the delimiter
    numbers = numbers.substring(delimiterEndIndex + 1); // Get the numbers part

    // Replace all instances of the custom delimiter with commas
    numbers = numbers.replace(new RegExp(delimiter, "g"), ",");
  }

  // Replace newlines with commas
  const normalizedNumbers = numbers.replace(/\n/g, ",");

  // Check for negative numbers
  const negatives = normalizedNumbers
    .split(",")
    .filter((num) => Number(num) < 0);

  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(","));
  }

  // Convert string to array of numbers
  const numberArray = normalizedNumbers.split(",").map((num) => Number(num));

  return numberArray.reduce((sum, num) => sum + num, 0);
}
