export const handleLogin = (
  e,
  inputForm,
  handleLoginSuccess,
  errorHandling,
  resetForm
) => {
  e.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(inputForm),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => {
        handleLoginSuccess(user);
        errorHandling({});
      });
    } else {
      r.json().then((err) => {
        resetForm();
        errorHandling(err);
      });
    }
  });
};
