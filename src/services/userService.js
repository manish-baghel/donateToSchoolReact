const apiUrl = process.env.SERVER_URL+':'+process.env.SERVER_PORT;
export const userService = {
    login,
    logout
};

function login(email, password) {
    const url=`${apiUrl}/login`;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password
        })
    };
    console.log(process.env.NODE_ENV);
    console.log(apiUrl,options);
    return fetch(url,options)
    .then(resp => resp.json())
    .then(json => {
      if(json.status) localStorage.setItem('user', JSON.stringify(json.data));
      console.log("response from server ", json);
      return json;
    })
    .catch(err => {
      console.log("Error in login userService ==============");
      console.log(err);
    });
}

function logout() {
    localStorage.removeItem('user');
}
