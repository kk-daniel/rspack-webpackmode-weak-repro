export function loadWeakDependency() {
  return import(/* webpackMode: "weak" */ "./weak-dependency.js").then(
    ({ message }) => {
      document.body.textContent = message;
      return message;
    },
  );
}

loadWeakDependency().catch((error) => {
  document.body.textContent = `weak import rejected: ${error.message}`;
});
