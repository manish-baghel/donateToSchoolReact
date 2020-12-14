const apiUrl = process.env.SERVER_URL + ":" + process.env.SERVER_PORT;
// const apiUrl = process.env.SERVER_URL;

export const reqService = {
  allReq,
  commitReq,
};

function allReq() {
  const url = `${apiUrl}/getAllReqs`;
  const options = {
    method: "GET",
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in allReq reqService ================");
      console.log(err);
    });
}



function commitReq(req_id, token) {
  const reqId = req_id;
  const url = `${apiUrl}/commitReq`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [process.env.AUTH_TOKEN_TITLE]: token,
    },
    body: JSON.stringify({
      reqId,
    }),
  };
  console.log(options);
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in commitReq reqService ================");
      console.log(err);
    });
}
