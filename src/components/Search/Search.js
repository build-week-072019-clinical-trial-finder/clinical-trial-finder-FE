import React, { useState } from "react";
import { Button, Form, Message, Header } from "semantic-ui-react";

import "./Search.scss";

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
        className='search-form'
        size="big"
        onSubmit={handleSubmitForm}
      >
        <Header style={{ fontSize: '4rem', padding: '0'}}>
          Looking for a clinical trial near you?
        </Header>
        <Header style={{ padding: '0.2rem 0 1rem 0' }}>
          We'll help you break through the complex medical jargon and find a clinical study that you're eligible to join.
        </Header>
        <Form.Group>
          <Form.Input
            className='search-input'
            type="text"
            name="query"
            value={query.trial}
            onChange={handleInputChange}
            placeholder="Medical condition"
          />
          <Button className='search-button' type="submit" size="large">
            FIND A TRIAL
          </Button>
        </Form.Group>
        

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
