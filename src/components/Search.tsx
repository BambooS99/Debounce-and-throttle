import { useEffect, useState } from "react";
import "./search.scss";
import SearchResults from "./SearchResults";
import useDebounce from "../hooks/Debounce";
import useThrottle from "../hooks/Throttle";

export default function Search() {
  const [userInput, setUserInput] = useState("");
  const debouncedValue = useDebounce(userInput, 1300);
  const [secondIndex, setSecondIndex] = useState(50);

  //track raw scroll position in state
  const [scrollY, setScrollY] = useState(0);
  //pass the scroll state and add a limit
  const throttledScrollY = useThrottle(scrollY, 700);

  //listen to the raw scroll events and update raw state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Watch the throttled scroll value to trigger your infinite scroll logic
  useEffect(() => {
    if (
      window.innerHeight + throttledScrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      setSecondIndex((prevSecondIndex) => prevSecondIndex + 20);
    }
  }, [throttledScrollY]);

  return (
    <>
      <div>
        <h1> Search for your item here</h1>
        <input
          className="search-input-field"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}></input>
        <SearchResults secondIndex={secondIndex} userInput={debouncedValue} />
      </div>
    </>
  );
}
