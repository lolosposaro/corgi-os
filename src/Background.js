import React from "react";

const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${"./img/5.jpg"})`
  }
};

export default class background extends React.Component {
  render() {
    return <div style={styles.paperContainer}>stuff goes here</div>;
  }
}
