import React from "react";
import DetailSection from "./DetailSection";

export default function DetailSectionTip(props) {
  return (
      <DetailSection title={props.title} className="alert alert--success">
        <div>{props.children}</div>
      </DetailSection>
  );
}
