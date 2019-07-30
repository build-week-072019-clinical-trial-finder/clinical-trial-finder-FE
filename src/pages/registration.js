import React from "react";
import { Grid } from "semantic-ui-react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const registration = () => {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <RegistrationForm />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default registration;
