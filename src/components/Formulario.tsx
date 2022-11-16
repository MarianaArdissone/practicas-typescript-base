import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const { formulario, handleChange } = useForm({
        email: 'mariana.ardissone7@gmail.com',
        nombre: 'Mariana Ardissone'
    })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                        className="form-control"
                        name="email"
                        value={ formulario.email }
                        onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                        className="form-control"
                        name="nombre"
                        value={ formulario.nombre }
                        onChange={ handleChange }
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>

        </form>
    )
}
