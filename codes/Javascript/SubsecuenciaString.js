const longestWord = (array) => {
  let longWord = "";

  for (let element of array) {
    if (element.length > longWord.length) {
      longWord = element;
    }
  }
  return longWord;
};

const mapString = (string) => {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) map[string[i]]++;
    else map[string[i]] = 1;
  }
  return map;
};

const compareLetters = (word, map) => {
  for (let element of word) {
    if (!map[element]) return false;
  }
  return true;
};

const findNextIndex = (array, minIndex) => {
  for (let element of array) {
    if (element >= minIndex) return element + 1;
  }
  return false;
};

const isSubsequence = (word, map) => {
  let minIndex = 0;
  for (let letter of word) {
    if (map[letter]) {
      if (!findNextIndex(map[letter], minIndex)) return false;
    } else return false;
  }
  return true;
};

const longestMatch = (string, dictionary) => {
  let array = [];
  let map = mapString(string);
  for (let word of dictionary) {
    if (compareLetters(word, map)) array.push(word);
  }
  return longestWord(array);
};
