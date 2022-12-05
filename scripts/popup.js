import { selectorsStore } from "./selectors-manager.js";

const update = async () => {
  const selectorListElements = [];

  Object.entries(await selectorsStore.getAll())
    .sort((s1, s2) => {
      return s1[0].localeCompare(s2[0]);
    })
    .forEach(([selector, duration]) => {
      const selectorItem =
        selectorEntryTemplate.content.firstElementChild.cloneNode(true);
      selectorItem.querySelector(".selector_name").textContent = selector;
      selectorItem.querySelector(".load_time").textContent = duration;
      selectorItem
        .querySelector(".remove_button")
        .addEventListener("click", async () => {
          await selectorsStore.remove(selector);
          await update();
        });
      selectorListElements.push(selectorItem);
    });

  if (selectorListElements.length > 0) {
    let ul = document.querySelector("ul");
    if (!ul) {
      ul = document.createElement("ul");
      document.querySelector("main").prepend(ul);
    }
    ul.replaceChildren(...selectorListElements);
  } else {
    try {
      document.querySelector("ul").remove();
      document.querySelector("#reload_info").classList.add("hidden");
    } catch {}
  }
};

const onAddSelector = async () => {
  const selector = document.querySelector("input");
  if (selector.value.length === 0) {
    return;
  }
  await selectorsStore.add(selector.value);
  await update();
  selector.value = "";
  document.querySelector("#reload_info").classList.remove("hidden");
};

const selectorEntryTemplate = document.getElementById("selector_li_template");

document.querySelector("button").addEventListener("click", onAddSelector);
document.querySelector("input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAddSelector();
});

await update();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});
