const targets = chrome.storage.session.get(null).then((selectors) => {
  for (const selector of Object.keys(selectors)) {
    const selectorDom = document.querySelector(selector);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => console.log(mutation.b));
    });

    const config = { attributes: false, childList: true, characterData: true, subtree: true };
    observer.observe(selectorDom, config);
  }
});
