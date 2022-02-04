import React from "react";
import { Location } from "../models/Location";

interface IMatrixProps {
  location: Location;
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Matrix = ({ location }: IMatrixProps) => {
  const renderRows = () => {
    const rowArray = new Array(location.rows).fill(0);
    const columnArray = new Array(location.columns).fill(0);
    return rowArray.map((rowItem, indexRow) => (
      <div className="row mt-1" style={{ flexWrap: "nowrap" }}>
        <MatrixItem
          key={indexRow}
          name={alphabet.substring(indexRow, indexRow + 1)}
          isLetter
        />
        {columnArray.map((columnItem, indexColumn) => (
          <MatrixItem key={indexColumn} name={`${indexColumn + 1}`} />
        ))}
        <MatrixItem
          key={indexRow}
          name={alphabet.substring(indexRow, indexRow + 1)}
          isLetter
        />
      </div>
    ));
  };

  return (
    <div className="matrix-idle">
      <div>{renderRows()}</div>
      <p className="bold text-center" style={{ padding: 0, margin: 0 }}>
        {location.name}
      </p>
    </div>
  );
};

interface IMatrixItemProps {
  name: string;
  isLetter?: boolean;
  onClick?: () => void;
}

const MatrixItem = ({ name, onClick, isLetter = false }: IMatrixItemProps) => {
  return (
    <div className={isLetter ? "matrix-item-letter" : "matrix-item-chair"}>
      <p>{name}</p>
    </div>
  );
};

export default Matrix;
