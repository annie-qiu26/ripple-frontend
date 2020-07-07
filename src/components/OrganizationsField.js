import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";

import { listOrganizations } from "../api/organization";

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