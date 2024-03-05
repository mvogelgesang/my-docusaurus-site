import DetailSection from "./DetailSection";
import React from "react";

export default function DetailSectionNote(props) {
  return (
      <DetailSection title={props.title} className="alert alert--secondary">
        <div>{props.children}</div>
      </DetailSection>
  );
}
