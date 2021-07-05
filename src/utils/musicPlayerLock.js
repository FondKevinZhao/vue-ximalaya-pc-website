let lock = JSON.parse(window.localStorage.getItem("lock"));

function setLock(e) {
  window.localStorage.setItem("lock", e);
}

export { lock, setLock };
