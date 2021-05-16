import React from "react"
import * as Constants from '../Constants'

function Terminal() {
  return (
    <div>
      <div className="top-container">
        <div className="terminal">
          {/* server: https://api.hackwithterminal.study/ttyd */}
          <iframe src="/" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Terminal;
