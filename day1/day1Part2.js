const fs = require("fs/promises");

fs.readFile("./day1Data.txt", "utf-8").then((data) => {
  const datapoints = data
    .toString()
    .split("\n")
    .map((string) => Number(string));

  const count = datapoints
    .reduce((accumulator, current, idx, arr) => {
      accumulator.push([
        current + arr[idx + 1] + arr[idx + 2],
        arr[idx + 1] + arr[idx + 2] + arr[idx + 3],
      ]);

      return accumulator;
    }, [])
    .map((datapoints) => (datapoints[0] < datapoints[1] ? 1 : 0))
    .reduce((accumulator, current) => accumulator + current);

  console.log(count);
});
