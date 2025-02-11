import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../utils/listSlice";
import { useDispatch } from "react-redux";
import "./style.css";

function AddBook(){
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publicationYear, setPublicationYear] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    
    const [error, setError] = useState("");

     // form validation
  const validateForm = () => {
    if (!title || !author || !publicationYear || !genre || !description || !coverImage) {
      setError("All fields are required.");
      return false;
    }
   
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    
    const newBook = {
      id: Date.now(), 
      title:title,
      author :author,
      publication_year: publicationYear,
      genre:genre,        
      description :description,
      cover_image: coverImage,
    };

    // Dispatch the addBook action
    dispatch(addItem(newBook));

    // Redirect to  Browse Books page on submission
    navigate(`/books/${genre}`);
  };

    return (
        <>
        <div className="addBook">

        <h2>Add New Book</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>

      <label>
          Genre:
          
          <select name="" id="" onChange={(e)=>setGenre(e.target.value)}>
          <option value=""></option>
               
                <option value="Fiction">Fiction</option>
                <option value="Philosophical">Philosophical</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Mythology">Mythology</option>
                <option value="Epic">Epic</option>
                <option value="Philosophical Fiction">Philosophical Fiction</option>
                <option value="Comedy">Comedy</option>
                <option value="Classic">Classic</option>
                <option value="Drama">Drama</option>
                <option value="Mystery">Mystery</option>
                <option value="Horror">Horror</option>
            </select>
        </label>
        <label>
          Title:
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />

        <label>
          Author:
          <input 
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <br />

        <label>
          Publication Year:
          <input 
            type="text"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
        </label>
        <br />

       
        <br />

        <label>
          Description:
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />

        <label>
          Cover Image URL:
          <input 
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </label>
        <br />

        <button className="submit" type="submit">Add Book</button>
      </form>
    </div>

        </>
    )


}

export default AddBook;