import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: {
    background: "linear-gradient(90deg, #ffab24, #52b2c5 100%)",
    height: 5,
    border: 0,
    padding: 0
  }
}));

export default function FadeLine() {
  const classes = useStyles();
  return <div className={classes.main}></div>;
}
