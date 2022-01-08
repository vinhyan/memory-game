export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  const shuffledArr = array.map((element, index) => {
    return {
      ...element,
      id: index,
    };
  });

  return shuffledArr;
};

let numArr = [];
for (let i = 0; i < 18; i++) {
  numArr.push(i);
  numArr.push(i);
}

// const randomizedNumArr = shuffle(numArr);

export const tileData = numArr.map((num) => {
  return {
    content: num,
    isFlipped: false,
    isMatched: false,
  };
});
