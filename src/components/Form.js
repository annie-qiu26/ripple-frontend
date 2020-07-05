import { useForm } from "react-hook-form";
import React from "react";
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

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();

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
          options={[
            "cheesecake",
            "photography",
            "cake pops",
            "almonds",
            "mouse",
            "long",
            "ice cream"
          ]}
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
    alert("hello");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
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
