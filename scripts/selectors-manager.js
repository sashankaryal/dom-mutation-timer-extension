const selectorsStore = {
  getAll: async () => {
    return await chrome.storage.session.get(null);
  },

  add: async (selectorName) => {
    await chrome.storage.session.set({
      [selectorName]: 0,
    });
  },

  update: async (selectorName, value) => {
    await chrome.storage.session.set({
      [selectorName]: value,
    });
  },

  remove: async function (selectorName) {
    await chrome.storage.session.remove(selectorName);
  },
};

export { selectorsStore };
