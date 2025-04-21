import { useAtomValue } from "jotai";
import { searchRecordAtom } from "../stores/atom";

export default function SideBar() {
  const searchRecords = useAtomValue(searchRecordAtom);
  const reversedSearchRecords = [...searchRecords].reverse();
  return (
    <div>
      <h2>사이드바</h2>
      <ul>
        {reversedSearchRecords.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
