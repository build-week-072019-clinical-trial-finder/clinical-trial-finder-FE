import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

import { Card, Grid } from "semantic-ui-react";

const Dashboard = () => {
  const searchContainerStyles = {
    marginTop: "4rem"
  };

  return (
    <div>
      <Grid textAlign="center" style={searchContainerStyles}>
        <Grid.Column>
          <Search />
        </Grid.Column>
      </Grid>
      <Cards />
    </div>
  );
};

export default Dashboard;
