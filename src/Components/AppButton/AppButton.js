import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  button: {
    background: "#4FCF64",
    color: "#fff",
    marginTop: 10,
    border: "none",
    padding: "15px 30px",
    borderRadius: 10,
    outline: "none",
    fontWeight: 600,
  },
});
export default function AppButton({ onClick, children, disabled, className }) {
  const classes = useStyles();
  return (
    <div>
      <button variant="contained" className={`${classes.button} ${className}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

AppButton.prototype = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};
