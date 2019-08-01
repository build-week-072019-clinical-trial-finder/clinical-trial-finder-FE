import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetch, fetchWatchlist, addToWatchlist } from '../store/actions/index';
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

import { Grid, Dimmer, Loader, Image, Container} from "semantic-ui-react";


const Dashboard = (props) => {
  useEffect(() => {
    props.fetch();
    props.fetchWatchlist();
  }, [])

  const searchContainerStyles = {
    marginTop: "4rem"
  };

  const addTrial = (event, trial) => {
    event.preventDefault();
    props.addToWatchlist(trial);
  }

  return (
    <div>
      <Grid textAlign="center" style={searchContainerStyles}>
        <Grid.Column width="10">
          <Search />
        </Grid.Column>
      </Grid>
      {props.isFetchingWatchlist || props.isFetching ? (
        <Container>
          <Dimmer active inverted>
            <Loader inverted content='Loading' size='large'/>
          </Dimmer>
          <Image src='/images/wireframe/short-paragraph.png' />
        </Container>
      ) : <Cards trials={props.trials} addTrial={addTrial}/>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trials: state.trials,
  watchlist: state.watchlist,
  isFetching: state.isFetching,
  isFetchingWatchlist: state.isFetching
})

export default connect(mapStateToProps, { fetch, fetchWatchlist, addToWatchlist })(Dashboard);