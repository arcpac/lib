import Card from "../UI/Card";
import BookItem from "./BookItem";

const DUMMY_DATA = [
  {
    id: "b1",
    title: "Alice in Wonderland",
    online: true,
    picture: "https://picsum.photos/48/48",
    price: 18.99,
  },
  {
    id: "b2",
    title: "Harry Potter",
    online: true,
    picture: "https://picsum.photos/48/48",
    price: 62.99,
  },
  {
    id: "b3",
    title: "Lord of the Rings",
    online: true,
    picture: "https://picsum.photos/48/48",
    price: 36.99,
  },
  {
    id: "b4",
    title: "Cybersecurity",
    online: true,
    picture: "https://picsum.photos/48/48",
    price: 22.99,
  },
];

function Available() {
  const bookList = DUMMY_DATA.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      title={book.title}
      picture={book.picture}
      price={book.price}
    />
  ));
  return (
    <>
      <h1>On-hand books</h1>
      <Card>
        <ul>{bookList}</ul>
      </Card>
    </>
  );
}
export default Available;
