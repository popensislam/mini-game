export function randomIntFromInterval(
  min: number,
  max: number,
  allCycles: number
): number[] {
  const array = [];
  const result = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  for (let countCycles = 1; countCycles <= allCycles; countCycles++) {
    result.push(array.splice(Math.random() * array.length, 1)[0]);
  }
  return result;
}

export function randomLetters(length: number) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function customSort(order: string, arr: number[]): number[] {
  if (order === "desc") {
    return arr.sort((a: number, b: number) => a - b);
  } else {
    return arr.sort((a: number, b: number) => b - a);
  }
}

export function lettersSort(arr: [] | any, order: string) {
  return arr.sort((a: string, b: string) => {
    var textA = a.toUpperCase();
    var textB = b.toUpperCase();
    if (order === "desc") {
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    } else {
      return textA < textB ? (textA > textB ? 1 : 0) : -1;
    }
  });
}
