const apiUrl = process.env.SERVER_URL + ":" + process.env.SERVER_PORT;
export const userService = {
  login,
  signup,
  logout,
};

function login(email, password) {
  const url = `${apiUrl}/login`;
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email,
      password,
    }),
  };
  console.log(process.env.NODE_ENV);
  console.log(apiUrl, options);
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.status) localStorage.setItem("user", JSON.stringify(json.data));
      console.log("response from server ", json);
      return json;
    })
    .catch((err) => {
      console.log("Error in login userService ==============");
      console.log(err);
    });
}

function signup(data) {
  const {first_name, last_name, email, phone, password, gender} = data;
  // some checks can be added here for the data before requesting the server
  const url = `${apiUrl}/register`;
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      first_name,
      last_name,
      phone,
      gender,
      email,
      password,
    }),
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.status) localStorage.setItem("user", JSON.stringify(json.data));
      console.log("response from server ", json);
      return json;
    })
    .catch((err) => {
      console.log("Error in login userService ==============");
      console.log(err);
    });
}
function logout() {
  localStorage.removeItem("user");
}
