import { useEffect, useState } from "react";

import "./App.css";

import { getComments } from "./axios";
import Pagination from "./Pagination";

function App() {
  //States
  const [comments, setComments] = useState([]); //All Comments

  const [currentPage, setCurrentPage] = useState(1); //Current page
  const [itemsPerPage, setItemsPerPage] = useState(10); //Number of Items to show per page

  
  //functions
  
  //Api Fetch
  const fetchData = async () => {
    try {
      const res = await getComments(); //fetching api using axios
      
      if (res.status == 200) {
        console.log(res.data.comments);
        setComments(res.data.comments); //setting comments
      } else {
        console.log("no res", res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  //Use Effect
  useEffect(() => {
    fetchData();
  }, []);
  
  let indexOfLastItem = currentPage * itemsPerPage; // 1 *10 next-> 2*10 = 10,20
  let indexOfFirstItem = indexOfLastItem - itemsPerPage; //10 - 10 next -> 20 - 10 = 0,10
  let currentComments = comments.slice(indexOfFirstItem, indexOfLastItem); //slice 0,10 next -> 10,20


  const changePage = (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <ul>
          {currentComments.length > 0 &&
            currentComments.map((comment) => {
              {console.log(currentComments)}
              return (
                <li key={comment.id}>
                  <span>{comment.body}</span>
                  <span>{comment.postId}</span>
                  <span>{comment.likes}</span>
                  <span>{comment.user.id}</span>
                  <span>{comment.user.username}</span>
                  <span>{comment.user.fullName}</span>
                </li>
              );
            })}
        </ul>
      </div>
      <Pagination changePage={changePage} totalComments={comments.length} itemsPerPage={itemsPerPage} />
    </>
  );
}

export default App;
