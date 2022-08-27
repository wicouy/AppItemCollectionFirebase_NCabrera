import { memo } from "react"

const List = ({ usuarios }) => {

    console.log("Render")

    return (
        <section>
            <h2>Lista de usuarios</h2>
            {usuarios.map(usuario => (
                <article key={usuario.nombre}>
                    <h3>{usuario.nombre} {usuario.apellido}</h3>
                </article>
            ))}
        </section>
    )

}
export default memo(List)