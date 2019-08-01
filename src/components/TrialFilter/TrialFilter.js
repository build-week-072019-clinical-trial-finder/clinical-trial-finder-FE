import React, { useState, useEffect } from "react";
import { Button, Card, Header, Grid, List } from "semantic-ui-react";

const TrialFilter = ({ trials, filterTrial, resetFilter }) => {
  const [interventions, setIntervention] = useState([]);

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
                <Button as="a" size="small" onClick={resetFilter}>
                  Reset
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Card.Content>
          <List bulleted divided>
            {interventions.length > 0
              ? interventions.map((intervention, index) => (
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
        </Card.Content>
      </Card>
    </div>
  );
};

export default TrialFilter;
