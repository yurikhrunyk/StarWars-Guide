import React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Spinner } from "react-bootstrap";
import styles from "../styles/ModelFilter.module.css";

interface ModelProps {
  names: { name: string }[] | undefined;
  imgNumberSetHandler: (imgNumber: string) => void;
  isError: boolean;
  isLoading: boolean;
}

export const ModelFilter: React.FC<ModelProps> = ({
  names,
  imgNumberSetHandler,
  isError,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (names === undefined) {
    return null;
  }

  return (
    <select
      onChange={(e) => imgNumberSetHandler(e.target.value)}
      data-testid="name-list"
      className={styles.nameList}
    >
      <option defaultValue="">Select name</option>
      {names.map((name: { name: string }, index: number) => (
        <option key={index} value={index + 1}>
          {name.name}
        </option>
      ))}
    </select>
  );
};
