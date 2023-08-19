import React, { useState } from "react";

import ChecklistItem from "./ChecklistItem";

interface ChecklistProps {
  title?: string;
}

function Checklist(props: ChecklistProps) {
  const [title, setTitle] = useState(props.title || "");

  const style = {
    border: "1px solid black",
  }

  return (
    <article style={style}>
      <div> 
        <button>Rename</button>
        <button>New Item</button>
        <button>Delete</button>
      </div>
      <h2>{title}</h2>
      <ChecklistItem label="Checklist Item 1" />
      <ChecklistItem label="Checklist Item 2" />
      <ChecklistItem label="Checklist Item 3" />
    </article>
  );
}

export default Checklist;