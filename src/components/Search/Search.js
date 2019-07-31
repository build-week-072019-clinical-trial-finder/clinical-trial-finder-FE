import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Message,
  Segment
} from "semantic-ui-react";
import styles from "./Search.module.scss";

const Search = () => {
  const [query, setQuery] = useState({ trial: "" });

  const [queryErrors, setQueryErrors] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    if (queryErrors.length > 0) {
      setQueryErrors("");
    }
    setQuery({ ...query, trial: value });
  };

  console.log(query);

  const handleSubmitForm = event => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Valid Form");
      /* IMPORTANT - Provide an API call here */
    
  };

  const validateForm = () => {
    let valid = true;

    if (!query.trial) {
      setQueryErrors("Invalid search keyword");
      valid = false;
    }

    return valid;
  };

  return (
    <div>
      <Form
        className={styles.searchForm}
        size="large"
        onSubmit={handleSubmitForm}
      >
        <Form.Group>
          <Form.Field inline>
            <label htmlFor="query">Search</label>
            <input
              type="text"
              name="query"
              value={query.trial}
              onChange={handleInputChange}
              placeholder="Clinic Trials"
            />
          </Form.Field>

          <Button className={styles.buttons} type="submit">
            Submit
          </Button>
        </Form.Group>
        {queryErrors.length > 0 && <Message>{queryErrors}</Message>}
      </Form>
    </div>
  );
};

export default Search;
