import React from "react";

interface ModelProps {
  names: { name: string }[];
  nameSetHandler: (name: string) => void;
}

export const ModelFilter: React.FC<ModelProps> = ({
  names,
  nameSetHandler,
}) => {
  return (
    <select onChange={(e) => nameSetHandler(e.target.value)} data-testid="name-list">
      <option defaultValue="">Select name</option>
      {names.map((name: { name: string }, index: number) => (
        <option key={index} value={index + 1}>
          {name.name}
        </option>
      ))}
    </select>
  );
};
