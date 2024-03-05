import BrowserWindow from "@site/src/components/BrowserWindow";
import styles from './styles.module.css';

export default function ImageWithDetails(props) {
  if (!props.title) {
    throw new Error(
      "image-with-details admonition requires a value in the title prop that is the path to an image file. If you do not need an image, we recommend using the step-by-step admonition.\n\nExample:\nimage-with-details (my/image/path.png)\n\n"
    );
  }
  const regex = /^\(.*\)$/;
  if (!regex.test(props.title)) {
    throw new Error(
      "image-with-details admonition requires the title to be wrapped in () characters.\n Doing so will make it easier for content writers to read the MDX file and identify the image path.\n\nExample:\nimage-with-details (my/image/path.png)\n\n"
    );
  }

  const groupRegex = /\((.*?)\)(.*)/;
  const match = props.title.match(groupRegex);
  let imageUrl, browserBarUrl = "";
  if (match) {
    imageUrl = match[1]; 
    browserBarUrl = match[2]; 
  }
  return (
    <div className={`${styles.StepByStep} ${styles.ImageWithDetails}`}>
      <div>{props.children}</div>
      <BrowserWindow url={browserBarUrl}>
        <img src={require(`@site/static/img/${imageUrl}`).default} />
      </BrowserWindow>
    </div>
  );
}
