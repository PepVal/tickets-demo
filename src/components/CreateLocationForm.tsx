import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useField } from "../hooks/useField";
import { Location } from "../models/Location";

interface ICreateProps {
  onClose: () => void;
}

const CreateLocationForm = ({ onClose }: ICreateProps) => {
  const { addLocation } = useContext(GlobalContext);

  const name = useField({ type: "text", initialValue: "" });
  const price = useField({ type: "text", initialValue: "" });

  const createLocation = (e: any) => {
    e.preventDefault();
    const location: Location = {
      name: name.value.toString(),
      price: price.value.toString(),
      rows: 5,
      columns: 5,
    };
    addLocation(location);
  };

  return (
    <div className="mt-2">
      <form className="row g-3" onSubmit={createLocation}>
        <div className="col-auto">
          <label htmlFor="nameInput" className="form-label">
            Nombre de la locación
          </label>
          <input
            {...name}
            className="form-control"
            id="nameInput"
            placeholder="VIP"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="priceInput" className="form-label">
            Precio
          </label>
          <input
            {...price}
            className="form-control"
            id="priceInput"
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
              Crear locación
            </button>
            <button className="btn btn-danger" type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateLocationForm;
