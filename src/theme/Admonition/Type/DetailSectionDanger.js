import DetailSection from "./DetailSection";
import React from "react";

export default function DetailSectionDanger(props) {
  return (
      <DetailSection title={props.title} className="alert alert--danger">
        <div>{props.children}</div>
      </DetailSection>
  );
}
