/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// COMPONENTS
import Definitions from "./Definitions";
// import SavedResults from "../SavedResults";

type Props = {
  // savedResults: string[];
  data: any[];
};
//   searchWord: string[];

export default function DictionaryData({ data }: Props) {
  // console.log(searchWord);
  // console.log(savedResults);

  return (
    <>
      {/* <SavedResults savedResults={savedResults} /> */}

      <Definitions data={data} />
    </>
  );
}

// useEffect(() => {
//   if (data && data.length > 0) {
//     // Update searchResults when data is available
//     const results = JSON.parse(
//       sessionStorage.getItem("searchResults") || "[]"
//     );
//     results.push(data);
//     sessionStorage.setItem("searchResults", JSON.stringify(results));
//     setSearchResults(results);
//   }
// }, [data, setSearchResults, searchResults]);

//   // Save search word to localStorage
//   const word = JSON.parse(sessionStorage.getItem("searchWord") || "[]");
//   word.push(input);
//   sessionStorage.setItem("searchWord", JSON.stringify(word));
//   setSearchWord(word);
