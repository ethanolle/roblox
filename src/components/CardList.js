import React from "react";
import Card from "./Card";
function CardList({ robots }) {
  return robots.map((robot, i) => {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
  });
}

export default CardList;