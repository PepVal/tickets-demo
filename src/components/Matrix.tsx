import React from "react";

interface IMatrixProps {
  columns?: number;
  rows?: number;
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Matrix = ({ columns = 10, rows = 6 }: IMatrixProps) => {
  const renderRows = () => {
    const r = new Array(rows).fill(0);
    const c = new Array(columns).fill(0);
    return r.map((r, ir) => (
      <div className="row row-cols-auto">
        <MatrixItem key={ir} name={alphabet.substring(ir, ir + 1)} />
        {c.map((_, index) => (
          <MatrixItem key={index} name={`${index + 1}`} />
        ))}
        <MatrixItem key={ir} name={alphabet.substring(ir, ir + 1)} />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="">{renderRows()}</div>
    </div>
  );
};

interface IMatrixItemProps {
  name: string;
  onClick?: () => void;
}

const MatrixItem = ({ name, onClick }: IMatrixItemProps) => {
  return <div>{name}</div>;
};

export default Matrix;
