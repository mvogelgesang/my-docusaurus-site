import React from "react";
import DetailSection from "./DetailSection";

export default function DetailSectionWarning(props) {
  return (
      <DetailSection title={props.title} className="alert alert--warning">
        <div>{props.children}</div>
      </DetailSection>
  );
}
