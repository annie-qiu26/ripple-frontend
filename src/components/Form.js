import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Text,
  Flex,
  Tooltip,
  Icon
} from "@chakra-ui/core";
import OrganizationsField from "./OrganizationsField";
import ButtonR from "./Button";
import CssTextField from "./CssTextField";
import "./Form.css";

import { createRipple } from "../api/ripple";

const LOCATION_TOOLTIP =
  "Why share your location? We just wanna show some cool statistics, like how far your ripple traveled.";

function Form() {
  const history = useHistory();
  const {
    handleSubmit,
    errors,
    register,
    formState,
    control,
    setError
  } = useForm();
  const [formSuccessState, setFormSuccessState] = useState(null);
  const [formLoadingState, setFormLoadingState] = useState(null);

  function Title() {
    return (
      <div className="form-items">
        <FormLabel padding="8px 0px" htmlFor="title" isRequired="true">
          Title
        </FormLabel>
        <CssTextField
          required
          name="title"
          placeholder="Give your rippl.it a fun title"
          variant="outlined"
          inputRef={register({ required: true })}
        />
      </div>
    );
  }

  function Organizations(control) {
    return (
      <div className="form-items">
        <FormLabel padding="8px 0px" htmlFor="organizations" isRequired="true">
          Organizations
        </FormLabel>
        <OrganizationsField className="form-items" control={control} />
      </div>
    );
  }

  function validateEmail(value) {
    let error;

    if (!value) {
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  function Email() {
    return (
      <div className="form-items">
        <FormLabel padding="8px 0px" htmlFor="email">
          Email
        </FormLabel>
        <CssTextField
          name="email"
          placeholder="Optional, email"
          variant="outlined"
          inputRef={register({ validate: validateEmail })}
        />
      </div>
    );
  }

  function Location() {
    return (
      <div className="form-items">
        {/* TODO: Explain why location is needed*/}
        <Checkbox className="form-checkbox" defaultIsChecked size="md">
          <Flex className="form-checkbox-inner">
            <Text fontSize="md" marginRight="4px">
              Share your location
            </Text>
            <Tooltip label={LOCATION_TOOLTIP} placement="bottom">
              <Flex className="form-checkbox-icon">
                <Icon padding="1px" name="info-outline" />
              </Flex>
            </Tooltip>
          </Flex>
        </Checkbox>
      </div>
    );
  }

  function onSubmit(values, e) {
    const { title, organizations, email } = values;
    if (!organizations || organizations.length === 0) {
      setFormSuccessState(false);
      setError(
        "organizations",
        "nullOrganizations",
        "Please select at least one organization."
      );
      return;
    }

    setFormLoadingState(true);
    createRipple(title, organizations.map(org => org._id)).then(res =>
      history.push(`/ripplits/${res.link_id}`)
    );
  }

  function renderFormMessage() {
    if (formSuccessState === true) {
      return (
        <span className="formSuccessMessage">
          <Icon name="check-circle" className="checkIcon" />
          <p>Email subscribed sucessfully</p>
        </span>
      );
    } else if (formSuccessState === false) {
      return (
        <span className="form-warning-message">
          <Icon name="warning" className="warning-icon" />
          {errors.email && errors.email.message}
          {errors.organizations && errors.organizations.message}
        </span>
      );
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        {Title()}
        {Organizations(control)}
        {Email()}
        {Location()}
        {renderFormMessage()}
      </FormControl>
      <ButtonR
        margin="12px 0px"
        isLoading={formLoadingState}
        type="submit"
      >
        Submit
      </ButtonR>
    </form>
  );
}

export default Form;
