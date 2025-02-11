import { useState } from "react";
import "./style.css";
import BookList from "./BookList.jsx";
// import { bookInfo } from '../utils/mocKData.js';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BrowseBooks() {
  const bookInfo = useSelector((store) => store.list.items);

  const params = useParams();
  console.log(params);
  const categoryName = params.category;

  const catBooks = bookInfo.filter((book) => {
    return book.genre.includes(categoryName);
  });

  // to get /update input text after onchange
  let [searchText, setSearchText] = useState("");

  let [afterFilter, setAfterFilter] = useState(
    categoryName ? catBooks : bookInfo
  );

  function handleSearch() {
    const filterBooks = catBooks.filter((book) => {
      // book.title.includes(searchText)
      return book.title.toLowerCase().includes(searchText.toLowerCase());
    });

    setAfterFilter(filterBooks);
  }

  return (
    <>
      <div className="browse-book">
        <div className="search">
          {categoryName?<h2>Books based on {categoryName}</h2>:null}
          <h3>Search Books by title</h3>
          <div>
            {/* refer here for onchange event.target.value */}
            <input width="200px"
              type="text"
              className="search-input"
              onChange={(e) => {
                return setSearchText(e.target.value);
              }}
            />
            <button onClick={handleSearch}>search</button>
          </div>
        </div>
        <BookList category={categoryName} booksData={afterFilter} />
      </div>
    </>
  );
}

export default BrowseBooks;
