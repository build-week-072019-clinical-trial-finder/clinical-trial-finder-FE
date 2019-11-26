import React, { useState } from "react";
import { Button, Form, Message, Header } from "semantic-ui-react";

import styles from "./Search.module.scss";

const Search = (props) => {
  const [query, setQuery] = useState('');

  const [queryErrors, setQueryErrors] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    if (queryErrors.length > 0) {
      setQueryErrors("");
    }
    setQuery(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Valid Form");
      /* IMPORTANT - Provide an API call here */
      props.fetchTrials(event, query)
      resetForm();
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!query) {
      setQueryErrors("Invalid search keyword(s)");
      valid = false;
    }

    return valid;
  };
  const resetForm = () => {
    setQuery("");
    setQueryErrors("");
  };
  return (
    <div>

      <Form
        className={styles.searchForm}
        size="big"
        onSubmit={handleSubmitForm}
      >
        <Header as="h1">{props.trials.length === 0 ? 'Search for clinical trials' : 'Make a new search'}</Header>
        <Form.Input
          type="text"
          name="query"
          value={query.trial}
          onChange={handleInputChange}
          placeholder="Enter state or condition"
        />

        <Button className={styles.buttons} type="submit" size="large">
          Search
        </Button>

        {queryErrors.length > 0 && (
          <Message
            color="red"
            size="small"
            header="Please enter at least 1 search term"
          ></Message>
        )}
      </Form>
    </div>
  );
};

export default Search;
