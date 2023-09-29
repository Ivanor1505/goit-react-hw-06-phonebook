import React from "react";
import { FilterBox, Input } from "./Filter.styled";

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterBox>
      <label>Filter contacts by name:</label>
      <Input type="text" value={filter} onChange={onChange} />
    </FilterBox>
  );
};
