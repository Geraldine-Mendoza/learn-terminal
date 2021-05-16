import React from "react"
import * as Constants from '../Constants'

function Terminal() {
  return (
    <div>
      {/* space for navbar */}
      <div style={{height: '80px'}}></div>
      <div className="top-container">
        <div className="terminal">
          {/* server: https://api.hackwithterminal.study/ttyd */}
          <iframe src="http://192.168.0.51:7681" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Terminal;
