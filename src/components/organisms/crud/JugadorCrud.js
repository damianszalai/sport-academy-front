import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";

const JugadorCrud = ({setEditMode, setFormVisible,setEditUser, nombre, edad, deporte,description, id, usuario}) => {

  const removeHandler = async (id, e) => {
    e.target.parentElement.parentElement.parentElement.remove();
    await deleteDoc(doc(db, "jugadores", id));
  };
  const editHandler =  (e) => {
    e.preventDefault()
    setEditMode(true)
    setFormVisible(true)
    setEditUser(usuario)
  };

  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{nombre}</td>
      <td>{edad}</td>
      <td>{deporte}</td>
      <td>{description}</td>
      <td>
        <button className="edit btn-warning btn" onClick={(e) => editHandler(e)}>
          <i className="bi bi-pencil"></i>
        </button>
        <button className="delete btn-danger btn" onClick={(e) => removeHandler(id, e)}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default JugadorCrud;
