import React, { useEffect } from "react";
import Item from "./Item";
import datalist from "../../data/datalist";


const pageSize = 2;
const totalPages = datalist.length/pageSize;

const getpage = (numpage) => datalist.slice(numpage*pageSize, numpage*pageSize +pageSize);


const List = () => {

  let [page, setPage] = React.useState(0);
  let [list, setList] = React.useState(getpage(page));

  useEffect(() => {setList(getpage(page))},[page])


    return (
      <div>
        <h1>List</h1>
        <div className="list-group">
         {list.map((item, index) => (
           <Item key={index} className="list-group-item mx-auto" {...item} />
         ))}
        </div>
        <div>
          <button className="btn" onClick={() => setPage(page-1)} disabled={page === 0}>Previous</button>
          <button className="btn" onClick={() => setPage(page+1)} disabled={page === totalPages - 1}>Next</button>
        </div>
      </div>
    );
  
};

export default List;