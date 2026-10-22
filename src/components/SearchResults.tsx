import { STORES } from "../api/data.ts";

export default function SearchResults({
  userInput,
  secondIndex,
}: {
  userInput: string;
  secondIndex: number;
}) {
  const data = STORES;
  const searchResults = userInput
    ? data.flatMap((stores) =>
        stores.inventory.filter((item) =>
          item.name.toLowerCase().includes(userInput.toLowerCase()),
        ),
      )
    : [];

  const visibleItems = searchResults ? searchResults.slice(0, secondIndex) : [];

  return (
    <>
      <ul>
        {visibleItems?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
