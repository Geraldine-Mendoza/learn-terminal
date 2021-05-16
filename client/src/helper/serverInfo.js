const sendServerInfo = (signIn, uid) => {
  let data = {
    signIn: signIn,
    user: uid
  }

  // TODO: change url
  fetch("hackwithterminal.study/ttyd/login", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => {
    console.log("res of request : " + res);
    localStorage.setItem('token', res);
  })
}

export { sendServerInfo }
