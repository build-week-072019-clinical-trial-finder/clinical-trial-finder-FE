import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { connect } from "react-redux";
import { fetch, addToWatchlist } from "../store/actions/index";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

import { Card, Grid } from "semantic-ui-react";

const Dashboard = props => {
  const [savedTrial, setSavedTrial] = useLocalStorage("watchlist", []);

  useEffect(() => {
    props.fetch();
  }, [props]);

  const searchContainerStyles = {
    marginTop: "4rem"
  };

  const addTrial = (event, trial) => {
    event.preventDefault();
    props.addToWatchlist(trial);
  };

  useEffect(() => {
    setSavedTrial(props.watchlist);
  }, [props.watchlist, setSavedTrial]);

  return (
    <div>
      <Grid textAlign="center" style={searchContainerStyles}>
        <Grid.Column>
          <Search />
        </Grid.Column>
      </Grid>
      <Cards trials={props.trials} addTrial={addTrial} />
    </div>
  );
};

const mapStateToProps = state => ({
  trials: state.trials,
  watchlist: state.watchlist
});

export default connect(
  mapStateToProps,
  { fetch, addToWatchlist }
)(Dashboard);
