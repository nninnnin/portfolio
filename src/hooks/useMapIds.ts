import { map } from "fxjs";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";

type ElementWithId = Partial<Element> & { id: string };

export default function useMapIds<Element>(list: Element[]): ElementWithId[] {
  const result = useMemo<ElementWithId[]>(() => {
    const mappedList = map(
      (elem: Element) => ({
        id: uuid(),
        ...elem,
      }),
      list
    );

    return mappedList;
  }, [list]);

  return result;
}
