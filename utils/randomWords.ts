
const randomWords = [
  "camaraderie",
  "demagogue",
  "enervating",
  "intrepid",
  "rancorous",
  "spurious",
  "fastidious",
  "serendipity",
  "flabbergasted",
];

const fetchRandomWord = async () => {
  const wod = randomWords[Math.floor(Math.random() * randomWords.length)];
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${wod}`
    );

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      return result; // Return the result
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchRandomWord;
