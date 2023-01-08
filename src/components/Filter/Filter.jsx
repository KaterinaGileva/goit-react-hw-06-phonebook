import React from 'react';
import css from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

const Filter  = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const handleFilterChange = filter => dispatch(setFilter(filter.target.value));
   
  return (
    <div>
   <label className={css.label}>
    Find contacts by name 
         <input className={css.input}
           type="text"
           value={filter}
           onChange={handleFilterChange} 
     />
    </label>
    </div>
);
};
//Filter.propTypes = {
//  value: PropTypes.string.isRequired,
  //onChange: PropTypes.func.isRequired,
//};

export default Filter;