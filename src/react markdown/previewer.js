import React from "react";
import styles from "./Previewer.module.css";
import ReactDOMServer from "react-dom/server";
import { marked } from "marked";

class Previewer extends React.Component {
  markedString = () => {
    const option = {
      gfm: true,
      breaks: true,
    };
    return marked(this.props.input, option);
    //.replace(/(\n)/g, " $1 <br> \n");
    // .replace(/\n/g, "<br> \n");
  };
  render() {
    return (
      <div
        id="preview"
        className={`${styles.previewContainer} "container" ${styles.previewMarked}`}
        dangerouslySetInnerHTML={{
          __html: this.markedString(),
        }}
      >
        {/* {this.markedString()} */}
        {/* <h1 id={styles["childTitle1"]} className="text-lg">
          Hello this is the Previewer!
        </h1> */}
        {/* <textarea>{this.props.input}</textarea> */}
        {/* <ConvertedToHTML textToConvert={marked(this.props.input)} /> */}
      </div>
    );
  }
}

export default Previewer;
