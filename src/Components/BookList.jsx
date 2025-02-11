
import Books from './Book';
// import { bookInfo } from '../utils/mocKData';
import './style.css';
import { Link } from 'react-router-dom';
function BookList(props){


    return(
        <>
        
      <div className='book-list'>
      {props.booksData.map((item)=>{
        //{`/book/${item.id}`}
//<Link key={item.id}   to={props.category?`/book/${props.category}/${item.id}`:`/book/${item.id}`}
     return <Link key={item.id}   to={props.category?`/books/${props.category}/${item.id}`:`/books/category/${item.id}`} >
      <Books  data={item}/>
      </Link>
            
        })} 
      </div>
         
        </>
    )
}
export default BookList;