import React from "react";

type TypeProps = {
  typeSetHandler: (make: string) => void;
};

export const TypeFilter: React.FC<TypeProps> = ({ typeSetHandler }) => {
  return (
    <div>
      <select onChange={e=>typeSetHandler(e.target.value)}>
        <option defaultValue="">
          Select type
        </option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  );
};
