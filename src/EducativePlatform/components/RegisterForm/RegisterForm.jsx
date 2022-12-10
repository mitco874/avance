import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks';
import { post } from '../../helpers';

export const RegisterForm = () => {
const structure = {nombre_completo:"" ,id_rol:2, email:"",  password:"" }
const {form, onFormUpdate} = useForm (structure)
const handleSubmit = (e)=> {e.preventDefault()
post("http://142.93.203.113:3001/api/register", form)
}
  return (
    <form onSubmit={handleSubmit} className="mx-auto border border-dark rounded h-75 w-50 p-3">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nombre completo</label>
        <input
          onChange={onFormUpdate}
          name= "nombre_completo"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email</label>
        <input
          onChange={onFormUpdate}
          name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Tipo de cuenta</label>
        <select onChange={onFormUpdate} name="id_rol" className="form-control" id="exampleFormControlSelect1" defaultValue={2}>
          <option value={2}>Estudiante</option>
          <option value={3}>Docente</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlPassword">Contraseña</label>
        <input
          onChange={onFormUpdate}
          name="password"
          type="password"
          className="form-control"
          id="exampleFormControlPassword"
          placeholder="Contraseña"
        />
      </div>
      <br />
      <button type="submit" className="btn btn-dark mb-3">
        Registrarse
      </button>
      <br />
      <span>
        ¿ya tienes una cuenta? <Link to="/inicio-sesion">Iniciar sesion</Link>.
      </span>
    </form>
  );
};
