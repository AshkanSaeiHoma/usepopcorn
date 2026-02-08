import { useState, useEffect } from "react";

export function useLocalStorageState(intialState, key) {
  const [value, setValue] = useState(function () {
    const storesValue = localStorage.getItem(key);
    return storesValue ? JSON.parse(storesValue) : intialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
