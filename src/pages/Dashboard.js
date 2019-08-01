import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetch, fetchWatchlist, addToWatchlist } from '../store/actions/index';
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";
import TrialFilter from "../components/TrialFilter/TrialFilter";
import { Grid, Dimmer, Loader, Image, Container} from "semantic-ui-react";


const Dashboard = props => {
  const [trialList, setTrialList] = useState([]);
  const [intervention, setIntervention] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    props.fetch();
    props.fetchWatchlist();
  }, [])

  useEffect(() => {
    setTrialList(props.trials);
  }, [props]);

  useEffect(() => {
    let filtered = trialList;
    if (intervention && intervention !== "reset") {
      filtered = trialList.filter(trial => {
        return trial.intervention_name === intervention;
      });
    }

    setFilteredList(filtered);
  }, [intervention, trialList]);

  const searchContainerStyles = {
    marginTop: "4rem"
  };

  const addTrial = (event, trial) => {
    event.preventDefault();
    props.addToWatchlist(trial);
  };

  const filterTrial = intervention => {
    const actualIntervention =
      intervention === "Intervention Not Available" ? "null" : intervention;
    setIntervention(actualIntervention);
  };

  const resetFilter = () => {
    setIntervention("reset");
  };

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
           {(props.isFetchingWatchlist || props.isFetching) && (
              <Container>
                <Dimmer active inverted>
                  <Loader inverted content='Loading' size='large'/>
                </Dimmer>
                <Image src='/images/wireframe/short-paragraph.png' />
              </Container>
           )}
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
  watchlist: state.watchlist,
  isFetching: state.isFetching,
  isFetchingWatchlist: state.isFetching
})

export default connect(mapStateToProps, { fetch, fetchWatchlist, addToWatchlist })(Dashboard);