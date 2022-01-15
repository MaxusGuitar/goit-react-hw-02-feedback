import { useState, useEffect } from "react";
const useFeedBackState = (key) => {
  console.log(window.localStorage.getItem(key));
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? "";
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default useFeedBackState;
