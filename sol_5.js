function findRainfallPeaks(rainfall) {
    const peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1); // Convert 0-based index to 1-based day
    }
  }

  return peaks;
}