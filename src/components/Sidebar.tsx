import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useField } from "../hooks/useField";

const Sidebar = () => {
  const { selectedLocation, updatedSelectedLocation, updateLocation } =
    useContext(GlobalContext);

  const updateRows = (value: string) => {
    if (selectedLocation) {
      const rows = parseInt(value, 10);
      if (rows > 0 && rows <= 26) {
        const location = { ...selectedLocation, rows };
        updatedSelectedLocation(location);
        updateLocation(location);
      }
    }
  };

  const updateColumns = (value: string) => {
    if (selectedLocation) {
      const columns = parseInt(value, 10);
      if (columns > 0 && columns <= 500) {
        const location = { ...selectedLocation, columns };
        updatedSelectedLocation(location);
        updateLocation(location);
      }
    }
  };

  const columns = useField({
    type: "number",
    initialValue: selectedLocation?.columns || 5,
    customOnChange: updateColumns,
  });

  const rows = useField({
    type: "number",
    initialValue: selectedLocation?.rows || 5,
    customOnChange: updateRows,
  });

  const saveMatrix = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    columns.updateValue(selectedLocation?.columns.toString() || "5");
    rows.updateValue(selectedLocation?.rows.toString() || "5");
  }, [selectedLocation]);

  return (
    <div className="sidebar">
      {!selectedLocation ? (
        <div>Esperando que se seleccione una localidad</div>
      ) : (
        <>
          <h2>{selectedLocation.name}</h2>
          <form className="row g-3" onSubmit={saveMatrix}>
            <div className="col-auto">
              <label htmlFor="columnInput" className="form-label">
                Número de columnas
              </label>
              <input
                {...columns}
                className="form-control"
                id="columnInput"
                placeholder="5"
                min={1}
                max={500}
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
                max={26}
                min={1}
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
        </>
      )}
    </div>
  );
};

export default Sidebar;
