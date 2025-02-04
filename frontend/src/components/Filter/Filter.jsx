import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  selectTitleFilter,
  resetFilters,
  setFilterAuthor,
  selectAuthorFilter,
  setOnlyFavorite,
  selectOnlyFavorite,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterInput = useSelector(selectTitleFilter);
  const filterAuthor = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavorite);
  // const filterInput = useSelector((state) => state.filter.title);

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const handleAuthorChange = (e) => {
    dispatch(setFilterAuthor(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleOnlyFavoriteChange = (e) => {
    dispatch(setOnlyFavorite(e.target.checked));
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleInputChange}
            value={filterInput}
            type="text"
            placeholder="Search books..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorChange}
            value={filterAuthor}
            type="text"
            placeholder="Search authors..."
          />
        </div>
      
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            onChange={handleOnlyFavoriteChange}
            checked={onlyFavorite}
          />
          Only Favorite
        </label>
      </div>
      <button type="button" onClick={() => handleResetFilters()}>
        Reset Filters
      </button>
      </div>
    </div>
  );
};
export default Filter;
