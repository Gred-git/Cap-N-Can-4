import { NavLink } from "../../../my-app/src/components/Navbar/NavbarElements.js";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <NavLink to="/" > Home </NavLink>
        </div>
    )
}