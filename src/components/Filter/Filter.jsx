import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';
import { FilterBox, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <label>Filter contacts by name:</label>
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      />
    </FilterBox>
  );
};
