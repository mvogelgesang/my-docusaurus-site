import React from "react";
import { Details } from "@docusaurus/theme-common/Details";
import CodeBlock from "@theme/CodeBlock";
import styles from './styles.module.css';

export default function CommandWithDetails(props) {
  if (!props.title || !props.title.props || !props.title.props.children) {
    throw new Error(
      "CommandWithDetails component requires the title to be wrapped in ` characters.\n Doing so will make it easier for content writers to read the MDX file and identify code snippets.\n\nExample:\ncommand-flag-description `sf org login -o myOrg`\n\n"
    );
  }

  return (
    <div className={styles.CommandWithDetails}>
      <div className={styles.codeBlockTitle}>
        Execute This Command:
      </div>
      <div>
        <CodeBlock language="sh" className={styles.noRadius}>
          {props.title.props.children.replace(/`/g, "")}
        </CodeBlock>
      </div>

      <Details summary={"Command & Flag Details"} className={styles.CFD_Details}>
        <div>{props.children}</div>
      </Details>
    </div>
  );
}
