import { Controller } from "stimulus";
import Typed from "typedjs";

export default class TypedEffectController extends Controller {
  static targets = ["output", "text"];

  connect() {
    this.initializeTyped();
    document.addEventListener("turbo:load", this.initializeTyped.bind(this));  // Re-initialize when Turbo loads a new page
  }

  initializeTyped() {
    const typedText = this.textTarget.textContent;  // Get the text content for typing

    new Typed(this.outputTarget, {
      strings: [typedText],
      typeSpeed: 100,        // Speed at which text is typed (ms)
      backSpeed: 50,         // Speed at which text is deleted (ms)
      backDelay: 1000,       // Delay before text starts deleting (ms)
      startDelay: 500,       // Delay before typing starts (ms)
      loop: true,            // Whether the typing effect loops
      showCursor: true,      // Show the cursor while typing
    });
  }
}
