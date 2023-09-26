// COMPONENTS
import Definitions from "../Definitions/Definitions";
import SavedResults from "../SavedResults/SavedResults";

type Props = {
  savedResults: string[];
  data: object[];
  history: string;
};

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
