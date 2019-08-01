import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Header,
  Icon,
  Grid,
  List
} from "semantic-ui-react";

import "../Cards/cards.css"

const TrialFilter = ({ trials, filterTrial, resetFilter, isFiltered }) => {
  const interventionToDisplay = 2;
  const [interventions, setIntervention] = useState([]);
  const [displayingInterventions, setDisplayingInterventions] = useState([]);

  /* Performs array functions on the trial list to extract unique intervention property */
  useEffect(() => {
    let filtered = trials.map(trial => {
      return trial.intervention_name;
    });

    let unique = filtered
      .filter((intervention, index) => {
        return filtered.indexOf(intervention) === index;
      })
      .map(data => {
        return data === "null" ? "Intervention Not Available" : data;
      })
      .sort();

    setIntervention(unique);
  }, [trials]);

  /* Limiting the intervention list to contain only 5 intervention initially */
  useEffect(() => {
    const displaying = interventions.slice(0, interventionToDisplay);
    setDisplayingInterventions(displaying);
  }, [interventions]);

  /* Expand the intervention list to contain more interventions */
  const loadMoreInterventions = () => {
    const displayingNumber = displayingInterventions.length;

    const moreInterventions = interventions.slice(
      0,
      displayingNumber + interventionToDisplay
    );

    setDisplayingInterventions(moreInterventions);
  };

  const loadLessInterventions = () => {
    const displayingNumber = displayingInterventions.length;
    const lessInterventions = interventions.slice(
      0,
      displayingNumber - interventionToDisplay
    );
    setDisplayingInterventions(lessInterventions);
  };
  return (
    <div>
      <h1>Filters</h1>
      <Card>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header>By Interventions</Header>
              </Grid.Column>
              <Grid.Column width={6}>
                {isFiltered ? (
                  <Button as="a" size="small" onClick={resetFilter}>
                    Reset
                  </Button>
                ) : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Card.Content>
          <List bulleted divided>
            {displayingInterventions.length > 0
              ? displayingInterventions.map((intervention, index) => (
                  <List.Item
                    key={index}
                    as="h4"
                    onClick={() => filterTrial(intervention)}
                  >
                    <List.Header as="a">{intervention}</List.Header>
                  </List.Item>
                ))
              : ""}
          </List>
          <Container textAlign="center" style={{ marginTop: "30px" }}>
            {interventions.length > displayingInterventions.length ? (
              <Button primary onClick={loadMoreInterventions}>
                <Button.Content visible>More</Button.Content>
              </Button>
            ) : null}
            {displayingInterventions.length > interventionToDisplay ? (
              <Button secondary onClick={loadLessInterventions}>
                <Button.Content visible>Less</Button.Content>
              </Button>
            ) : null}
          </Container>
        </Card.Content>
      </Card>
    </div>
  );
};

export default TrialFilter;
