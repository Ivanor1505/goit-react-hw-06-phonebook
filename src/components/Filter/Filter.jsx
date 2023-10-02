import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
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
