import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./style";

const Book = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={book.image}
        title={book.name}
      />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {book.name} {book.author}
          </Typography>
          <Typography variant="h5">{book.price}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add a Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Book;
