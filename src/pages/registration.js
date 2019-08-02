import React from "react";
import { Grid } from "semantic-ui-react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
//import styles from "../assets/styles/theme.module.scss";
const registration = () => {
  return (
    <div>
      <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 400 }}>
          <RegistrationForm />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default registration;
