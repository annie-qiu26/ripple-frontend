import { useForm } from "react-hook-form";
import React from "react";
import {
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select
} from "@chakra-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ButtonR from "./Button";
import "./Form.css";

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();

  const CssTextField = withStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#33AAFF"
        }
      }
    }
  })(TextField);

  function title() {
    return (
      <div className="form-items">
        <FormLabel htmlFor="title" isRequired="true">
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

  function organizations() {
    return (
      <div className="form-items">
        <FormLabel htmlFor="organizations" isRequired="true">
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

  function email() {
    return (
      <div className="form-items">
        <FormLabel htmlFor="email">Email</FormLabel>
        <CssTextField
          name="title"
          placeholder="Optional, email"
          variant="outlined"
        />
      </div>
    );
  }

  function location() {
    return (
      <div className="form-items">
        {/* TODO: Explain why location is needed*/}
        <Checkbox>Share your location</Checkbox>
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
        {title()}
        {organizations()}
        {email()}
        {location()}
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <ButtonR isLoading={formState.isSubmitting} type="submit">
        Submit
      </ButtonR>
    </form>
  );
}
