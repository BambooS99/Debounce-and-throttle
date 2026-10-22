import { STORES } from '../api/data.ts';

const data = STORES;

export default function SearchResults({ userInput }: { userInput: string }) {
  const searchResults = userInput
    ? data.flatMap((stores) =>
        stores.inventory.filter((item) =>
          item.name.toLowerCase().includes(userInput.toLowerCase())
        )
      )
    : [];
  return (
    <>
      <ul>
        {searchResults?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
