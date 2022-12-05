import { selectorsStore } from "./selectors-manager.js";
console.log("HEllow from background");
chrome.storage.session.setAccessLevel({
  accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS",
});
