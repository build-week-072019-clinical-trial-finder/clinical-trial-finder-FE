//this is experimental
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Message, Button, Dimmer, Loader, Image, Container } from 'semantic-ui-react';
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
    <div>
      <Button><Link to='/Dashboard'>Back to dashboard</Link></Button>
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
    </div>
  )
}

const mapStateToProps = (state) => ({
  watchlist: state.watchlist,
  isFetchingWatchlist: state.isFetchingWatchlist
})

export default connect(mapStateToProps, { fetchWatchlist, removeFromWatchlist })(Watchlist);
