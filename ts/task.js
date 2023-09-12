function merge(intervals) {
  return intervals.reduce((result, currentInterval) => {
    const lastMergedInterval = result[result.length - 1];
    
    if (lastMergedInterval && currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
    
    return result;
  }, []);
}

// Пример использования
const inputExample = [[1, 4], [2, 7], [8, 10], [11, 18], [12, 20]];
const mergedResult = merge(inputExample);
console.log(mergedResult);
