//this is experimental
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Message, Button, Dimmer, Loader, Image, Container } from 'semantic-ui-react';
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
    <Grid container textAlign="center" style={{paddingTop: '30px'}}>
      <Button style={{background: '#b80c09', color: '#ffffff', padding: '15px'}}><Link to='/Dashboard' style={{textDecoration: 'none', color: '#ffffff'}}>Back to dashboard</Link></Button>
      {props.isFetchingWatchlist ? (
        <Container>
          <Dimmer active inverted>
            <Loader inverted content='Loading' size='large'/>
          </Dimmer>
          <Image src='/images/wireframe/short-paragraph.png' />
        </Container>
      ) : props.watchlist.length === 0 ? 
        (<Message>
          <Message.Header>No trials saved in watchlist</Message.Header>
        </Message>) :
        (<Cards trials={props.watchlist} removeTrial={removeTrial}/>)}
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  watchlist: state.watchlist,
  isFetchingWatchlist: state.isFetchingWatchlist
})

export default connect(mapStateToProps, { fetchWatchlist, removeFromWatchlist })(Watchlist);
