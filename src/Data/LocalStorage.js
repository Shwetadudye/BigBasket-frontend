const loadData = (key) => {
  if(key=== undefined && key === null) return;
  return JSON.parse(localStorage.getItem(key));
};
const saveData = (key, payload) => {
  if(key=== undefined && key === null) return;
  return localStorage.setItem(key, JSON.stringify(payload));
};

const removeData = (key) => {
  if(key=== undefined && key === null) return;
  return localStorage.removeItem(key);
};

export { loadData, saveData, removeData };
