function createStore() {
  const listeners = [];
  const data = {};

  function emitChange() {
    listeners.forEach(listener => listener());
  }

  function subscribe(callback) {
    listeners.push(callback);
  }

  function setData(key, value) {
    data[key] = value;
    emitChange();
  }

  function getData() {
    return data;
  }

  return {
    subscribe,
    setData,
    getData,
  };
}

const store = createStore();

store.subscribe(function () {
  const storeData = store.getData();
  console.log('Updated store data:', storeData);
});

store.setData('flavor', 'chocolate');
