import React from "react";
import { useField } from "../hooks/useField";

const Sidebar = () => {
  const columns = useField({ type: "number", initialValue: 5 });
  const rows = useField({ type: "number", initialValue: 5 });

  const updateMatrix = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="sidebar">
      <h2>Matriz name</h2>
      <form className="row g-3" onSubmit={updateMatrix}>
        <div className="col-auto">
          <label htmlFor="columnInput" className="form-label">
            Número de columnas
          </label>
          <input
            {...columns}
            className="form-control"
            id="columnInput"
            placeholder="5"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="rowInput" className="form-label">
            Número de filas
          </label>
          <input
            {...rows}
            className="form-control"
            id="rowInput"
            placeholder="15"
          />
        </div>
        <div
          className="col-auto"
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginRight: "4px" }}
            >
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
