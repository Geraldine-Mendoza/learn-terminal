import React, { useState } from "react"
import Pagination from 'react-bootstrap/Pagination'
import * as Constants from '../Constants'
import '../CSS/BashPage.css';

function TutorialPage(curPage) {
  return Constants.BASH_LEARN[curPage-1];
}

// function Pages() {
//   const numPages = Constants.BASH_LEARN.length;
//   var pages = [];
//   for(let i = 1; i<=numPages; ++i) {
//     pages.push(<Pagination.Item onClick={(e) => handlePageChange(i, e)}>{i}</Pagination.Item>)
//   }
//   return (
//     <Pagination>
//       <Pagination.Prev />  
//       {pages}
//       <Pagination.Next />
//     </Pagination>
//   )
// }

function BashPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const numPages = Constants.BASH_LEARN.length;
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

  return (
    <div>
      <div className="top-container">
        <div className="documentation">
        {TutorialPage(currentPage)}
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
          <iframe src="./" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}

export default BashPage;
