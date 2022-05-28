export const shuffleArr = (originalArr = []) => {
  let shuffledArr = [...originalArr];
  let shuffleIndex = originalArr.length;

  while (shuffleIndex) {

    let randomArrEl = Math.floor(Math.random() * shuffleIndex--); // random element from the orignial array

    // swaping the random element "randomArrEl" with the current Element "shuffleIndex"
    let t = shuffledArr[randomArrEl];
    shuffledArr[randomArrEl] = shuffledArr[shuffleIndex];
    shuffledArr[shuffleIndex] = t;
  }

  return shuffledArr;
};
