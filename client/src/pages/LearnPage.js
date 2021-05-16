import React, { useEffect, useState } from "react"
import Pagination from 'react-bootstrap/Pagination'
import * as Constants from '../Constants'
import '../CSS/LearnPage.css';

function LearnPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const arr = props.type=="bash" ? Constants.BASH_LEARN : Constants.GIT_LEARN;
  const numPages = arr.length;
  var pages = [];
  for(let i = 1; i<=numPages; ++i) {
    pages.push(<Pagination.Item onClick={(e) => handlePageChange(i, e)}>{i}</Pagination.Item>)
  }

  const handlePageChange = (newPage, e) => {
    e.preventDefault();
    setCurrentPage(newPage);
    console.log("newpage is ", currentPage)
  }

  const prevPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage > 1 ? currentPage-1 : 1);
  }

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage < numPages ? currentPage+1 : numPages)
  }

  // make page 1 after types switches
  useEffect(() => {
    setCurrentPage(1);
  }, [props.type])

  return (
    <div>
      {/* space for navbar -- for some reason needed in deployment, dont remove! */}
      <div style={{height: '80px'}}></div>
      <div className="top-container">
        <div className="documentation">
        {arr[currentPage-1]}
        <div className="pages">
          <div>
          <Pagination>
            <Pagination.Prev onClick={prevPage} />  
            {pages}
            <Pagination.Next onClick={nextPage} />
          </Pagination>
          </div>
        </div>
        </div>
        <div className="terminal">
          {/* server: https://api.hackwithterminal.study/ttyd */}
          <iframe src="https://api.hackwithterminal.study/ttyd" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}

export default LearnPage;
