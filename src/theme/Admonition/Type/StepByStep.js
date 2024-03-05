import styles from './styles.module.css';

export default function StepByStep(props) {
  if (props.title ) {
    throw new Error(
      "Step-by-step admonition should not have a title."
    );
  }
  return (
    <div className={styles.StepByStep}>
      <div>{props.children}</div>
    </div>
  );
}