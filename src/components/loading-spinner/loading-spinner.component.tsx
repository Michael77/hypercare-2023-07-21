import { ReactElement } from "react";
import classes from "./loading-spinner.module.scss";

export default function LoadingSpinner(): ReactElement {
  return <div className={classes.loadingSpinner}></div>;
}
