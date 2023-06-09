import React, { useContext } from "react";
import "../pages/LandingPages/Agent/index.css";
import SingleLine from "./singleLine";
import { HandleDelete } from "../pages/LandingPages/Agent/index";

const PrintList = () => {
  const helper = useContext(HandleDelete);
  const { state } = helper;
  return (
    <React.Fragment>
      {state.currentList.map((item) => (
        <SingleLine key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
};

export default PrintList;

