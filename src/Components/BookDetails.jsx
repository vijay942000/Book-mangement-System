import { useParams } from "react-router-dom";
import "./style.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function BookDetails() {
  //  eg /book/:category/:id  == params{category:fiction  ,  id:1}

  const bookInfo = useSelector((store) => store.list.items);

  const params = useParams();
  console.log(params);

  const book = bookInfo.filter((book) => {
    return book.id == params.id;
    //  return book.id == params.category.id
  });

  return (
    <>
     <div className="details">

         
      <Link to={params.category ? `/books/${params.category}` : `/home`}>
        <button>{params.category ? "< Back to Browse" : "< Back to home"}</button>
      </Link>

      {book.map((book) => {
        return (
          <div key={book.id}>
            <img height="300px" width='300px' src={book.cover_image} alt="" />
            <h2>Title of the book is {book.title}</h2>
            <h3>published in year {book.publication_year}</h3>
            <p>{book.description}</p>
          </div>
        );
      })}
     </div>
    </>
  );
}

export default BookDetails;
