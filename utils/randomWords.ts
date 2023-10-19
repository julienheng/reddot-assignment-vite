const fetchRandomWord = async () => {
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

  const wod = randomWords[Math.floor(Math.random() * randomWords.length)];

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${wod}`
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching random word");
  }
};

export default fetchRandomWord;
