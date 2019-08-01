import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

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

  const handleSubmitForm = event => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Valid Form");
      /* IMPORTANT - Provide an API call here */

      resetForm();
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!query.trial) {
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
        <Form.Input
          type="text"
          name="query"
          value={query.trial}
          onChange={handleInputChange}
          placeholder="Clinical Trials"
        />

        <Button className={styles.buttons} type="submit" size="large">
          Search
        </Button>

        {queryErrors.length > 0 && (
          <Message
            color="red"
            size="small"
            header="Invalid search keyword(s)"
          ></Message>
        )}
      </Form>
    </div>
  );
};

export default Search;
