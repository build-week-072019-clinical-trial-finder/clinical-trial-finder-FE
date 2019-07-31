import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

import { Grid } from "semantic-ui-react";

const Dashboard = () => {
  const searchContainerStyles = {
    marginTop: "4rem"
  };
  return (
    <div>
      {/* <Cards /> */}
      <Grid textAlign="center" style={searchContainerStyles}>
        <Grid.Column width="10">
          <Search />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Dashboard;
