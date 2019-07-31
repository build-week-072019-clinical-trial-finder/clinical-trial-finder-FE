//this is experimental
import React, { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Message, Button } from 'semantic-ui-react';
import { fetchWatchlist, removeFromWatchlist } from '../store/actions/index';
import Cards from "../components/Cards/Cards";

const Watchlist = (props) => {
  const [savedTrial, setSavedTrial] = useLocalStorage('watchlist', [])

  useEffect(() => {
    props.fetchWatchlist();
  }, [])

  const removeTrial = (event, trialId) => {
    event.preventDefault();
    props.removeFromWatchlist(trialId);
  }

  useEffect(() => {
    setSavedTrial(props.watchlist)
  }, [props.watchlist])

  return (
    <div>
      <Button><Link to='/Dashboard'>Back to dashboard</Link></Button>
      {props.watchlist.length === 0 ? 
        (<Message>
          <Message.Header>No trials saved in watchlist</Message.Header>
        </Message>) :
        (<Cards trials={props.watchlist} removeTrial={removeTrial}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  watchlist: state.watchlist
})

export default connect(mapStateToProps, { fetchWatchlist, removeFromWatchlist })(Watchlist);
