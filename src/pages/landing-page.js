import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderBar from '../components/header-bar/header-bar';
import { loadData, numberWithSpaces, timeSinceResponse, toggleItemArchive } from '../actions/appActions';
import './landing-page.scss';
import SearchBar from '../components/search-bar/search-bar';

const LandingPage = () => {
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  // use state values of data and checkbox value
  const {data, showArchived } = appState;

  // Load inital JSON data on first load
  useEffect(()=>{
    dispatch(loadData());
  },[dispatch])

  // Toggle archiving and unarchiving of row
  const toggleArchive = ((key) => {
    dispatch(toggleItemArchive(key));
  })

  return(
    <div className='page-wrapper'>
      <HeaderBar />
      <SearchBar />
      {/* Checking if Data is loaded before rendering */}
      {data && data.length > 0 && 
      <div className='contents-container'>
          <p className='total-requests'>{data.length} interview requests</p>
          <div className='contents-card'>
            <div className='content-header table-row'>
              <div className='row-column'>
                <p>Candidate</p>
              </div>

              <div className='row-column'>
                <p>Role</p>
              </div>

              <div className='row-column'>
                <p>Last Communication</p>
              </div>

              <div className='row-column'>
                <p>Salary</p>
              </div>

              <div className='row-column'>
                <p>Sent by</p>
              </div>

              <div className='row-column archive'>
                {/* Empty for achive header */}
              </div>

            </div>

            {data.map((item, i) =>
              <div key={i} className={`content-row table-row ${item.archived ? 'archived' : ''} ${showArchived ? 'show-archived' : ''}`}>
                <div className='row-column'>
                  <img className='profile-icon' src={item.image} alt='profile'/>
                  <p>{item.candidate}</p>
                </div>

                <div className='row-column'>
                  <p>{item.role ? item.role : '-' }</p>
                </div>

                <div className='row-column'>
                  {item.last_comms.unread &&
                    <span className='unread'></span>
                  }
                  <p>{item.last_comms.description}</p>
                  <p className='response-time'>{timeSinceResponse(item.last_comms.date_time)}</p>
                </div>

                <div className='row-column'>
                  <p>R{numberWithSpaces(item.salary)}</p>
                </div>

                <div className='row-column'>
                  <p>{item.sent_by}</p>
                </div>

                 <div className='row-column archive'>
                 <button className='toggle-archive' onClick={toggleArchive.bind(this, i)}>{item.archived ? 'Unarchive': 'Archive'}</button>
                </div>
              </div>
         )}
          </div>
        </div>
      }
    </div>  
  )
}

export default LandingPage;