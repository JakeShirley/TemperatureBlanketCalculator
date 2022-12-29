const totalSquares = 365;
const maxSquares = 380;
const preferredRatio = 4.0 / 3.0;

interface Combo {
  ratio: number;
  squares: number;
  width: number;
  height: number;
}
const combos: Combo[] = [];

for (let x = 0; x <= totalSquares; ++x) {
  for (let y = 0; y <= totalSquares; ++y) {
    const squareCount = x * y;

    if (squareCount < totalSquares) {
      continue;
    } else if (squareCount > maxSquares) {
      continue;
    }

    const ratio = y / x;

    combos.push({
      ratio: ratio,
      squares: squareCount,
      width: x,
      height: y,
    });
  }
}

const sortedOutput =
  // Sort by closest to ratio
  combos
    .sort((a: Combo, b: Combo) => {
      return (
        Math.abs(a.ratio - preferredRatio) - Math.abs(b.ratio - preferredRatio)
      );
    })
    // Take top 20
    .slice(0, 20)
    //sort by closeness to preferred squares
    .sort((a: Combo, b: Combo) => {
      return (
        Math.abs(a.squares - totalSquares) - Math.abs(b.squares - totalSquares)
      );
    });

console.log(
  `Best dimensions: ${sortedOutput[0].width}w x ${sortedOutput[0].height}h (${
    sortedOutput[0].squares
  } total squares with ${sortedOutput[0].squares - 365} leftovers)`
);
console.log("done");
