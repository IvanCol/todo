import React from "react";
import PanelItem from "./PanelItem/PanelItem";
import classes from "./PanelList.module.scss";

const PanelList = () => {
  const tableNames = ["Statistic", "React", "Git"];
  return (
    <div className={classes.list}>
      {tableNames.map((name, index) => {
        return <PanelItem key={`panelIndex${index}`} name={name} />;
      })}
    </div>
  );
};

export default PanelList;
