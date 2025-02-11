import { Link } from "react-router-dom";
import { useState } from "react";
// import { bookInfo } from "../utils/mocKData";
import BookList from "./BookList";

import "./style.css";

import { useSelector } from "react-redux";

function Home(){
    const bookInfo =  useSelector((store)=> store.list.items)

    const [category,setCategory]=useState('All')
    const popularBooks = bookInfo.filter((book)=>{
        return book.genre.includes('Classic')
    })

    return (
        <>
        <div className="home">

        <h1>Welcome to Library</h1>
        <div className="categories">

            <h3>categories :</h3>
            <select name="" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value=""   >select genre </option>
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

            {category == 'All' ? null:  <Link to ={`/books/${category}`}  >
            <button>search</button>
            </Link>}
          

        </div>

        <h2>Popular books</h2>

        <BookList  booksData={popularBooks}/>
        </div>
        
        
        
        
        </>

     
    )

}

export default Home;