import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Page introuvable</h1>
            <p>une erreur est survenue !</p>
            <p>{error.error.message}</p>
        </div>
    )
}