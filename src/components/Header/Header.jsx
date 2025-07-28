
import { Link } from "react-router-dom";
import './Header.scss';
function Header() {
    return (
        <header>            
            <section className="header_top">
                <ul>
                    <li>
                        <Link to="/"><i>❔</i></Link>
                    </li>
                    <li>
                        <Link to="/"><i>✉️</i></Link>
                    </li>
                    <li>
                        <Link to="/">🔔</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">
                            <i>
                                <img src="" alt="user" />
                            </i>
                        </Link>
                    </li>
                </ul>
            </section>
        </header>
    );
}
export default Header;