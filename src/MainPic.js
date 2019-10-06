import { textAlign } from "@material-ui/system";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Img from "./img/eastwood-logged-out.png";

const useStyles = makeStyles(() => ({
  main: { height: 700, border: 0, padding: 0 },
  image: { height: 800 }
}));

export default function MainPic() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <img className={classes.image} src={Img} alt="https://icons8.com" />
    </div>
  );
}
