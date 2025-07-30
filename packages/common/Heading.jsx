import React from "react";

const Heading = (props) => {
  const { title, description } = props;
  return (
    <div>
      <h1>Mono Repo Architecture</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
