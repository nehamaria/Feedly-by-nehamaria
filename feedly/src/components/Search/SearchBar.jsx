import React from "react";
import { Search, Down } from "@bigbinary/neeto-icons";
import { Input } from "@bigbinary/neetoui/v2";

const SearchBar = ({ handleSearch }) => {
  return (
    <Input
      size="large"
      placeholder="Search for an article."
      prefix={<Search size={20} />}
      suffix={<Down size={20} />}
      onChange={handleSearch}
      className="outline-none"
    />
  );
};

export default SearchBar;
