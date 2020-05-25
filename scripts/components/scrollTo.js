import {log} from "./utils";

export const scrollTo = function (window) {
  // Check for browser supports, else return and allow default behaviour
  if (typeof document.body.scrollIntoView !== "function") {
    return;
  }
  log("Scroll To initialised");

  // Name of data attribute in html
  const dataAttribTarget = "data-scroll-to";

  // Default scrollIntoView position
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const defaultScrollPosition = "start";

  // Main scroller function
  const scroller = function (event) {
    // Prevent default browser anchor 'jump' behaviour
    event.preventDefault();

    // The tartget ID to scroll to, defined in html data attribute "data-scroll-to"
    const target = document.getElementById(this.dataset["scrollTo"]);

    // Optional. If scroll to position defined (start, center, end) else defaultScrollPosition.
    const targetEdge = this.dataset["scrollBlock"] || defaultScrollPosition;

    // If no target specified return alert with some help and log element to console.
    // If you prefer this approah, then simply remove the '.filter' in the return below
    if (!target)
      return alert(
        `To use Scroll To, you need to specify a target on this element: \n 
        <${this.tagName.toLowerCase()} id="${this.id}" class="${this.className}"> ${log(
          this
        )} \n
        HTML Element logged to the console 👍`
      );

    // log(target, targetEdge, this);

    // The scroll magic
    target.scrollIntoView({
      behavior: "smooth",
      block: targetEdge,
    });
  };

  // Find all instances of data-scroll-to and convert to array [...]
  const scrollToArr = [...document.querySelectorAll(`[${dataAttribTarget}]`)];
  log(`Scroll To found ${scrollToArr.length} instances.`);
  // Return instances that have a defined 'data-scroll-to' target:
  return scrollToArr
    .filter((item) => item.dataset["scrollTo"] !== "")
    .map((item) => item.addEventListener("click", scroller));
};
