export function parsePrice(priceText: string): number {
  return Number(priceText.replace("$", "").trim());
}

export function isSortedAscending(numbers: number[]): boolean {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      return false;
    }
  }
  return true;
}

export function isSortedDescending(numbers: number[]): boolean {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      return false;
    }
  }
  return true;
}

export function isAlphabeticallyAscending(values: string[]): boolean {
  for (let i = 1; i < values.length; i++) {
    if (values[i].localeCompare(values[i - 1]) < 0) {
      return false;
    }
  }
  return true;
}

export function isAlphabeticallyDescending(values: string[]): boolean {
  for (let i = 1; i < values.length; i++) {
    if (values[i].localeCompare(values[i - 1]) > 0) {
      return false;
    }
  }
  return true;
}