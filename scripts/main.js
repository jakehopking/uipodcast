import {log} from "./components/utils";
import {scrollTo} from "./components/scrollTo";

window.addEventListener("DOMContentLoaded", (event) => {
  log("DOM fully loaded and parsed");
  // Run
  scrollTo(event);
});
