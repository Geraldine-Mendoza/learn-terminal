const sendServerInfo = (signIn, uid) => {
  let data = {
    signIn: signIn,
    user: uid
  }

  // TODO: change url
  fetch("/user-info", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => {
    console.log("res of request : " + res);
    localStorage.setItem('terminalApi', res);
  })
}

export { sendServerInfo }
