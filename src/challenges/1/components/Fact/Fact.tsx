import React from "react";
import { factProps } from "./Fact.types";

export default function Fact(props: factProps) {
  const { index, description, isSaved, handleSave, handleUnSave } = props;
  return (
    <tr>
      <td>{index}</td>
      <td>{description}</td>
      <td>
        <button
          onClick={
            isSaved ? () => handleUnSave(index) : () => handleSave(index)
          }
        >
          {isSaved ? "Un-save" : "Save"}
        </button>
      </td>
    </tr>
  );
}
