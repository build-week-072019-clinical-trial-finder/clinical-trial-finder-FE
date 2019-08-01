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

const TrialFilter = ({ trials, filterTrial, resetFilter, isFiltered }) => {
  const conditionToDisplay = 5;
  const [conditions, setCondition] = useState([]);
  const [displayingConditions, setDisplayingConditions] = useState([]);

  /* Performs array functions on the trial list to extract unique intervention property */
  useEffect(() => {
    let filtered = trials.map(trial => {
      return trial.condition;
    });

    let unique = filtered
      .filter((condition, index) => {
        return filtered.indexOf(condition) === index;
      })
      .map(data => {
        return data === "null" ? "Condition Not Available" : data;
      })
      .sort();

    setCondition(unique);
  }, [trials]);

  /* Limiting the intervention list to contain only 5 intervention initially */
  useEffect(() => {
    const displaying = conditions.slice(0, conditionToDisplay);
    setDisplayingConditions(displaying);
  }, [conditions]);

  /* Expand the intervention list to contain more interventions */
  const loadMoreConditions = () => {
    const displayingNumber = displayingConditions.length;

    const moreConditions = conditions.slice(
      0,
      displayingNumber + conditionToDisplay
    );

    setDisplayingConditions(moreConditions);
  };

  const loadLessConditions = () => {
    const displayingNumber = displayingConditions.length;
    const lessConditions = conditions.slice(
      0,
      displayingNumber - conditionToDisplay
    );
    setDisplayingConditions(lessConditions);
  };

  return (
    <div>
      <h1>Filters</h1>
      <Card>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header>By Conditions</Header>
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
            {displayingConditions.length > 0
              ? displayingConditions.map((condition, index) => (
                  <List.Item
                    key={index}
                    as="h4"
                    onClick={() => filterTrial(condition)}
                  >
                    <List.Header as="a">{condition}</List.Header>
                  </List.Item>
                ))
              : ""}
          </List>
          <Container textAlign="center" style={{ marginTop: "30px" }}>
            {conditions.length > displayingConditions.length ? (
              <Button primary onClick={loadMoreConditions}>
                <Button.Content visible>More</Button.Content>
              </Button>
            ) : null}
            {displayingConditions.length > conditionToDisplay ? (
              <Button secondary onClick={loadLessConditions}>
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
