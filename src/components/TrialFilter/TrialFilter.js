import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

const TrialFilter = ({ trials }) => {
  const [interventions, setIntervention] = useState([]);
  //   const [trials, setTrials] = useState([]);

  console.log(trials);
  return (
    <div>
      <h1>Filters</h1>
      <Card>
        <Card.Content>
          <Card.Header>By Interventions</Card.Header>
        </Card.Content>
        <Card.Content></Card.Content>
      </Card>
    </div>
  );
};

export default TrialFilter;
