import { combineReducers } from 'redux';
import todos from './Todos';
import visibilityFilter from './VisibilityFilter';
import counter from './Counter';

export default combineReducers({
  todos,
  visibilityFilter,
  counter
});
