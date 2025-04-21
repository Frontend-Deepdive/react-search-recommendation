import { atom } from "jotai";
import { observe } from "jotai-effect";

export const currentSearchValAtom = atom<string>("");

export const searchRecordAtom = atom<string[]>([]);

/**
 * observe로 currentSearchValAtom의 변화를 감지하여 searchRecordAtom에 저장
 */
observe((get, set) => {
  const currentSearchVal = get(currentSearchValAtom);
  const searchRecords = get(searchRecordAtom);

  // 빈 문자열일 경우 실행하지 않음
  if (currentSearchVal === "") return;

  // 중복된 경우 삭제
  if (searchRecords.includes(currentSearchVal)) {
    set(searchRecordAtom, (prev) =>
      prev.filter((item) => item !== currentSearchVal)
    );
  }

  // 최대 5개까지 저장
  if (searchRecords.length >= 5) {
    set(searchRecordAtom, (prev) => prev.slice(1));
  }

  set(searchRecordAtom, (prev) => [...prev, currentSearchVal]);
});
