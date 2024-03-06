import type { FlexProps } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { IconSearch } from "@/assets/index";
import { useSearchStore } from "@/stores/search";

interface IProps extends FlexProps {
  placeholder?: string;
}

const Search: React.FC<IProps> = ({ placeholder = "Search", ...rest }) => {
  const setSearch = useSearchStore(state => state.setSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  return (
    <InputGroup maxW={72} {...rest}>
      <InputLeftElement>
        <IconSearch />
      </InputLeftElement>
      <Input
        placeholder={placeholder}
        px={4}
        py={2}
        borderRadius={100}
        height="auto"
        pl={12}
        background="gray.99"
        border={"1px solid #EDEFF2"}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

export default Search;
