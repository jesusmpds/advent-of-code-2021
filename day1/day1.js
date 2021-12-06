const fs = require("fs/promises");

const data = fs.readFile("./day1Data.txt", "utf-8").then((data) => {
  let formatData = data.toString().split("\n");

  const counter = formatData.reduce((lastNumber, currentNumber) => {
    if (Number(currentNumber) > Number(lastNumber)) {
      count++;
    }
    return currentNumber;
  });
  console.log(count);
});

fs.readFile("./day1Data.txt", "utf-8").then((data) => {
  const datapoints = data.toString().split("\n");

  const count = datapoints
    .reduce((accumulator, current, idx, arr) => {
      accumulator.push([current, arr[idx + 1]]);
      console.log(accumulator);
      return accumulator;
    }, [])

    .map((datapoints) =>
      Number(datapoints[0]) < Number(datapoints[1]) ? 1 : 0
    )
    .reduce((accumulator, current) => accumulator + current);

  console.log(count);
});
