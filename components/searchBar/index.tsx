import { useState } from "react";

type EventType = {
  target: {
    value: string
  }
};

interface PropsInterface {
  onSearch: (text: string) => any
};

const SearchBar = ({
  onSearch
}: PropsInterface) => {
  const [value, setValue] = useState('');
  const handleValueChange = (e: EventType) => {
    const { target: { value } } = e;
    setValue(value);
    onSearch(value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleValueChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
