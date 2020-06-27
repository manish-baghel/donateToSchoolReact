const apiUrl = process.env.SERVER_URL + ":" + process.env.SERVER_PORT;

export const reqService = {
  allReq,
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
