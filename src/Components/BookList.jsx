import Books from './Book';
import './style.css';
import { Link } from 'react-router-dom';

function BookList(props) {
    return (
        <div className='book-list'>
            {props.booksData.map((item) => (
                <div key={item.id} className="book-item">
                    <Books data={item} />
                    <Link to={props.category ? `/books/${props.category}/${item.id}` : `/books/category/${item.id}`}>
                        <button className="view-details-btn">View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BookList;
