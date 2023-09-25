/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// COMPONENTS
import Definitions from "./Definitions";
import SavedResults from "../SavedResults";

type Props = {
  savedResults: string[];
  data: any[];
  history: string;
};
//   searchWord: string[];

export default function DictionaryData({ data, savedResults, history }: Props) {
  return (
    <>
      {history ? (
        <SavedResults savedResults={savedResults} history={history} />
      ) : (
        <Definitions data={data} />
      )}
    </>
  );
}
