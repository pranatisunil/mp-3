import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p>
                All Rights Reserved by Pranati Sunil{" "}
                <Link to="/credits">Credits</Link>
            </p>
        </footer>

    );
}