import { useForm } from "react-hook-form";
import React from "react";
import {
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/core";
import "./Form.css";

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();

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
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <div className="form-items">
          <FormLabel htmlFor="title" isRequired="true">
            Title
          </FormLabel>
          <Input
            name="title"
            placeholder="Give your rippl.it a fun title"
            ref={register({ validate: validateName })}
          />
        </div>
        <div className="form-items">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            placeholder="Optional, email"
            ref={register({ validate: validateName })}
          />
        </div>
        <div className="form-items">
          {/* TODO: Explain why location is needed*/}
          <Checkbox>Share your location</Checkbox>
        </div>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        variantColor="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
