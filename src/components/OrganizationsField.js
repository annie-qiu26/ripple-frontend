import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import CssTextField from "./CssTextField";
import "./OrganizationsField.css"

import { listOrganizations } from "../api/organization";

function OrganizationsField({ onChange, control }) {
   const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    listOrganizations().then(res => setOrganizations(res.organizations));
  }, []);

  return (
    <Controller
      as={
        <Autocomplete
          multiple
          options={organizations}
          getOptionLabel={option => option.name}
          renderInput={params => (
            <CssTextField
              {...params}
              variant="outlined"
              placeholder="Organizations"
            />
          )}
        />
      }
      onChange={([, data]) => data}
      name="organizations"
      control={control}
    />
  );
}

export default OrganizationsField;
