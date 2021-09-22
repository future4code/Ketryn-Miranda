import React from "react";

export default function BoxOption(props) {
  return (
    <div>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}
