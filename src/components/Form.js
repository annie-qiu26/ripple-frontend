import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Text,
  Flex,
  Input,
  Button,
  Select,
  Tooltip,
  Icon
} from "@chakra-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ButtonR from "./Button";
import "./Form.css";

import { createRipple } from "../api/ripple";
import { listOrganizations } from "../api/organization";

const LOCATION_TOOLTIP = "Why share your location? We just wanna show some cool statistics, like how far your ripple traveled."

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "32px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      "&.Mui-focused fieldset": {
        borderColor: "#33AAFF"
      }
    }
  }
})(TextField);

function Form() {
  const [organizations, setOrganizations] = useState([]);
  const { handleSubmit, errors, register, formState } = useForm();

  useEffect(() => {
    listOrganizations().then(res => setOrganizations(res.organizations))
  }, []);

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
        />
      </div>
    );
  }

  function Organizations() {
    return (
      <div className="form-items">
        <FormLabel padding="8px 0px" htmlFor="organizations" isRequired="true">
          Organizations
        </FormLabel>
        <Autocomplete
          multiple
          required
          id="multi-select"
          options={organizations}
          getOptionLabel={(option) => option.name}
          renderInput={params => (
            <CssTextField
              {...params}
              variant="outlined"
              placeholder="Organizations"
            />
          )}
        />
      </div>
    );
  }

  function Email() {
    return (
      <div className="form-items">
        <FormLabel padding="8px 0px" htmlFor="email">
          Email
        </FormLabel>
        <CssTextField
          name="title"
          placeholder="Optional, email"
          variant="outlined"
        />
      </div>
    );
  }

  function Location() {
    return (
      <div className="form-items">
        {/* TODO: Explain why location is needed*/}
        <Checkbox defaultIsChecked size="md">
          <Flex className="form-checkbox-inner">
            <Text fontSize="md" marginRight="4px">Share your location</Text>
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

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error || true;
  }

  function onSubmit(values) {
    console.log(process.env);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        {Title()}
        {Organizations()}
        {Email()}
        {Location()}
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <ButtonR
        margin="12px 0px"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </ButtonR>
    </form>
  );
}

export default Form;
