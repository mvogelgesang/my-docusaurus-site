import React from "react";
import { Details } from "@docusaurus/theme-common/Details";
import styles from './styles.module.css';

export default function DetailSection(props) {
  const classes = props.className ? props.className : 'alert alert--info';
  return (
      <Details summary={props.title} className={`${styles.DetailSection} ${classes}`}>
        <div>{props.children}</div>
      </Details>
  );
}
