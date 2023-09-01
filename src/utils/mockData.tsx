import { ChecklistDataProps } from "../components/checklist/Checklist.js";

export const mockData: ChecklistDataProps[] = [
  {
    title: "Groceries",
    uniqueId: 0,
    items: [
      {
        label: "Milk",
        checked: true,
      },
      {
        label: "Bread",
        checked: false,
      },
    ],
  },
  {
    title: "To Do",
    uniqueId: 1,
    items: [
      {
        label: "Fold the laundry",
        checked: false,
      },
      {
        label: "Wash the dishes",
        checked: false,
      },
    ],
  },
];

export const newChecklist = (id: number) => {
  return {
    title: "New Checklist",
    uniqueId: id,
    items: [
      {
        label: "New Item",
        checked: false,
      },
    ],
  };
};
