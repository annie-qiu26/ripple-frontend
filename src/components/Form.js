import React from "react";
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
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OrganizationsField from "./OrganizationsField";
import ButtonR from "./Button";
import "./Form.css";

import { createRipple } from "../api/ripple";

const LOCATION_TOOLTIP =
  "Why share your location? We just wanna show some cool statistics, like how far your ripple traveled.";

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
  const history = useHistory();
  const { handleSubmit, errors, register, formState, control } = useForm();

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
        <Checkbox defaultIsChecked size="md">
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
    createRipple(title, organizations.map(org => org._id)).then(res => history.push(`/ripplits/${res.link_id}`));
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        {Title()}
        {Organizations(control)}
        {Email()}
        {Location()}
        <FormErrorMessage>
          {errors.email && errors.email.message}
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
