import React, { useEffect } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { connect } from 'react-redux';
import { fetch, fetchWatchlist, check, addToWatchlist } from '../store/actions/index';
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

import { Grid } from "semantic-ui-react";


const Dashboard = (props) => {
  const [savedTrial, setSavedTrial] = useLocalStorage('watchlist', [])
  
  useEffect(() => {
    props.fetch();
  }, [])

  const searchContainerStyles = {
    marginTop: "4rem"
  };

  const addTrial = (event, trial) => {
    event.preventDefault();
    props.addToWatchlist(trial);
  }
  /*
  useEffect(() => {
    setSavedTrial(props.watchlist)
  }, [props.watchlist])
  */
  
  return (
    <div>
      <Grid textAlign="center" style={searchContainerStyles}>
        <Grid.Column width="10">
          <Search />
        </Grid.Column>
      </Grid>
      <Cards trials={props.trials} addTrial={addTrial}/>
      {/*
      <button onClick={props.fetchWatchlist}>watchlist</button>
      <button onClick={props.check}>check</button>
      <button onClick={props.addToWatchlist}>Add to watchlist</button>
      <button onClick={props.removeFromWatchlist}>Remove from watchlist</button>
      */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trials: state.trials,
  watchlist: state.watchlist
})

export default connect(mapStateToProps, { fetch, fetchWatchlist, check, addToWatchlist })(Dashboard);