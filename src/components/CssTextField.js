import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "32px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      "&.Mui-focused fieldset": {
        borderColor: "#33AAFF"
      }
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: "2.5px 8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 12px",
    },
  }
})(TextField);

export default CssTextField;
