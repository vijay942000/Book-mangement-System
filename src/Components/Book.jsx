import './style.css';
function Books(props){

    return(
        <>
        <div className="book-card">

        <img className='book-cover' src={props.data.cover_image} alt="" />

<div className='book-details'>

   <h1 className='book-title'>{props.data.title}</h1>

   <h2 className='book-author'>{props.data.author}</h2>
   {/* <h3 classN  ame='book-publishDate'>{props.data.publishDate}</h3>
    <h3 className='book-paged'>{props.data.paged}</h3> */}

  <p className='book-description'> {props.data.description}</p>

</div>
        </div>
   </>
    )
}
export default Books;