import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetch, fetchWatchlist, addToWatchlist } from "../store/actions/index";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";
import TrialFilter from "../components/TrialFilter/TrialFilter";
import { Grid, Dimmer, Loader, Image, Container } from "semantic-ui-react";

const Dashboard = props => {
  const [trialList, setTrialList] = useState([]);
  const [condition, setCondition] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    props.fetchWatchlist();
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

  const fetchTrials = (event, input) => {
    event.preventDefault();
    props.fetch(input);
  };

  return (
    <div>
      <Grid container textAlign="center" style={searchContainerStyles}>
        <Grid.Column>
          <Search fetchTrials={fetchTrials} trials={props.trials} />
        </Grid.Column>
      </Grid>
      <Grid container stackable>
        <Grid.Column width={4}>
          {props.trials.length > 0 ? (
            <TrialFilter
              trials={props.trials}
              filterTrial={filterTrial}
              resetFilter={resetFilter}
              isFiltered={props.trials.length > filteredList.length}
            />
          ) : null}
        </Grid.Column>
        <Grid.Column width={12}>
          {(props.isFetchingWatchlist || props.isFetching) && (
            <Container>
              <Dimmer active inverted>
                <Loader inverted content="Loading" size="large" />
              </Dimmer>
              <Image src="/images/wireframe/short-paragraph.png" />
            </Container>
          )}
          {trialList.length > 0 ? (
            <Cards
              header="Clinical Trials Found"
              trials={filteredList}
              addTrial={addTrial}
            />
          ) : null}
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  trials: state.trials,
  watchlist: state.watchlist,
  isFetching: state.isFetching,
  isFetchingWatchlist: state.isFetching
});

export default connect(
  mapStateToProps,
  { fetch, fetchWatchlist, addToWatchlist }
)(Dashboard);
