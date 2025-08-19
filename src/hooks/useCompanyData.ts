import { useMemo, useState } from "react";
import { getStaticData } from "../data/data";


export function useCompanyData() {
  const [inputValue, setInputValue] = useState("");
  const alphaNumRegex = /^[a-zA-Z0-9\s]*$/;
  const isValidInput = alphaNumRegex.test(inputValue);
  const showWarning = !!inputValue && !isValidInput;

  // Defensive copy of static data only once
  const allData = useMemo(() => [...getStaticData], []);

  const filteredData = useMemo(
    () =>
      allData.filter(
        row =>
          (row.name.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
            row.sector.toLowerCase().includes(inputValue.trim().toLowerCase())) &&
          (isValidInput || inputValue.length === 0)
      ),
    [allData, inputValue, isValidInput]
  );

  return {
    inputValue,
    setInputValue,
    filteredData,
    showWarning,
  };
}
