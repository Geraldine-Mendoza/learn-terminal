import React from 'react';

function Terminal() {
  return (
    <div>
      {/* space for navbar -- for some reason needed in deployment, dont remove! */}
      <div style={{ height: '80px' }}></div>
      <div className="top-container">
        <div className="terminal">
          {/* server: https://api.hackwithterminal.study/ttyd */}
          <iframe
            src="https://api.hackwithterminal.study/ttyd"
            width="100%"
            height="100%"
            title="terminal"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
