import React from "react";
import { Grid } from "@material-ui/core";
import Book from "./Book";

import useStyles from "./styles";

const books = [
  {
    id: 1,
    name: "book1",
    author: "author1",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0WbvoW6vkO4ntTlpvJSOP7R0lqudCQN9bQ&usqp=CAU",
  },
  {
    id: 2,
    name: "book2",
    author: "author2",
    price: 200,
    image:
      "https://image.shutterstock.com/image-vector/open-book-vector-clipart-silhouette-260nw-795305758.jpg",
  },
];

const Books = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Grid container justifyContent="center" spacing={4}>
        {books.map((book) => {
          return (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <Book book={book} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};
export default Books;
