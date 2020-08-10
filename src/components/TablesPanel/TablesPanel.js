import React from "react";
import classes from "./TablesPanel.module.scss";
import PanelList from "./PanelList/PanelList";

const TablesPanel = () => {
  return (
    <div className={classes.tablespanel}>
      <h1>Your tables:</h1>
      <PanelList />
    </div>
  );
};

export default TablesPanel;
