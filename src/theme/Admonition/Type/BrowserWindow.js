import React from "react";
import BW from "@site/src/components/BrowserWindow";
export default function BrowserWindow(props) {
  return (
      <BW url={props.title}>
        {props.children}
      </BW>
  );
}
