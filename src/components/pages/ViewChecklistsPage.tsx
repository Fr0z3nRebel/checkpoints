import Checklist from "../checklist/Checklist";
import { mockData, newChecklist } from "../../utils/mockData";
import React, { useState } from "react";

export function ViewChecklistsPage() {
  const [checklists, setChecklists] = useState(mockData);

  const handleDeleteChecklist = (id: number) => {
    console.log("Deleting checklist: " + id);
    setChecklists((prevState) =>
      prevState.filter((checklist) => checklist.id !== id),
    );
    console.log("Checklist deleted!");
  };

  const handleNewChecklistClick = () => {
    setChecklists((prevState) => [
      ...prevState,
      newChecklist(prevState.length),
    ]);
  };

  return (
    <div>
      <div className="w3-container w3-right-align">
        <div
          className="w3-blue w3-button w3-card w3-padding w3-padding"
          onClick={handleNewChecklistClick}
        >
          +
        </div>
      </div>
      <>
        {checklists.length > 0 &&
          checklists.map((checklist, index) => (
            <Checklist
              key={Math.random() + new Date().toISOString()}
              {...checklist}
              onDelete={handleDeleteChecklist}
            />
          ))}
      </>
    </div>
  );
}
