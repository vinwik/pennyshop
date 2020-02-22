import React from "react";

function Title({ title }) {
  return (
    <div className="title">
      <h1>
        <strong>{title}</strong>
      </h1>
    </div>
  );
}

export default Title;
