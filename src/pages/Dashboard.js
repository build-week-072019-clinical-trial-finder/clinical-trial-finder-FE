import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { connect } from "react-redux";
import { fetch, addToWatchlist } from "../store/actions/index";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";
import TrialFilter from "../components/TrialFilter/TrialFilter";

import { Grid } from "semantic-ui-react";

const Dashboard = props => {
  const [savedTrial, setSavedTrial] = useLocalStorage("watchlist", []);
  const [trialList, setTrialList] = useState([]);
  const [condition, setCondition] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    props.fetch();
  }, []);

  useEffect(() => {
    setTrialList(props.trials);
  }, [props]);

  useEffect(() => {
    let filtered = trialList;
    if (condition && condition !== "reset") {
      filtered = trialList.filter(trial => {
        return trial.condition === condition;
      });
    }

    setFilteredList(filtered);
  }, [condition, trialList]);

  const searchContainerStyles = {
    marginTop: "4rem"
  };

  const addTrial = (event, trial) => {
    event.preventDefault();
    props.addToWatchlist(trial);
  };

  const filterTrial = condition => {
    setCondition(condition);
  };

  const resetFilter = () => {
    setCondition("reset");
  };

  useEffect(() => {
    setSavedTrial(props.watchlist);
  }, [props.watchlist, setSavedTrial]);

  return (
    <div>
      <Grid container textAlign="center" style={searchContainerStyles}>
        <Grid.Column>
          <Search />
        </Grid.Column>
      </Grid>
      <Grid container stackable>
        <Grid.Column width={4}>
          <TrialFilter
            trials={props.trials}
            filterTrial={filterTrial}
            resetFilter={resetFilter}
            isFiltered={props.trials.length > filteredList.length}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          {trialList.length > 0 ? (
            <Cards trials={filteredList} addTrial={addTrial} />
          ) : null}
        </Grid.Column>
      </Grid>
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
