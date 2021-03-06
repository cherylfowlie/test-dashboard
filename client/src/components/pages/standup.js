import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

// This file exports both the List and ListItem components

export function ListStandUp() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default ListStandUp;
