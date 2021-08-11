import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { doSearch, loadData, showArchived } from '../../actions/appActions';

import './search-bar.scss';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  // Handle updating of show or hide checkbox - could be named better
  const handleChange = () => {
    dispatch(showArchived(!checked));
    setChecked(!checked);
  };

  // search on keypress
  const handleSearch = (event) => {
    // If searchbar is empty, reload all candidates
    if (event.target.value === '') {
      dispatch(loadData());
    } else {
      dispatch(doSearch(event.target.value));
    }
  }

  return(
   <div className='search-bar-container'>
      <input type='text' className='search' placeholder='Search' onChange={handleSearch.bind(this)}/>
      <label className='checkbox-label'>
        Show archived
        <input type='checkbox' className='cheackbox' id='show' checked={checked} onChange={handleChange} />
      </label>
   </div>
  )
}

export default SearchBar;