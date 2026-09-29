function swapKeysAndValues(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = String(key);
  }

  return result;
}