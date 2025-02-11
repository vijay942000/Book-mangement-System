Library :

A  React application that simulates a library system. Users can browse books by category, view detailed information about each book, and add new books via a form. Redux is used to manage the books list, and React Router handles dynamic routing for pages such as Home, Browse Books, Book Details, Add Book, and a 404 error page.

Pages and Functionality:

1.Home Page:

*Displays a list of categories.
*Shows popular books.
*Contains a navigation bar.

2.Browse Books Page:

*Dynamically filters books based on category (/books/:category).
*Provides a search functionality for books.
*Displays book cards with a "View Details" link.

3.Book Details Page:

*Displays detailed information (title, author, description) for the selected book.
*Includes a "Back to Browse" link.

4.Add Book Page:

*Contains a form to add a new book.
*Utilizes Redux to update the books list.
*Implements form validation.
*Redirects to the Browse Books page upon successful submission.

5.404 Page:

*Renders when an undefined route is accessed.
*Contains a link back to the Home page.


Technologies Used:

1.React – For building the user interface.
2.Redux Toolkit – For state management.
3.React Router v6 – For routing and dynamic URL management.
4.Vite/ – For development tooling and bundling.
5.CSS – For styling the components.
