const fs = require("fs/promises");

fs.readFile("./inputDay2.txt", "utf-8").then((data) => {
  const datapoints = data
    .toString()
    .split("\n")
    .map((string) => string.split(" "));

  const dataFormat = {
    forward: 0,
    depth: 0,
  };
  const position = datapoints.reduce((accumulator, current) => {
    if (current[0] === "forward") {
      accumulator.forward += Number(current[1]);
    }
    if (current[0] === "down") {
      accumulator.depth = accumulator.depth + Number(current[1]);
    }
    if (current[0] === "up") {
      accumulator.depth = accumulator.depth - Number(current[1]);
    }

    return accumulator;
  }, dataFormat);

  const result = position.forward * position.depth;
  console.log(result);
});
