import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button onClick={()=>handleFilterChange(statusFilters.all)} selected={filter === statusFilters.all}>All</Button>
      <Button onClick={()=>handleFilterChange(statusFilters.active)} selected={filter === statusFilters.active}>Active</Button>
      <Button onClick={()=>handleFilterChange(statusFilters.completed)} selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );

};
