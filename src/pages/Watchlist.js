//this is experimental
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button, Loader, Header, Container } from 'semantic-ui-react';
import { fetchWatchlist, removeFromWatchlist } from '../store/actions/index';
import Cards from "../components/Cards/Cards";

const Watchlist = (props) => {
  useEffect(() => {
    props.fetchWatchlist();
  }, [])

  const removeTrial = (event, trialId) => {
    event.preventDefault();
    props.removeFromWatchlist(trialId);
  }

  return (
    <Grid container textAlign="center">
      <Grid.Row>
        <Button style={{background: '#b80c09', color: '#ffffff', padding: '15px', marginTop: '20px'}}><Link to='/Dashboard' style={{textDecoration: 'none', color: '#ffffff'}}>Back to dashboard</Link></Button>
      </Grid.Row>
      <Grid.Row>
      {props.isFetchingWatchlist ? (
        <Container style={{paddingTop: '30px'}}>
          <Loader active inline='centered' content='Loading' size='large'/>
        </Container>
      ) : props.watchlist.length === 0 ? 
        (<Container fluid style={{margin: '10px 0', background: 'white', padding: '20px 30px'}}>
          <Header>No trials saved in watchlist</Header>
        </Container>) :
        (<Cards header='Trials saved in watchlist' trials={props.watchlist} removeTrial={removeTrial}/>)}
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  watchlist: state.watchlist,
  isFetchingWatchlist: state.isFetchingWatchlist
})

export default connect(mapStateToProps, { fetchWatchlist, removeFromWatchlist })(Watchlist);
